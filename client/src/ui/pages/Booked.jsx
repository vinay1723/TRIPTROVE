import TourItem from "../../assets/features/tours/TourItem";
import { getBooking } from "../../assets/features/tours/tourSlice";

import { useSelector } from "react-redux";

function Booked() {
  const tours = useSelector(getBooking);

  const bookedTours = tours.map((tour) => tour.tour) || [];
  return (
    <div className="flex flex-wrap h-full w-full p-5 justify-center">
      {bookedTours.length > 0 &&
        bookedTours.map((tour) => (
          <TourItem key={tour._id} singletour={tour} />
        ))}
    </div>
  );
}

export default Booked;
