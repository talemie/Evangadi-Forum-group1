//Header component
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className=" bg-white flex space-x-[604px]  container ">
      <img
        className="pl-[104px] pt-[22px] pb-[22px]"
        src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
        alt="Evangadi Logo"
      />
      <div className="container  flex space-x-6 pt-6">
        <Link className=" hover:text-orange-500" to="/Home">
          Home
        </Link>
        <Link className=" hover:text-orange-500" to="/explained">
          How it Works{" "}
        </Link>
        <Link className=" hover:text-orange-500" to="/sign in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default Header;
