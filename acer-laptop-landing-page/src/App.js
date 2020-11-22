import React from "react";
import Intro from "./components/Intro/Intro";
import Brand from "./components/Brand/Brand";
import Services from "./components/Services/Services";
import Specs from "./components/Specs/Specs";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Intro />
      <Brand />
      <Services />
      <Specs />
      <Overview />
      <Footer />
    </>
  );
}

export default App;
