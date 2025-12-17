import TourItem from "../../assets/features/tours/TourItem";
import { getBooking } from "../../assets/features/tours/tourSlice";

import { useSelector } from "react-redux";

function Booked() {
  const tours = useSelector(getBooking);

  const bookedTours = tours.map((tour) => tour.tour) || [];
  return (
    <div className="w-svw flex px-3 py-3 my-9 h-auto">
      {bookedTours.length > 0 &&
        bookedTours.map((tour) => (
          <TourItem key={tour._id} singletour={tour} />
        ))}
    </div>
  );
}

export default Booked;
