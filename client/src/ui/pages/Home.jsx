import "./home.css";
import { Link } from "react-router-dom";
// import TourItem from "../../assets/features/tours/TourItem";
import PopularTour from "../../assets/features/tours/PopularTour";
import ReviewL from "../../components/ReviewL";
import Footer from "../../components/Footer";
import { Top5tours, getAllTours } from "../../../services/apitours";

import { useLoaderData } from "react-router-dom";

const review1 = {
  _id: {
    $oid: "5c8a36a014eb5c17645c910e",
  },
  review:
    "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
  rating: 5,
  createdAt: {
    $date: "2024-05-16T18:14:26.119Z",
  },
  tour: {
    $oid: "5c88fa8cf4afda39709c2970",
  },
  user: {
    name: "marko",
    photo: "user-1.jpg",
  },
  __v: 0,
};

const review2 = {
  _id: {
    $oid: "5c8a368c14eb5c17645c910d",
  },
  review:
    "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
  rating: 5,
  createdAt: {
    $date: "2024-05-16T18:14:26.119Z",
  },
  tour: {
    $oid: "5c88fa8cf4afda39709c2974",
  },
  user: {
    name: "Aldente",
    photo: "user-2.jpg",
  },
  __v: 0,
};

const review3 = {
  _id: {
    $oid: "5c8a38c714eb5c17645c911b",
  },
  review:
    "Rutrum viverra turpis nunc ultricies dolor ornare metus habitant ex quis sociosqu nascetur pellentesque quam!",
  rating: 5,
  createdAt: {
    $date: "2024-05-16T18:14:26.119Z",
  },
  tour: {
    $oid: "5c88fa8cf4afda39709c2970",
  },
  user: {
    name: "johny williams",
    photo: "user-4.jpg",
  },
  __v: 0,
};
function Home() {
  const { alltours, toptours } = useLoaderData();
  const top3tours = toptours.map((tour) => tour._id);
  const tourdata = alltours.filter((tour) => top3tours.includes(tour._id));

  // const tours = useLoaderData();
  // console.log(tours);
  // // console.log(output);
  // const dispatch = useDispatch();
  // dispatch(addTours(tours));
  // const toursoutput = useSelector(getTours);
  // console.log(toursoutput);
  const tour1 = tourdata[0];
  const tour2 = tourdata[1];
  const tour3 = tourdata[2];

  return (
    <div>
      <div className="bg-cover bg-center home-page w-svw overflow-x-hidden">
        <section>
          <h1 className="text-6xl text-stone-100 font-semibold">
            You travel the world.
            <br />
            TripTrove keeps track of your adventures.
          </h1>
          <h2 className="text-xl text-stone-400 font-semibold">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to="/tours" className="cta">
            Explore Tours
          </Link>
        </section>
      </div>
      <section className="w-svw h-[608px] bg-slate-50">
        <h1 className="text-center uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-4xl mb-7 pt-10">
          exciting tours for adventurous people
        </h1>
        <div className="flex gap-16 justify-center ml-24 mt-24">
          <div className="flex flex-col gap-16 justify-center ">
            <div className="w-3/4">
              <h1 className="text-2xl text-slate-500 font-semibold">
                YOURE GOING TO FALL IN LOVE WITH NATURE
              </h1>
              <p className=" text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>

            <div className="w-3/4">
              <h1 className="text-2xl text-slate-500 font-semibold">
                LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
              </h1>
              <p className=" text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>

          <div className="flex mt-5 ml-[-10px] w-1/2">
            <img
              src={`../../img/tours/tour-3-1.jpg`}
              className="w-[190px] h-[190px] mt-3 ml-[100px] shadow-2xl"
            />
            <img
              src={`../../img/tours/tour-3-2.jpg`}
              className="w-[190px] h-[190px] ml-[-250px]  mt-8 shadow-2xl"
            />
            <img
              src={`../../img/tours/tour-3-3.jpg`}
              className="w-[190px] h-[190px] ml-[-280px] mt-16 shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="w-svw h-[708px] bg-slate-100">
        <h1 className="text-center uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-4xl mb-7 pt-10">
          most popular tours
        </h1>
        <div className="flex gap-32 justify-center">
          <PopularTour tour={tour1} />
          <PopularTour tour={tour2} />
          <PopularTour tour={tour3} />
        </div>
      </section>
      <section className="bg-white w-svw h-[508px]">
        <h1 className="text-center uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-4xl mb-7 pt-10">
          we make people happy
        </h1>
        <div className="flex gap-10 pt-18 justify-center">
          <ReviewL review={review1} />
          <ReviewL review={review2} />
          <ReviewL review={review3} />
        </div>
      </section>
      <section className="bg-white w-svw">
        <Footer />
      </section>
    </div>
  );
}

// export async function loader() {
//   const tours = await getAllTours();
//   return tours;
// }

export default Home;
// className="my-10 px-4
// py-3 text-3xl text-center font-semibold text-stone-600 sm:my-16 sm:px-6 bg-slate-300"
export async function loader() {
  const alltours = await getAllTours();
  const tours = await Top5tours();
  const toptours = tours.data.data.allDocs;

  return { alltours, toptours };
}
