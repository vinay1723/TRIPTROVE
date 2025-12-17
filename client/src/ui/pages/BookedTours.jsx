import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookings } from "../../assets/features/tours/tourSlice";
import { fetchBookTours } from "../../../services/apitours";
import { getUser } from "../../assets/features/user/userSlice";

import { Link } from "react-router-dom";

function BookedTours() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(function () {
    async function fetchBooked() {
      const res = await fetchBookTours(user._id);
      dispatch(setBookings(res.data.bookings));
    }

    fetchBooked();
  }, []);

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

export default BookedTours;
