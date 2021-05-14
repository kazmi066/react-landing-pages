import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Description = ({ heading, desc }) => {
  const [showState, setShowState] = useState(false);
  const changeShowState = () => {
    setShowState((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <li onClick={changeShowState} className="list_heading font-weight-bold">
        <FaChevronRight className={`${showState ? "reverse" : ""}`} /> {heading}
      </li>
      <p className={`list_desc ${!showState ? "hide" : "show"}`}>{desc}</p>
      <br />
    </>
  );
};

export default Description;
