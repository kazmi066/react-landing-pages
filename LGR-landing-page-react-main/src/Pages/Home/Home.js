import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Opener from "../../components/Opener/Opener";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Importance from "../../components/Importance/Importance";
import Mission from "../../components/Mission/Mission";
import Team from "../../components/Team/Team";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Opener />
        </div>
      ) : (
        <main id="home">
          <Header />
          <GetStarted />
          <Importance />
          <Mission />
          <Team />
          <Footer />
        </main>
      )}
    </>
  );
}
