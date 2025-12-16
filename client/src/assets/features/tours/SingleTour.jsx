import { useState } from "react";
// import axios from "axios";
import styles from "./tour.module.css";
import { useStripe } from "@stripe/react-stripe-js";
// import Reviews from "../../../components/Review";
// import { useParams } from "react-router";
// import Footer from "./../../../components/Footer";
import { useSelector } from "react-redux";
import { getSelectedTour } from "./tourSlice";
import "leaflet/dist/leaflet.css";
import Map from "../../../components/Map";
import { getUser } from "../user/userSlice";
import { useNavigate } from "react-router";
import { bookTour } from "../../../../services/stripe";
// import { Link } from "react-router-dom";
// import { map } from "leaflet";
// import { getTour } from "../../../../services/apitours";

function SingleTour() {
  // const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const tour1 = useSelector(getSelectedTour);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const stripe = useStripe();

  // const { id } = useParams();
  const [tour] = useState(tour1);
  var formattedDate;
  if (tour) {
    const dateString = tour.startDates[0];
    const date = new Date(dateString);

    const options = { month: "long", year: "numeric" };
    formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  }

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  async function handleBooking(e) {
    e.preventDefault();
    setStatus(true);
    await bookTour(tour._id, stripe);
    setStatus(false);
  }

  // useEffect(
  //   function () {
  //     async function fetchData() {
  //       const res = await axios({
  //         method: "GET",
  //         url: `http://127.0.0.1:3000/api/v1/tours/singletour/${id}`,
  //       });
  //       // setTour(tour);
  //       console.log(res.data.data[0]);
  //       console.log(res.data.data[0].reviews);
  //       setTour(res.data.data[0]);
  //     }

  //     fetchData();
  //   },
  //   [id]
  // );

  return (
    <div className="gap-0 w-svw h-auto flex flex-col bg-zinc-700  justify-center px-14">
      <div className="w-svw h-auto flex flex-col bg-zinc-700  justify-center relative">
        <div
          className={` ${styles.tourpage} rounded-lg h-[618px] w-11/12 pl-0 my-2 shadow-4xl`}
        >
          <img
            src={`../../img/tours/${tour.imageCover}`}
            className="h-[618px] w-full py-4 bg-cover bg-center rounded-lg"
          />
        </div>

        <div className="absolute inset-1 flex flex-col gap-1 justify-center items-center z-0 pr-16 mr-13">
          <div className="bg-slate-700 px-2 py-2 rounded-lg">
            <h1 className="text-5xl text-stone-100 uppercase">{tour.name}</h1>
          </div>
          <div className="bg-slate-700 px-2 py-2 rounded-lg">
            <h1 className="text-5xl text-stone-100 uppercase">
              {tour.startLocation.description}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-svw h-auto flex flex-col bg-zinc-700  justify-center relative">
        <div className="rounded-lg h-[618px] w-11/12 my-2 shadow-4xl bg-slate-300 flex ">
          <div className="w-1/2 bg-zinc-200 flex flex-col mx-16 pl-40">
            <div className=" mt-10 ml-16 flex flex-col gap-7 ">
              <h1 className="font-semibold upeercase  bg-gradient-to-r from-green-500 via-green-300 text-transparent bg-clip-text text-3xl">
                QUICK FACTS
              </h1>
              <span className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p className="text-xl font-semibold text-slate-600">
                  NEXT DATE
                </p>
                <p>{formattedDate}</p>
              </span>
              <span className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>

                <p className="text-xl font-semibold text-slate-600">
                  DIFFICULTY
                </p>
                <p>{tour.difficulty}</p>
              </span>
              <span className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p className="text-xl font-semibold text-slate-600">
                  PARTICIPANTS
                </p>
                <p>{tour.maxGroupSize}</p>
              </span>
              <span className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>

                <p className="text-xl font-semibold text-slate-600">RATING</p>
                <p>{tour.ratingsAverage}</p>
              </span>
            </div>
            <div className=" mt-10 ml-16 flex flex-col gap-7">
              <h1 className="font-semibold upeercase text-stone-700 bg-gradient-to-r from-green-500 via-green-300 text-transparent bg-clip-text text-3xl">
                YOUR TOUR GUIDES
              </h1>
              {tour.guides.map((guide) => {
                return (
                  <span key={guide._id} className="flex gap-5">
                    <Guides guide={guide} />
                  </span>
                );
              })}
              {/* <span className="flex gap-5">
                <Guides />
              </span>
              <span className="flex gap-5">
                <Guides />
              </span>
              <span className="flex gap-5">
                <Guides />
              </span> */}
            </div>
          </div>
          <div className="w-1/2 bg-zinc-50">
            <div className=" mt-10 ml-16 flex flex-col gap-7 pl-30">
              <h1 className="font-semibold uppercase  bg-gradient-to-r from-green-300 via-green-500 text-transparent bg-clip-text text-3xl">
                ABOUT {tour.name}
              </h1>
              <p className="text-lg pr-10 text-slate-400 font-normal leading-relaxed">
                {tour.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-svw h-[408px] flex flex-col bg-zinc-700 justify-center relative">
        <div className="h-[408px] bg-green-400 w-11/12 rounded-lg flex py-2">
          <img
            src={`../../img/tours/${tour.images[0]}`}
            className="w-1/3  bg-cover bg-center"
          />
          <img
            src={`../../img/tours/${tour.images[1]}`}
            className=" w-1/3 bg-cover bg-center"
          />
          <img
            src={`../../img/tours/${tour.images[2]}`}
            className="w-1/3 bg-cover bg-center"
          />
        </div>
      </div>
      <Map tour={tour} />
      <div className="w-svw h-[408px] flex flex-col bg-zinc-700 justify-center py -2 relative mt-6">
        <div className="grid grid-flow-col auto-cols-[25%] gap-3 overflow-x-scroll w-11/12 py-5">
          {/* <div className="h-[300px] bg-zinc-700 w-11/12 rounded-lg columns-4 overflow-x-scroll"> */}
          {tour.reviews.map((review) => {
            return <Reviews key={review._id} review={review} />;
          })}
        </div>
      </div>
      <div className="w-svw h-[258px] flex flex-col bg-zinc-700 justify-center py-2 relative mt-2 mb-16">
        <div className="h-[300px] bg-zinc-400 w-11/12 rounded-lg flex justify-center gap-24">
          <div className="flex mt-10 ml-[-80px]">
            <img
              src={`../../img/tours/${tour.images[0]}`}
              className="w-[150px] h-[150px] rounded-full mt-3"
            />
            <img
              src={`../../img/tours/${tour.images[1]}`}
              className="w-[150px] h-[150px] rounded-full mt-3 ml-[-60px]"
            />
            <img
              src={`../../img/tours/${tour.images[2]}`}
              className="w-[150px] h-[150px] rounded-full mt-3 ml-[-60px]"
            />
          </div>
          <div className="mt-6  text-2xl font-medium">
            <h1 className="mt-16">WHAT ARE YOU WAITING FOR</h1>
            <p className="font-normal mt-1">
              10 Days.1Adventure.Infinite memories. Make it yours today
            </p>
          </div>
          <div className="mt-7 text-center text-xl font-medium">
            {user && (
              <button
                onClick={handleBooking}
                className="bg-orange-500 box-content text-stone-100 text-2xl rounded-full px-4 py-2 mt-16 font-medium focus:ring focus:ring-yellow-300 focus:ring-offset-2 "
              >
                {status === false ? "BOOK NOW" : "...PROCESSING"}
              </button>
            )}
            {!user && (
              <button
                onClick={handleLogin}
                className="bg-orange-500 box-content text-stone-100 text-2xl rounded-full px-4 py-2 mt-16 font-normal focus:ring focus:ring-yellow-300 focus:ring-offset-2 "
              >
                LOGIN OR SIGNUP
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function Guides({ guide }) {
  return (
    <div className="flex mt-0">
      <img
        src={`../../img/users/${guide.photo}`}
        className="w-[36PX] h-[36PX] rounded-full"
      />
      <span className="mt-1 ml-3  uppercase text-slate-600 font-medium text-xl">
        <h2>{guide.role}</h2>
      </span>
      <span className="mt-1 ml-7">
        <h2>{guide.name}</h2>
      </span>
    </div>
  );
}

function Reviews({ review }) {
  return (
    <div
      className={`${styles.reviews} h-4/5 gap-14 text-stone-800 w-[334px] ml-5`}
    >
      <div className={`${styles.reviewp1} text-xl`}>
        <img src={`../../img/users/${review.user.photo}`} alt="user img" />
        <div>
          <h3>{review.user.name}</h3>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <p>{review.review}</p>
    </div>
  );
}

// function Reviews() {
//   return (
//     <div
//       className={`${styles.reviews} h-4/5 gap-14 text-stone-800 w-[334px] ml-5`}
//     >
//       <div className={`${styles.reviewp1} text-xl`}>
//         <img
//           src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//           alt="user img"
//         />
//         <div>
//           <h3>Mark Edwards</h3>
//           <span>⭐⭐⭐⭐⭐</span>
//         </div>
//       </div>
//       <p>
//         I love how versatile this bag is. It can hold anything ranging from
//         cookies that come in trays to cookies that come in tins.
//       </p>
//     </div>
//   );
// }

// async function loader() {
//   const tour = await get;
// }

// ${styles.tourpage}
export default SingleTour;
