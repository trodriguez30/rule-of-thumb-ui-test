import React from "react";
import { ReactSVG } from "react-svg";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";

import './VoteButtons.scss';

function VoteUp(props: any) {
  return (
    <button className="vote-button" aria-label="thumbs up">
      <ReactSVG
        src={ThumbUpIcon}
        beforeInjection={(svg) => {
          svg.classList.add("icon-button");
          svg.setAttribute("style", "width: 1.25rem");
        }}
      />
    </button>
  );
}

export default VoteUp;
