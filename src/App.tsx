import React from "react";
import "./App.css";

//container import start
import NavBar from "./containers/NavBar/NavBar";
import Header from "./containers/Header/Header";
import BannerTop from "./containers/Banner/BannerTop";
import BannerBottom from "./containers/Banner/BannerBottom";
import Footer from "./containers/Footer/Footer";
import PreviousRulings from "./containers/PreviousRulings/PreviousRulings";
//container import end

function App() {
  return (
    <div className="App">
     <NavBar />
     <Header />
      <div className="max-centered">
        <BannerTop />
        <PreviousRulings />
       <BannerBottom />
       <hr />
       <Footer />
       </div>
    </div>
  );
}

export default App;
