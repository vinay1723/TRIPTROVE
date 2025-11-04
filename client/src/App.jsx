import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
// import Home from "./ui/pages/Home";
import Booked from "./ui/pages/Booked";
import SingleTour from "./assets/features/tours/SingleTour";
import Login from "./ui/pages/Login";
import Signup from "./ui/pages/Signup";
import Error from "./ui/Error";
import User from "./assets/features/user/User";
import Home, { loader as topLoaders } from "./ui/pages/Home";
import RecommendedTours, {
  loader as recommendLoader,
} from "./ui/pages/RecommendedTours";
import Tours, { loader as tourLoader } from "./assets/features/tours/Tours";
import BookedTours, { loader as BookedToursLoad } from "./ui/pages/BookedTours";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: topLoaders,
        errorElement: <Error />,
      },
      {
        path: "/tours",
        element: <Tours />,
        loader: tourLoader,
        errorElement: <Error />,
      },
      {
        path: "/recommend",
        element: <RecommendedTours />,
        loader: recommendLoader,
        errorElement: <Error />,
      },
      {
        path: "/tours/:id",
        element: <SingleTour />,
        errorElement: <Error />,
      },
      {
        path: `/tour/:tourId/user/:userId/price/:price`,
        element: <BookedTours />,
        loader: BookedToursLoad,
        errorElement: <Error />,
      },
      {
        path: "/booked",
        element: <Booked />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/Signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/me",
        element: <User />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
