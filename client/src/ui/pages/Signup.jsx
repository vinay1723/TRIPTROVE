// import { Link } from "react-router-dom";
import { useState } from "react";
// import styles from "../pages/Login.module.css";
// import Footer from "../../components/Footer";
import { signup } from "../../../services/apitours";
import { useDispatch } from "react-redux";
import { setUser } from "../../assets/features/user/userSlice";
import { useNavigate } from "react-router";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirm, setConfirmPassword] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleUserdata(e) {
    e.preventDefault();
    setActive(true);
    const user = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: PasswordConfirm,
      photo: "default.jpg",
    };

    const res = await signup(user);

    dispatch(setUser(res.user));
    setActive(false);
    if (res.status === "success") navigate("/tours");
  }
  return (
    <div>
      <div className={`w-svw flex justify-center items-center p-3`}>
        <form
          onSubmit={handleUserdata}
          className="mt-2 h-[618px] pt-10 gap-4 flex flex-col justify-center items-center  w-[478px] border-b-zinc-600 bg-white shadow-2xl rounded-2xl"
        >
          <h1 className="uppercase font-semibold upeercase  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-3xl mb-5">
            sign into your account
          </h1>
          <ul className="flex flex-col gap-6 text-xl text-stone-500">
            <li className="flex flex-col gap-2">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[407px] h-[50px] p-2 focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[407px] h-[50px] p-2  focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[407px] h-[50px] p-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label>ConfirmPassword</label>
              <input
                type="text"
                id="confirmpassword"
                value={PasswordConfirm}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[407px] h-[50px] p-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md"
              />
            </li>

            <li>
              {" "}
              <button className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-4 py-1 rounded-full text-base">
                {active === true ? "Signing in" : "SIGNUP"}
              </button>
            </li>
          </ul>
        </form>
      </div>
      {/* <div className="w-svw">
        <Footer />
      </div> */}
    </div>
  );
}

export default Signup;
