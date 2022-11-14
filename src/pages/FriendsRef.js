import React from "react";

// routing
import { Link } from "react-router-dom";

// component
import FriendCard from "../components/FriendCard";

// icon
import Arrow from "../icons/arrow.svg";

const FriendsRef = () => {
  // data for referral cards
  const datas = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      skills: ["UI/UX", "Photoshop", "illustrator", "Python", "MERN", "Java"],
      balance: 185,
    },
    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      skills: [
        "UI/UX",
        "Photoshop",
        "illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "Javascript",
        "Corel Draw",
        "Go lang",
        "PHP",
        "Perl",
        "communication",
        "Art",
        "Drawing",
        "UI/UX",
        "Photoshop",
        "illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "PHP",
      ],
      balance: 485,
    },
    {
      name: "Prafull Kumar",
      date: "16 Sep, 2022",
      skills: [
        "UI/UX",
        "Photoshop",
        "illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "Javascript",
        "Corel Draw",
        "Go lang",
        "PHP",
        "Perl",
        "communication",
        "Art",
        "Drawing",
        "UI/UX",
        "Photoshop",
        "illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "PHP",
      ],
      balance: 485,
    },
  ];

  return (
    <div className="container">
      <div className=" col-md-10 col-11  mx-auto my-3 friendRef ">
        {/* ---------------- route section ----------------- */}
        <p className="font-small color-3 mt-5 mb-sm-4   m-0">
          UI/UX &gt;{" "}
          <Link to="/">
            <span className="color-3">Refer & Earn &gt;</span>
          </Link>
          <Link to="/FriendsReferred">
            <span className="color-3"> Friends Referred</span>
          </Link>
        </p>
        {/* ---------------- / route section ----------------- */}
        {/* -----------------------navigator for small screen ------------------------ */}
        <Link to="/">
          <div className="color-2 font-regular-medium py-3 d-sm-none d-block">
            <img src={Arrow} alt="" /> &nbsp;go back
          </div>
        </Link>
        {/* ----------------------- /navigator for small screen ------------------------ */}
        {/* ------------------------ referal code and wallet balance section --------------- */}
        <div className="d-flex justify-content-between">
          <div>
            <p className="color-2 font-regular p-0 m-0">Your Referral Code</p>
            <div className="p-2 my-1 code d-inline-block text-center font-regular-medium">
              E &nbsp;D&nbsp; C&nbsp; H&nbsp; 5&nbsp; 4
            </div>
          </div>
          <div className="balance p-3">
            <span className="color-2 font-small">Wallet Balance</span> <br />
            <span className="font-regular-medium ">₹ 500</span>
          </div>
        </div>
        {/* ------------------------ /referal code and wallet balance section --------------- */}
        {/* ------------------------------ friends cards section ------------------------ */}
        <div className="mt-5 ">
          <div className="mb-3">
            <span className="heading color-2 mb-2">Freinds who enrolled</span>
            <span className="count">(3)</span>
          </div>
          <div className="cards d-flex justify-content-between flex-lg-nowrap flex-wrap">
            {datas.map((data) => (
              <FriendCard
                key={data.name}
                name={data.name}
                date={data.date}
                skills={data.skills}
                balance={data.balance}
              />
            ))}
          </div>
        </div>
        {/* ------------------------------ friends cards section ------------------------ */}
        <div className="font-regular-medium color-2 my-4">
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default FriendsRef;
