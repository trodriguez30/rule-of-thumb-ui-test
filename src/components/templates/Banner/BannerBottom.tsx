import React from "react";
import "./Banner.scss";

import mediumBackground from "../../../assets/img/bg-people.png";
import largeHBackgroud from "../../../assets/img/bg-people.@2x.png";

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
            className="banner-bottom__background"
            alt=""
            role="none"
          />
          <div className="banner-bottom__left">
            <h2 className="banner-bottom__left--heading">
              Is there anyone else you would want us to add?
            </h2>
          </div>
          <div className="banner-bottom__right">
            <button className="banner-bottom__right--cta">Submit a name</button>
          </div>
        </aside>
  );
}

export default BannerBottom;
