import { useState } from "react";
import { Link } from "react-router-dom";
import { setTour } from "./tourSlice";
import { useDispatch } from "react-redux";

// const tour = {
//   startLocation: {
//     description: "Miami, USA",
//     type: "Point",
//     coordinates: [-80.185942, 25.774772],
//     address: "301 Biscayne Blvd, Miami, FL 33132, USA",
//   },
//   ratingsAverage: 4.8,
//   ratingsQuantity: 6,
//   images: ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
//   startDates: [
//     "2021-06-19T09:00:00.000Z",
//     "2021-07-20T09:00:00.000Z",
//     "2021-08-18T09:00:00.000Z",
//   ],
//   _id: "5c88fa8cf4afda39709c2955",
//   name: "The Sea Explorer",
//   slug: "the-sea-explorer",
//   duration: 7,
//   maxGroupSize: 15,
//   difficulty: "medium",
//   guides: ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
//   price: 497,
//   summary: "Exploring the jaw-dropping US east coast by foot and by boat",
//   description:
//     "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   imageCover: "tour-2-cover.jpg",
//   locations: [
//     {
//       _id: "5c88fa8cf4afda39709c2959",
//       description: "Lummus Park Beach",
//       type: "Point",
//       coordinates: [-80.128473, 25.781842],
//       day: 1,
//     },
//     {
//       _id: "5c88fa8cf4afda39709c2958",
//       description: "Islamorada",
//       type: "Point",
//       coordinates: [-80.647885, 24.909047],
//       day: 2,
//     },
//     {
//       _id: "5c88fa8cf4afda39709c2957",
//       description: "Sombrero Beach",
//       type: "Point",
//       coordinates: [-81.0784, 24.707496],
//       day: 3,
//     },
//     {
//       _id: "5c88fa8cf4afda39709c2956",
//       description: "West Key",
//       type: "Point",
//       coordinates: [-81.768719, 24.552242],
//       day: 5,
//     },
//   ],
// };

function TourItem({ singletour }) {
  const [tour] = useState(singletour);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between md:w-1/4 md:text-sm lg:w-1/5 lg:text-lg m-4 rounded-xl  text-slate-750 text-lg shadow-2xl">
      <img src={`./img/tours/${tour.imageCover}`} className="rounded-t-xl" />
      <h3 className="my-2 mx-2 font-semibold">{tour.name.toUpperCase()}</h3>
      <div>
        <div className="flex gap-3 justify-between my-2  mx-2 px-1 py-2">
          <div className="flex gap-1">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>{tour.locations[0].description}</span>
          </div>

          <div className="flex gap-1 mr-5">
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
            april 23
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-between my-2 py-2 px-1 mx-2">
          <div className="flex gap-2">
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

            <span>{tour.maxGroupSize} people</span>
          </div>
          <div className="flex gap-2 mx-16">
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
                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span>{tour.locations.length}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-2 py-2 px-1  justify-between  bg-slate-300">
        <div className="px-2">
          <span>Price: {tour.price}</span>
          <p>
            Avg Rating: <span>{tour.ratingsAverage}</span>
          </p>
        </div>

        <Link
          to={`${tour.slug}`}
          className="bg-slate-950 rounded-full px-3 py-2 text-white w-15 h-12"
          onClick={() => dispatch(setTour(tour))}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default TourItem;
