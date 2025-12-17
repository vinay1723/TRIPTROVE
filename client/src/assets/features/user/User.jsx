import { updateSettings } from "../../../../services/apitours";
import { fetchImage } from "../../../../services/apitours";
import { fetchBookTours } from "../../../../services/apitours";
// import { getAllTours } from "../../../../services/apitours";
import { setBookings } from "../tours/tourSlice";
import { useState } from "react";
import { setPhoto } from "./userSlice";
import { useDispatch } from "react-redux";
import { getUser } from "./userSlice";
import { setUser } from "./userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  async function handleDataUpdate(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("photo", file);
    const res = await updateSettings(form, "data");
    const res1 = await fetchImage(res.data.data.user.photo);
    if (res.statusText === "OK") setImgUrl(res1);
    dispatch(setPhoto(res1));
    dispatch(setUser(res.data.data.user));
    console.log(res);
  }

  async function handlePasswordUpdate(e) {
    e.preventDefault();
    const form = {
      passwordCurrent: currentPassword,
      password: newPassword,
      passwordConfirm: confirmPassword,
    };
    const res = await updateSettings(form, "password");

    console.log(res);
  }

  async function handleMyBookings(e) {
    e.preventDefault();
    const res = await fetchBookTours(user._id);
    const bookings = res.data.bookings;
    dispatch(setBookings(bookings));
    navigate("/booked");
  }

  return (
    <div className="w-svw h-[1100px] my-9  flex justify-center">
      <div className="w-5/6 h-7/8 bg-slate-700 flex shadow-xl">
        <div className="w-1/4 h-full bg-gradient-to-r from-cyan-500 to-blue-500">
          <ul className="flex flex-col gap-10 justify-center ml-20 mt-16 text-xl ">
            <li className="flex gap-3 text-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              SETTINGS
            </li>
            <li className="flex gap-3 text-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p onClick={handleMyBookings}> My BOOKINGS</p>
            </li>
            <li className="flex gap-3 text-xl text-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              REVIEWS
            </li>
            <li className="flex gap-3 text-xl text-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              BILLING
            </li>
          </ul>
          <Admin />
        </div>
        <div className="w-3/4 h-full bg-slate-200 flex justify-center">
          <div className="w-3/4 ml-40 mt-10">
            <form
              onSubmit={handleDataUpdate}
              className="h-1/2  mt-[2px]  w-full border-b-zinc-600 "
            >
              <h1 className="uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-3xl mb-7">
                your account settings
              </h1>
              <ul className="flex flex-col gap-6 text-xl text-stone-500">
                <li className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
                  />
                </li>
                <li className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
                  />
                </li>
                <li className="flex gap-2">
                  <img
                    src={
                      imgUrl == null ? `../../../img/users/default.jpg` : imgUrl
                    }
                    className="w-[75px] h-[75px] rounded-full"
                  />
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  mb-1 border-none"
                  />
                </li>
                <li>
                  {user && (
                    <button className=" hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full">
                      SAVE SETTINGS
                    </button>
                  )}
                  {!user && (
                    <Link
                      to={"/login"}
                      className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full"
                    >
                      LOGIN
                    </Link>
                  )}
                </li>
              </ul>
            </form>
            <div className="w-[1060px] bg-white h-[2px] ml-[-210px]  mt-[-70px]"></div>
            <form
              onSubmit={handlePasswordUpdate}
              className="h-1/2 w-full mt-10"
            >
              <h1 className="uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-3xl mb-7">
                your password settings
              </h1>
              <ul className="flex flex-col gap-6 text-xl text-stone-500">
                <li className="flex flex-col gap-2">
                  <label htmlFor="cpassword">Current Password</label>
                  <input
                    type="text"
                    id="cpassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
                  />
                </li>
                <li className="flex flex-col gap-2">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="text"
                    id="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
                  />
                </li>
                <li className="flex flex-col gap-2">
                  <label htmlFor="conpassword">Confirm Password</label>
                  <input
                    type="text"
                    id="conpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
                  />
                </li>
                <li>
                  {" "}
                  {user && (
                    <button className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full">
                      SAVE PASSWORD
                    </button>
                  )}
                  {!user && (
                    <Link
                      to={"/login"}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full"
                    >
                      LOGIN
                    </Link>
                  )}
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Admin() {
  return (
    <ul className="flex flex-col gap-10 justify-center ml-20 mt-48 text-xl ">
      <li className="flex gap-3 text-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        ADMIN
      </li>
      <li className="flex gap-3 text-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
          />
        </svg>
        TOURS
      </li>
      <li className="flex gap-3 text-xl text-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        USERS
      </li>
      <li className="flex gap-3 text-xl text-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
        ALL REVIEWS
      </li>
    </ul>
  );
}

export default User;
