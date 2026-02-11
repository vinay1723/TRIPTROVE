import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import { showAlert } from "./alerts";

export const bookTour = async (tourId, stripe) => {
  try {
    //1)Get checkout session from the end point of api
    const session = await axios({
      method: "GET",
      // url: `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
      // url: `https://triptrove-ergy.onrender.com/api/v1/bookings/checkout-session/${tourId}`,
      url: `https://triptrove-brown.vercel.app/api/v1/bookings/checkout-session/${tourId}`,
      withCredentials: true,
    });
    console.log(session);

    //2)Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    // showAlert("error", err);
    console.log(err);
  }
};
