import { getRecommendedTours } from "../../../services/apitours";
import { useLoaderData } from "react-router";
import { getAllTours } from "../../../services/apitours";
import TourItem from "../../assets/features/tours/TourItem";

function RecommendedTours() {
  const { alltours, tours } = useLoaderData();

  const rectours = alltours.filter((tour) => tours.includes(tour._id));

  console.log(rectours);
  return (
    <div className="bg-zinc-50">
      <h1 className="flex flex-col gap-4 mx-7 my-6 text-3xl uppercase text-slate-500">
        Recommended Tours
      </h1>
      <div className="w-max grid grid-cols-4 px-3 py-3 my-9 h-auto">
        {rectours.map((tour) => (
          <TourItem key={tour.id} singletour={tour} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedTours;

export async function loader() {
  const tours = await getRecommendedTours();
  const alltours = await getAllTours();
  return { alltours, tours };
}
