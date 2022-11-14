import React from "react";

// icons
import Logo from "../icons/logo.svg";
import Profile from "../icons/profile.svg";
import Downarrow from "../icons/downarrow.svg";
import DownarrowWhite from "../icons/downarrowWhite.svg";

const Navigation = () => {
  return (
    //  -------------------- Navigation -----------------------------
    <div className="container d-flex align-items-center justify-content-between my-3 navigation">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="d-flex justify-content-between align-items-center color-2 font-regular-medium">
        <div className="px-3 inactive d-md-block d-none">My Assignment</div>
        <div className="px-3 inactive d-md-block d-none">Chat with Mentor</div>
        <div className="px-3 d-md-block d-none profile">
          <img src={Profile} alt="profile" /> ProfileName&nbsp;&nbsp;
          <img src={Downarrow} alt="down arrow" />
        </div>
        {/* ------------------ small screen profile --------------- */}
        <div className="d-md-none back-color-2 py-2 px-3 button ">
          ProfileName&nbsp;&nbsp;
          <img src={DownarrowWhite} alt="" />
        </div>
        {/* ------------------ /small screen profile --------------- */}
      </div>
    </div>
    //  -------------------- Navigation -----------------------------
  );
};

export default Navigation;
