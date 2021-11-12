import React, { useState } from "react";

import "./TestSection.css";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

const MyTestSection = ({ question, answer }) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="main-heading">
        <div className="left-part-test">
          <div className="main-heading-second">
            <p className="open-btn-left" onClick={() => setshow(!show)}>
              {show ? "–" : "+"}{" "}
            </p>
          </div>

          <h3 className="heads-left-test">{question} </h3>
          <i className="pencil-icon-left">
            <BsPencilSquare />
          </i>
        </div>

        <span className="right-three-icon">
          <i className="right-clock-icon">
            <AiOutlineClockCircle />
          </i>
          <i className="right-add-icon">
            <GrAdd />
          </i>
          <i className="right-del-icon">
            <RiDeleteBin7Line />
          </i>
        </span>
      </div>
      <div className="dropdown-text-test">
        {show && (
          <p className="answers_test">
            {answer}{" "}
            <span className="icons-dropdown">
              <i className="drop-clock-icon">
                <BsBoxArrowInUpLeft />
              </i>
              <i className="drop-pencil-icon">
                <BsPencilSquare />
              </i>
              <i className="drop-del-icon">
                <RiDeleteBin7Line />
              </i>
            </span>{" "}
          </p>
        )}
      </div>
     
    </>
    
  );
};

export default MyTestSection;
