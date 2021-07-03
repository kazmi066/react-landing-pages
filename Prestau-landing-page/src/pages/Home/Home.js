import React from "react";
import Header from "../../Components/Header/Header";
import Faqs from "../../Components/Faqs/Faqs";
import Hosts from "../../Components/Hosts/Hosts";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Faqs />
      <Hosts />
      <Footer />
    </>
  );
}
