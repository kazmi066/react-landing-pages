import React from "react";
import "./home.css";

import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="for_BG">
        <div id="top_section">
          <div className="container">
            <div className="main_content">
              <h1 className="text-center text-white font-weight-bold">
                USER TESTING DONE RIGHT. <br />
                FINALLY.
              </h1>

              <div className="text-center text-white my-3 font-weight-light descriptionx">
                Interactive and feature-rich product testing platform with
                powerful video analytics, transcriptions, translations,and some
                mind bendingly awesome AI tools. Create in seconds, get feedback
                in minutes.
              </div>
              <div className="text-center text-white my-2 smallx ">
                (Not included: fake results to please your boss) <br />
                <button
                  type="text"
                  className="text-center my-5 free_btn font-weight-light"
                >
                  TRY FOR FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
