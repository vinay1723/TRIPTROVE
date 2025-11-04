import TourItem from "../../assets/features/tours/TourItem";
import { getBooking } from "../../assets/features/tours/tourSlice";
// import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Booked() {
  const tours = useSelector(getBooking);
  // const [res, setRes] = useState(null);
  // const { alltours } = useLoaderData();
  // const dispatch = useDispatch();
  // const user = useSelector(getUser);

  // dispatch(setBookings(res.data.bookings));

  return (
    <div className="w-max grid grid-cols-4 px-3 py-3 my-9 h-auto">
      {tours.map((tour) => (
        <TourItem key={tour.id} singletour={tour} />
      ))}
    </div>
  );
}

// export async function loader() {
//   return alltours;
// }

export default Booked;
