// import { BookTours, getAllTours } from "../../../services/apitours";
// import { useLoaderData } from "react-router";
// import { useDispatch } from "react-redux";
// import { setBookings } from "../../assets/features/tours/tourSlice";

// import TourItem from "../../assets/features/tours/TourItem";
import { Link } from "react-router-dom";

function BookedTours() {
  // const { res, alltours } = useLoaderData();
  // const dispatch = useDispatch();
  // dispatch(setBookings(res.data.bookings));
  // const bookings = res.data.bookings;
  // const bookedtourids = bookings.map((tour) => tour.tour._id);
  // const tours = alltours.filter((tour) => bookedtourids.includes(tour._id));
  // dispatch(setBookings(tours));

  return (
    <div className="w-[650px] h-[209px] bg-slate-250 my-48 rounded-2xl shadow-2xl ">
      <h1 className=" flex gap-3 text-3xl text-green-500 px-10 py-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        you have successfully booked the tour
      </h1>
      <Link
        className="uppercase ml-64 px-4 py-4 w-14 bg-green-500   rounded-2xl  shadow-2xl text-white font-medium "
        to={"/booked"}
      >
        booked tours
      </Link>
    </div>
  );
}

// export async function loader({ params, request }) {
//   const { tourId, userId, price } = params;
//   // const url = new URL(request.url);
//   // console.log(url);
//   // const tourId = url.searchParams.get("tourId");
//   // const userId = url.searchParams.get("userId");
//   // const Price = url.searchParams.get("price");

//   console.log(tourId, userId, price);
//   console.log(request);
//   const res = await BookTours(tourId, userId, price);
//   const alltours = await getAllTours();

//   return { res, alltours };
// }

export default BookedTours;
