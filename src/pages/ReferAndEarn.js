import React from "react";

// components
import ProcedureCard from "../components/ProcedureCard";

// icons
import Invite from "../icons/invite-people.svg";
import Referral from "../icons/referral.svg";
import Discount from "../icons/discount.svg";
import Rupee from "../icons/rupee.svg";
import Wallet from "../icons/wallet.svg";

// routing
import { Link } from "react-router-dom";

const ReferAndEarn = () => {
  // data for cards
  const datas = [
    {
      image: Invite,
      heading: "Invite your Friends",
      content: "Share the link tutedude.com with your friends",
    },
    {
      image: Referral,
      heading: "Friend purchases any course",
      content: "Using your REFERRAL CODE in the payments page",
    },
    {
      image: Rupee,
      heading: "You get ₹ 200 as referral money",
      content: "On total purchase the friend makes, into your wallet",
    },
    {
      image: Discount,
      heading: "Your Friend gets ₹ 200 Off ",
      content:
        "On his overall fee on successful purchase using your referral code ",
    },
    {
      image: Wallet,
      heading: "Transfer money from wallet",
      content:
        "When the wallet balance reaches ₹200 or more, you can withdraw it",
    },
  ];

  return (
    <div className="container">
      <div className="col-lg-10 col-11  mx-auto mt-3 mb-5 referandearn">
        {/* ----------------------------- route --------------- */}
        <p className="font-small color-3 my-5">UI/UX &gt; Refer & Earn</p>
        {/* ----------------------------- / route --------------- */}
        <div className="row">
          <div className="col-lg-6">
            {/* --------------------------------------- card ---------------------------------- */}
            <div className="Card p-3 back-white">
              <div className="data d-flex justify-content-between flex-wrap">
                <div className="mx-2 references my-2 my-sm-0 ">
                  <p className="font-small color-2 mt-0 mb-0">
                    Referral Earning
                  </p>
                  <span className="font-large-medium">&#8377; 2,500 </span>
                </div>
                <div className="mx-2 references my-2 my-sm-0 ">
                  <p className="font-small color-2 mt-0 mb-0">
                    Total Referrals
                  </p>
                  <span className="font-large-medium">7 </span>
                </div>
                <div className="mx-2 references my-2 my-sm-0 ">
                  <p className="font-small color-2 mt-0 mb-0">Wallet Balance</p>
                  <span className="font-large-medium">&#8377; 500 </span>
                </div>
                {/* --------------------- for small screen only ------------------------- */}

                <div className="mx-2 my-2 my-sm-0 references d-md-none d-block">
                  <button className="button mb-3 mt-4 back-color-2 color-white py-2 px-3">
                    Withdraw Balance
                  </button>
                </div>

                {/* --------------------- / for small screen only ------------------------- */}
              </div>

              {/* --------------------     medium and large screen      ----------------------- */}
              <div className="text-center d-md-block d-none">
                <button className="button mb-3 mt-4 back-color-2 color-white py-2 px-3">
                  Withdraw Balance
                </button>
              </div>
              {/* --------------------    / medium and large screen      ----------------------- */}
            </div>
            {/* --------------------------------------- / card ---------------------------------- */}
          </div>
          {/* ----------------------------------- referal code ----------------------------- */}
          <div className="col-lg-6">
            <div className="mx-md-5 mx-auto mt-4 mt-lg-0">
              <p className="font-medium-semibold color-2">Your Referral Code</p>
              <div className=" referal ">
                <div className="code py-3 back-white text-center color-2">
                  EDCH54
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------- / referal code ----------------------------- */}
        </div>
        {/* --------------------------------- how to work and procedure ------------------------ */}
        <div className="work ">
          <p className="font-medium-semibold color-2 mt-5 mb-4">
            How does it work ?
          </p>
          <div className="procedure ">
            {/* // all procedure cards  */}
            {datas.map((data) => (
              <ProcedureCard
                key={data.heading}
                image={data.image}
                heading={data.heading}
                content={data.content}
              />
            ))}
          </div>
        </div>
        {/* --------------------------------- / how to work and procedure ------------------------ */}
        <Link to="FriendsReferred">
          <div className="font-regular-medium color-2 my-4">
            Friends Who Enrolled
          </div>
        </Link>
        <Link>
          <div className="font-regular-medium color-2 my-4">
            Terms & Conditions
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReferAndEarn;
