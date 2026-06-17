import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { loginUser } from "../services/authService";

import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      // Redirect Based On Role
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white

        flex flex-col

        relative overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-[-120px] left-[-120px]

          w-[350px] h-[350px]

          bg-cyan-500/20

          rounded-full blur-3xl
        "
      ></div>

      <div
        className="
          absolute bottom-[-120px] right-[-120px]

          w-[350px] h-[350px]

          bg-blue-500/20

          rounded-full blur-3xl
        "
      ></div>

      {/* HEADER */}
      <header
        className="
          relative z-10

          w-full

          px-6 md:px-12
          py-6

          flex items-center
        "
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="Glow Ventures" className="w-24 object-contain" />

          <div>
            <h1 className="text-2xl font-bold">Glow Ventures</h1>

            <p className="text-gray-400 text-sm">
              Performance Marketing Dashboard
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1

          flex items-center justify-center

          px-6 md:px-12
          py-10
        "
      >
        <div
          className="
            w-full max-w-7xl

            grid lg:grid-cols-2

            gap-16 items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              hidden lg:block
            "
          >
            <div className="max-w-xl">
              <h2
                className="
                  text-6xl font-bold
                  leading-tight
                "
              >
                Unified Ads
                <span className="text-black-400"> Analytics</span>
                <br />
                Platform
              </h2>

              <p
                className="
                  text-gray-400
                  text-xl
                  leading-relaxed
                  mt-8
                "
              >
                Monitor Meta Ads, Google Ads, campaign performance, reports and
                analytics from one powerful dashboard.
              </p>
            </div>
          </motion.div>

          {/* LOGIN CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              w-full max-w-lg
              mx-auto
            "
          >
            <div
              className="
                bg-slate-900

                border border-slate-700

                rounded-[32px]

                p-8 md:p-10

                shadow-2xl
              "
            >
              {/* MOBILE LOGO */}
              {/* <div
                className="
                  lg:hidden

                  flex items-center gap-0

                  mb-10
                "
              >

                <img
                  src={logo}
                  alt="Glow Ventures"
                  className="
                    w-14 object-contain
                  "
                />



                <div>

                  <h2 className="text-xl font-bold">
                    Glow Ventures
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Marketing Dashboard
                  </p>

                </div>

              </div> */}

              {/* HEADING */}
              <div className="mb-10">
                <h2
                  className="
                    text-4xl font-bold
                  "
                >
                  Welcome Back
                </h2>

                <p
                  className="
                    text-gray-400 mt-4
                    text-lg
                  "
                >
                  Login to continue managing your campaigns and analytics.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* EMAIL */}
                <div className="relative">
                  <div
                    className="
                      absolute left-5 top-1/2
                      -translate-y-1/2

                      text-gray-400

                      flex items-center justify-center
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="
                      w-full

                      bg-slate-950

                      border border-slate-700

                      rounded-2xl

                      py-4
                      pl-14
                      pr-5

                      text-white
                      placeholder-gray-500

                      outline-none

                      focus:border-cyan-400
                      focus:ring-2
                      focus:ring-cyan-400/20

                      transition-all duration-300
                    "
                  />
                </div>

                {/* PASSWORD */}
                <div className="relative">
                  <div
                    className="
                      absolute left-5 top-1/2
                      -translate-y-1/2

                      text-gray-400

                      flex items-center justify-center
                    "
                  >
                    <FaLock />
                  </div>

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="
                      w-full

                      bg-slate-950

                      border border-slate-700

                      rounded-2xl

                      py-4
                      pl-14
                      pr-5

                      text-white
                      placeholder-gray-500

                      outline-none

                      focus:border-cyan-400
                      focus:ring-2
                      focus:ring-cyan-400/20

                      transition-all duration-300
                    "
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="
                    w-full

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500

                    hover:shadow-xl
                    hover:shadow-cyan-500/20

                    text-black
                    font-semibold

                    py-4 rounded-2xl

                    transition-all duration-300
                  "
                >
                  Login to Dashboard
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="
          relative z-10

          text-center

          py-6

          text-gray-500
          text-sm
        "
      >
        © 2026 Glow Ventures. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
