import React from "react";
import Logo from "../assets/icons/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const user = localStorage.getItem("user");
  const userData = user !== null ? JSON.parse(user) : null;
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="py-[10px] px-[30px] flex items-center justify-between">
      <img src={Logo} alt="" />
      {token ? (
        <div className="flex items-center gap-2">
          <Link
            className="ml-2 text-indigo-500 underline font-semibold"
            to="/profile"
          >
          <div className="font-bold text-xl flex items-center gap-1 cursor-pointer px-[11px] py-[6px] bg-indigo-600 text-white rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400">
            {userData?.username}
            <FaUserAlt />
          </div>
          </Link>
          <div
            className="flex items-center gap-1 cursor-pointer px-[11px] py-[6px] bg-indigo-600 text-white rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400"
            onClick={logOut}
          >
            LogOut
            <FiLogOut />
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="px-[11px] py-[6px] bg-indigo-600 text-white rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
        >
          Join
        </button>
      )}
    </div>
  );
};

export default Navbar;
