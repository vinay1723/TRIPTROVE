import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "./ui/AppLayout";

// Lazy loaded pages
const Home = lazy(() => import("./ui/pages/Home"));
const Booked = lazy(() => import("./ui/pages/Booked"));
const SingleTour = lazy(() => import("./assets/features/tours/SingleTour"));
const Login = lazy(() => import("./ui/pages/Login"));
const Signup = lazy(() => import("./ui/pages/Signup"));
const User = lazy(() => import("./assets/features/user/User"));
const RecommendedTours = lazy(() => import("./ui/pages/RecommendedTours"));
const Tours = lazy(() => import("./assets/features/tours/Tours"));
const BookedTours = lazy(() => import("./ui/pages/BookedTours"));
const ErrorPage = lazy(() => import("./ui/Error"));

// Loaders (do not lazy load)
import { loader as topLoaders } from "./ui/pages/Home";
import { loader as recommendLoader } from "./ui/pages/RecommendedTours";
import { loader as tourLoader } from "./assets/features/tours/Tours";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
        loader: topLoaders,
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/tours",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Tours />
          </Suspense>
        ),
        loader: tourLoader,
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/recommend",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <RecommendedTours />
          </Suspense>
        ),
        loader: recommendLoader,
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/tours/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SingleTour />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/tour/successfull",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <BookedTours />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/booked",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Booked />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Signup />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
      {
        path: "/me",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <User />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
