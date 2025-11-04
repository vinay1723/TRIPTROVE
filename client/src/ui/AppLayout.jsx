import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-y-scroll overflow-x-hidden">
        <main className="mx-auto max-w-max">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
