/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import "./Home.scss";

//container import start
import NavBar from "../components/templates/NavBar/NavBar";
import Header from "../components/templates/Header/Header";
import BannerTop from "../components/templates/Banner/BannerTop";
import BannerBottom from "../components/templates/Banner/BannerBottom";
import Footer from "../components/templates/Footer/Footer";
import PreviousRulings from "../components/templates/PreviousRulings/PreviousRulings";
//container import end

function Home() {
  return (
    <div className="App">
     <NavBar />
     <Header />
      <div className="max-centered">
        <BannerTop />
        <PreviousRulings />
       <BannerBottom />
       <hr role="separator"/>
       <Footer />
       </div>
    </div>
  );
}

export default Home;
