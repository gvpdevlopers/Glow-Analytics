import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserTag,
  FaPlus,
  FaBuilding,
} from "react-icons/fa";

import AdminLayout from "../layouts/AdminLayout";

import { createUser } from "../services/userService";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    password: "",
    role: "client",
    campaignIds: "",
  });

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser({
        ...formData,

        campaignIds: formData.campaignIds
          .split(",")
          .map((id) => id.trim())
          .filter(Boolean),
      });

      alert("User created successfully");

      // Reset Form
      setFormData({
        name: "",
        businessName: "",
        email: "",
        password: "",
        role: "client",
        campaignIds: "",
      });
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <AdminLayout>
      {/* PAGE HEADER */}
      <div
        className="
          flex flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-6

          mb-10
        "
      >
        {/* LEFT */}
        <div>
          <h1
            className="
              text-4xl md:text-5xl
              font-bold

              text-slate-900
            "
          >
            Create New User
          </h1>

          <p
            className="
              text-slate-500
              mt-3
              text-lg
            "
          >
            Add new clients or admins to the dashboard platform.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            bg-white

            border border-slate-200

            rounded-3xl

            px-6 py-5

            shadow-sm
          "
        >
          <div
            className="
              flex items-center gap-4
            "
          >
            {/* ICON */}
            <div
              className="
                w-14 h-14

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                flex items-center justify-center

                text-white
                text-xl
              "
            >
              <FaPlus />
            </div>

            {/* TEXT */}
            <div>
              <p className="text-slate-500">User Access</p>

              <h2
                className="
                  text-2xl font-bold
                  text-slate-900
                "
              >
                New Account
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FORM CARD */}
      <div
        className="
          bg-white

          border border-slate-200

          rounded-[32px]

          shadow-sm

          overflow-hidden

          max-w-4xl
        "
      >
        {/* HEADER */}
        <div
          className="
            px-8 py-7

            border-b border-slate-200
          "
        >
          <h2
            className="
              text-2xl font-bold
              text-slate-900
            "
          >
            User Information
          </h2>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Fill all required information to create a new user account.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            p-8

            space-y-6
          "
        >
          {/* NAME */}
          <div>
            <label
              className="
                block

                text-sm
                font-semibold

                text-slate-700

                mb-3
              "
            >
              Full Name
            </label>

            <div className="relative">
              {/* ICON */}
              <div
                className="
                  absolute left-5 top-1/2
                  -translate-y-1/2

                  text-slate-400
                "
              >
                <FaUser />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full

                  border border-slate-200

                  rounded-2xl

                  py-4
                  pl-14
                  pr-5

                  outline-none

                  focus:ring-4
                  focus:ring-cyan-500/10

                  focus:border-cyan-400

                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* BUSINESS NAME */}
          <div>
            <label
              className="
      block
      text-sm
      font-semibold
      text-slate-700
      mb-3
    "
            >
              Business Name
            </label>

            <div className="relative">
              {/* ICON */}
              <div
                className="
        absolute left-5 top-1/2
        -translate-y-1/2
        text-slate-400
      "
              >
                <FaBuilding />
              </div>

              <input
                type="text"
                name="businessName"
                placeholder="Enter business name"
                value={formData.businessName}
                onChange={handleChange}
                className="
        w-full
        border border-slate-200
        rounded-2xl
        py-4
        pl-14
        pr-5
        outline-none
        focus:ring-4
        focus:ring-cyan-500/10
        focus:border-cyan-400
        transition-all duration-300
      "
              />
            </div>
          </div>

          {/* CAMPAIGN IDS */}
          <div>
            <label
              className="
      block
      text-sm
      font-semibold
      text-slate-700
      mb-3
    "
            >
              Campaign IDs
            </label>

            <textarea
              name="campaignIds"
              rows={4}
              placeholder="Enter campaign IDs separated by commas"
              value={formData.campaignIds}
              onChange={handleChange}
              className="
      w-full

      border border-slate-200

      rounded-2xl

      py-4
      px-5

      outline-none

      focus:ring-4
      focus:ring-cyan-500/10

      focus:border-cyan-400

      transition-all duration-300
    "
            />

            <p className="text-sm text-slate-500 mt-2">
              Example:
              <br />
              120240662459870379, 120246585798350379
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label
              className="
                block

                text-sm
                font-semibold

                text-slate-700

                mb-3
              "
            >
              Email Address
            </label>

            <div className="relative">
              {/* ICON */}
              <div
                className="
                  absolute left-5 top-1/2
                  -translate-y-1/2

                  text-slate-400
                "
              >
                <FaEnvelope />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full

                  border border-slate-200

                  rounded-2xl

                  py-4
                  pl-14
                  pr-5

                  outline-none

                  focus:ring-4
                  focus:ring-cyan-500/10

                  focus:border-cyan-400

                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label
              className="
                block

                text-sm
                font-semibold

                text-slate-700

                mb-3
              "
            >
              Password
            </label>

            <div className="relative">
              {/* ICON */}
              <div
                className="
                  absolute left-5 top-1/2
                  -translate-y-1/2

                  text-slate-400
                "
              >
                <FaLock />
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="
                  w-full

                  border border-slate-200

                  rounded-2xl

                  py-4
                  pl-14
                  pr-5

                  outline-none

                  focus:ring-4
                  focus:ring-cyan-500/10

                  focus:border-cyan-400

                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* ROLE */}
          <div>
            <label
              className="
                block

                text-sm
                font-semibold

                text-slate-700

                mb-3
              "
            >
              User Role
            </label>

            <div className="relative">
              {/* ICON */}
              <div
                className="
                  absolute left-5 top-1/2
                  -translate-y-1/2

                  text-slate-400

                  z-10
                "
              >
                <FaUserTag />
              </div>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="
                  w-full

                  border border-slate-200

                  rounded-2xl

                  py-4
                  pl-14
                  pr-5

                  appearance-none

                  outline-none

                  focus:ring-4
                  focus:ring-cyan-500/10

                  focus:border-cyan-400

                  transition-all duration-300
                "
              >
                <option value="client">Client</option>

                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              className="
                inline-flex items-center gap-3

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                hover:shadow-xl
                hover:shadow-cyan-500/20

                text-white
                font-semibold

                px-8 py-4

                rounded-2xl

                transition-all duration-300

                hover:-translate-y-1
              "
            >
              <FaPlus />
              Create User
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateUser;
