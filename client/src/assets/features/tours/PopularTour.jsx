import { Link } from "react-router-dom";
import { setTour } from "./tourSlice";
import { useDispatch } from "react-redux";

function PopularTour({ tour }) {
  const dispatch = useDispatch();
  return (
    <div className=" mx-3 rounded-xl my-3 w-96 h-max text-slate-750 text-lg shadow-2xl bg-white">
      <img src={`./img/tours/${tour.imageCover}`} className="rounded-t-xl" />
      <h3 className="my-2 mx-2 font-semibold text-center">
        {tour.name.toUpperCase()}
      </h3>
      <div className="flex flex-col gap-3 justify-center px-1 py-2">
        <div className="flex gap-1 ml-20">
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

        <div>
          <div className="flex gap-1 ml-20">
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

        <div className="flex gap-2 ml-20">
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

          <span>upto {tour.maxGroupSize} people</span>
        </div>

        <div className="flex gap-2 ml-20">
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
          <span>{tour.locations.length} Stops</span>
        </div>
      </div>
      <div className="flex gap-3 mt-2  justify-between  bg-slate-300 ">
        <Link
          to={`/tours/${tour.slug}`}
          onClick={() => dispatch(setTour(tour))}
          className="bg-gradient-to-r from-cyan-500 to-blue-500  px-3 py-2 text-white w-full h-12 text-center"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}

export default PopularTour;

{
  /* <div className="flex gap-3 mt-2 py-2 px-1  justify-between  bg-slate-300">
        <div className="px-2">
          <span>Price: {tour.price}</span>
          <p>
            Avg Rating: <span>{tour.ratingsAverage}</span>
          </p>
        </div>

        <Link
          to={`${tour.slug}`}
          className="bg-slate-950 rounded-full px-3 py-2 text-white w-15 h-12"
        >
          Details
        </Link>
      </div> */
}
