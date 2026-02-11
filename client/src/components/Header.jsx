import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto, getUser, setUser } from "../assets/features/user/userSlice";
import { logout } from "../../services/apitours";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const user = useSelector(getUser);
  const photo = useSelector(getPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    const res = await logout();
    if (res.status === "success") dispatch(setUser(null));
    navigate("/");
  }

  return (
    <nav className="relative bg-gray-900/90 backdrop-blur border-b border-white/10">
      <div className="mx-24 max-w-8xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="./../../img/tours/icon.png"
                alt="TripTrove"
                className="h-9 w-9"
              />
              <Link to="/" className="text-xl font-bold text-white">
                TRIPTROVE
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="px-3 py-1.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="px-3 py-1.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                Tours
              </Link>
              <Link
                to="/about"
                className="px-3 py-1.5 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right: Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                >
                  Login
                </Link>
                <Link
                  to="/Signup"
                  className="px-4 py-1.5 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  Logout
                </button>

                <div className="flex items-center gap-2">
                  <img
                    src={
                      photo === null
                        ? `/../../img/users/default.jpg`
                        : `${photo}`
                    }
                    className="w-9 h-9 rounded-full border border-white/20"
                  />
                  <Link to="/me" className="text-sm font-semibold text-white">
                    {user.name}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {!open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10 px-4 py-3 space-y-2">
          <Link to="/" className="block text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/tours" className="block text-gray-300 hover:text-white">
            Tours
          </Link>
          <Link to="/about" className="block text-gray-300 hover:text-white">
            About Us
          </Link>

          {!user ? (
            <div className="flex gap-3 pt-2">
              <Link
                to="/login"
                className="px-3 py-1 rounded-full border border-cyan-400 text-cyan-400"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="px-3 py-1 rounded-full bg-cyan-500 text-black"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 pt-2">
              <img
                src={
                  photo === null ? `/../../img/users/default.jpg` : `${photo}`
                }
                className="w-8 h-8 rounded-full"
              />
              <Link to="/me" className="text-white">
                {user.name}
              </Link>
              <button onClick={handleLogout} className="text-red-400 ml-auto">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
