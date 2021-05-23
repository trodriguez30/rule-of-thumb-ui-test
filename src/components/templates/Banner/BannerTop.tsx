import React from "react";
import "./Banner.scss";

function BannerTop() {
  return (
        <aside
          className="banner banner-top"
          role="doc-tip"
          aria-label="Speak Out"
        >
          <div className="banner-top__left">
            <span className="banner-top__left--hairline">Speak out. Be heard.</span>
            <span className="banner-top__left--title">Be counted</span>
          </div>
          <div className="banner-top__right">
            <p className="banner-top__right--text">
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It’s easy: You
              share your opinion, we analyze and put the data in a public
              report.
            </p>
          </div>
          <button className="icon-button" aria-label="close">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd">
                <path d="M1 19L19 1M1 1l18 18" />
              </g>
            </svg>
          </button>
        </aside>
       
  );
}

export default BannerTop;
