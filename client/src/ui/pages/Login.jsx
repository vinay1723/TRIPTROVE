// import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Login.module.css";
// import Footer from "../../components/Footer";
import { useState } from "react";
import { login } from "../../../services/apitours";
import { useDispatch } from "react-redux";
import { setUser } from "../../assets/features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("completed");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleUserdata(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    console.log(user);

    const res = await login(user);
    console.log(res);
    dispatch(setUser(res.user));
    if (res.status === "success") navigate("/tours");
  }
  return (
    <div>
      <div
        className={`${styles.color} h-[633px]  flex  justify-center w-svw bg-cover bg-center`}
      >
        <form
          onSubmit={handleUserdata}
          className="mt-28 h-[418px] pl-12 pt-10 gap-4 flex flex-col  w-[578px] border-b-zinc-600 bg-white shadow-2xl rounded-2xl"
        >
          <h1 className="uppercase font-semibold   bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-3xl mb-5">
            log into your account
          </h1>
          <ul className="flex flex-col gap-6 text-xl text-stone-500">
            <li className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100 rounded-md text-lg"
              />
            </li>
            <li className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[487px] h-[50px] px-4 py-2 focus:outline-none font-normal text-stone-700   bg-zinc-100  rounded-md text-lg"
              />
            </li>

            <li>
              {" "}
              <button
                onClick={() => {
                  setStatus("loading");
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 px-5 py-2 rounded-full"
              >
                {status === "loading" ? "...LOGIN" : "LOGIN"}
              </button>
              <Link className=" ml-60 text-blue-500 underline">
                forgot password?
              </Link>
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

export default Login;
