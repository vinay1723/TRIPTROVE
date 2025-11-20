import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPhoto, getUser } from "../assets/features/user/userSlice";
import { logout } from "../../services/apitours";
import { setUser } from "../assets/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./header.css";
function Header() {
  const user = useSelector(getUser);
  const photo = useSelector(getPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleLogout() {
    const res = await logout();
    console.log(res);
    if (res.status === "success") dispatch(setUser(null));
    navigate("/");
  }

  return (
    <header className="flex justify-between bg-slate-200 px-3 py-6 w-full font-semibold font-sans md:text-sm lg:text-lg items-center border-b text-stone-700 navlinks">
      <div className=" ml-3 flex items-center gap-3  justify-center">
        <img src="./../../img/tours/icon.png" className="w-15 h-12" />
        <p>
          <Link className="bg-gradient-to-r" to="/">
            TripTrove
          </Link>
        </p>
        {/* <Link
          className="uppercase bg-gradient-to-r  ml-8 focus:ring focus:ring-white"
          to="/recommend"
        >
          RECCOMENDED TOURS
        </Link> */}
      </div>
      <ul className="flex justify-between gap-12  mr-11 ">
        <li className="mt-2">
          <Link
            className="hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-full focus:ring focus:ring-white"
            to="/"
          >
            HOME
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-full focus:ring focus:ring-white"
            to="/tours"
          >
            TOURS
          </Link>
        </li>
        <li className=" hover:bg-cyan-600 hover:text-white px-3 py-2 rounded-full focus:ring focus:ring-white">
          ABOUTUS
        </li>
        <li>
          {!user && (
            <div className="flex gap-3 justify-center">
              <Link
                className="hover:bg-cyan-600 focus:bg-cyan-600 focus:outline-none focus:ring hover:text-stone-100 focus:ring-yellow-300 focus:ring-offset-2 focus:text-stone-100 button px-3 py-1 rounded-full "
                to="/login"
              >
                LOGIN
              </Link>

              <Link
                className="hover:bg-cyan-600 focus:bg-cyan-600 focus:outline-none focus:ring hover:text-stone-100 focus:ring-yellow-300 focus:ring-offset-2 focus:text-stone-100 button px-3 py-1 rounded-full "
                to="/Signup"
              >
                SIGNUP
              </Link>
            </div>
          )}
          {user && (
            <div className="flex gap-7 justify-center">
              <Link
                className="hover:bg-cyan-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 button"
                onClick={handleLogout}
              >
                LOGOUT
              </Link>
              <div className="flex gap-2 ">
                <img
                  src={
                    photo === null ? `/../../img/users/default.jpg` : `${photo}`
                  }
                  className="w-[45px] h-[45px] rounded-full"
                />
                <Link to="/me" className="mt-3 uppercase">
                  {user.name}
                </Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
