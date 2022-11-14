import React from "react";

const ProcedureCard = (props) => {
  return (
    //  ------------- Procedure cards ------------
    <div className="data d-flex justify-conten-between me-lg-5 my-2">
      <div>
        <div className="logo">
          <img src={props.image} alt="icons" />
        </div>
      </div>
      <div className="ms-3">
        <span className="font-regular-medium">{props.heading}</span>
        <p className="font-regular color-1">{props.content}</p>
      </div>
    </div>
    //  ------------- / Procedure cards ------------
  );
};

export default ProcedureCard;
