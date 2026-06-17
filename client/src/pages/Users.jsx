import { useEffect, useState } from "react";

import { FaTrash, FaEdit, FaSearch, FaUsers } from "react-icons/fa";

import AdminLayout from "../layouts/AdminLayout";

import { getUsers, deleteUser } from "../services/userService";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete User
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Filter Users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

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
            Users Management
          </h1>

          <p
            className="
              text-slate-500
              mt-3
              text-lg
            "
          >
            Manage all dashboard users and permissions.
          </p>
        </div>

        {/* USERS COUNT */}
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
              <FaUsers />
            </div>

            <div>
              <p className="text-slate-500">Total Users</p>

              <h2
                className="
                  text-3xl font-bold
                  text-slate-900
                "
              >
                {users.length}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="
          bg-white

          border border-slate-200

          rounded-[30px]

          shadow-sm

          overflow-hidden
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            p-6 md:p-8

            border-b border-slate-200

            flex flex-col
            lg:flex-row

            lg:items-center
            lg:justify-between

            gap-5
          "
        >
          {/* LEFT */}
          <div>
            <h2
              className="
                text-2xl font-bold
                text-slate-900
              "
            >
              All Users
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Search and manage users easily.
            </p>
          </div>

          {/* SEARCH */}
          <div
            className="
              relative

              w-full
              lg:w-[350px]
            "
          >
            {/* ICON */}
            <div
              className="
                absolute left-5 top-1/2
                -translate-y-1/2

                text-slate-400
              "
            >
              <FaSearch />
            </div>

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full

                border border-slate-200

                rounded-2xl

                py-3.5
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

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table
            className="
              w-full
              min-w-[850px]
            "
          >
            {/* TABLE HEAD */}
            <thead
              className="
                bg-slate-50
              "
            >
              <tr>
                <th
                  className="
                    px-8 py-5
                    text-left

                    text-sm
                    font-semibold

                    text-slate-500
                  "
                >
                  User
                </th>

                <th
                  className="
                    px-8 py-5
                    text-left

                    text-sm
                    font-semibold

                    text-slate-500
                  "
                >
                  Email Address
                </th>

                <th
                  className="
                    px-8 py-5
                    text-left

                    text-sm
                    font-semibold

                    text-slate-500
                  "
                >
                  Role
                </th>

                <th
                  className="
                    px-8 py-5
                    text-left

                    text-sm
                    font-semibold

                    text-slate-500
                  "
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="
                      border-t border-slate-100

                      hover:bg-slate-50/80

                      transition-all duration-300
                    "
                >
                  {/* USER */}
                  <td className="px-8 py-6">
                    <div
                      className="
                          flex items-center gap-4
                        "
                    >
                      {/* AVATAR */}
                      <div
                        className="
                            w-14 h-14

                            rounded-2xl

                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-500

                            flex items-center justify-center

                            text-white
                            font-bold
                            text-lg

                            shadow-lg
                          "
                      >
                        {user.name?.charAt(0)}
                      </div>

                      {/* INFO */}
                      <div>
                        <h3
                          className="
                              font-semibold
                              text-slate-900
                            "
                        >
                          {user.name}
                        </h3>

                        <p
                          className="
                              text-sm
                              text-slate-500

                              mt-1
                            "
                        >
                          Dashboard User
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td
                    className="
                        px-8 py-6

                        text-slate-600
                      "
                  >
                    {user.email}
                  </td>

                  {/* ROLE */}
                  <td className="px-8 py-6">
                    <span
                      className={`
                          px-4 py-2

                          rounded-full

                          text-sm
                          font-medium

                          ${
                            user.role === "admin"
                              ? `
                                bg-blue-100
                                text-blue-700
                              `
                              : `
                                bg-emerald-100
                                text-emerald-700
                              `
                          }
                        `}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-8 py-6">
                    <div
                      className="
                          flex items-center gap-3
                        "
                    >
                      {/* EDIT */}
                      <button
                        className="
                            w-11 h-11

                            rounded-2xl

                            bg-blue-500

                            text-white

                            flex items-center justify-center

                            hover:bg-blue-600

                            transition-all duration-300
                          "
                      >
                        <FaEdit />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="
                            w-11 h-11

                            rounded-2xl

                            bg-red-500

                            text-white

                            flex items-center justify-center

                            hover:bg-red-600

                            transition-all duration-300
                          "
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;
