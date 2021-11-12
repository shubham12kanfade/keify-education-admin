import React, { useState } from "react";
import { questions } from "./TestSectionAPI";
import MyTestSection from "./MyTestSection";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./TestSection.css";

const TestSectionTest = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="testright">
        <div className="section-head">
          <h3>Sections</h3>
          <a href="" className="upload-btn">
            Upload Zip
          </a>
          <i className="close-icon-right">
            <AiOutlineCloseCircle />
          </i>
        </div>
        <section className="main-div">
          {" "}
          {data.map((curElem) => {
            const { id } = curElem;
            return <MyTestSection key={id} {...curElem} />;
          })}
        </section>
        <button className="addquestion-bottom">Add Sections</button>
      </div>
    </>
  );
};

export default TestSectionTest;
