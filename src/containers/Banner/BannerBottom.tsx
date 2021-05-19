import React from "react";
import "./Banner.css";

import mediumBackground from "../../assets/img/bg-people.png";
import largeHBackgroud from "../../assets/img/bg-people.@2x.png";

function BannerBottom() {
  return (
        <aside
          className="banner banner-bottom"
          role="doc-tip"
          aria-label="Submit a name"
        >
          <img
            srcSet={`${mediumBackground} 750w, ${largeHBackgroud} 1440w`}
            sizes="(min-width: 750px) 1440px, 100vw"
            src={mediumBackground}
            className="banner__background"
            alt=""
            role="none"
          />
          <div className="banner__left">
            <h2 className="banner__heading">
              Is there anyone else you would want us to add?
            </h2>
          </div>
          <div className="banner__right">
            <button className="banner__cta">Submit a name</button>
          </div>
        </aside>
  );
}

export default BannerBottom;
