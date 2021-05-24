import React from "react";
import { ReactSVG } from "react-svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";

import './VoteButtons.scss';

function VoteDown(props: any) {
  return (
    <button className="vote-button" aria-label="thumbs down">
      <ReactSVG
        src={ThumbDownIcon}
        beforeInjection={(svg) => {
          svg.classList.add("icon-button");
          svg.setAttribute("style", "width: 1.25rem");
        }}
      />
    </button>
  );
}

export default VoteDown;
