import React from "react";

const FriendCard = (props) => {
  return (
    <div className="friendCard p-3 me-lg-3 mx-auto my-2">
      {/* -------------- user detail ---------------- */}
      <div className="d-flex justify-content-between align-items-center">
        <span className="font-regular-bold">{props.name}</span>
        <span className="font-small">{props.date}</span>
      </div>
      {/* ----------/---- user detail ---------------- */}
      <p className="font-small-medium mt-3 mb-2">
        Courses Enrolled &#40;{props.skills.length}&#41;
      </p>
      <div className="courses d-flex font-small flex-wrap">
        {props.skills.map((skill, i) => {
          return (
            <div className="p-1 my-1 mx-2 course" key={i}>
              {skill}
            </div>
          );
        })}
      </div>
      <p className="font-regular mt-3 m-0 p-0">
        Referral Amount
        <span className="font-medium-semibold">₹{props.balance}</span>
      </p>
    </div>
  );
};

export default FriendCard;
