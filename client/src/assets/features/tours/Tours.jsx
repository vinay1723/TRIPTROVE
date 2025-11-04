import TourItem from "./TourItem";
import { getAllTours } from "../../../../services/apitours";
import { useSelector } from "react-redux";
import { getTours } from "./tourSlice";
import { useLoaderData } from "react-router";
import { useDispatch } from "react-redux";
import { addTours } from "./tourSlice";
function Tours() {
  const tours = useLoaderData();
  // console.log(output);
  const dispatch = useDispatch();
  dispatch(addTours(tours));
  const toursoutput = useSelector(getTours);
  console.log(toursoutput);
  // const [tours, setTours] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(function () {
  //   async function fetchData() {
  //     const res = await axios({
  //       method: "GET",
  //       url: `http://127.0.0.1:3000/api/v1/tours/alltours`,
  //     });
  //     console.log(res);
  //     // setTours(res.data.data.allDocs);
  //     dispatch(addTours(res.data.data.allDocs));
  //   }

  //   fetchData();
  // }, []);
  // const tours = useSelector(getTours);

  return (
    <div className="w-max grid grid-cols-4 px-3 py-3 my-9 h-auto">
      {tours.map((tour) => (
        <TourItem key={tour.id} singletour={tour} />
      ))}
    </div>
  );
}

export async function loader() {
  const tours = await getAllTours();
  return tours;
}

export default Tours;

// className="max-w-5xl my-3 px-3 py-3 bg-slate-500 text-stone-100 text-center grid-columns-4"
