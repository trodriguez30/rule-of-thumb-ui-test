import React from "react";
import { ReactSVG } from "react-svg";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";

import './VoteButtons.scss';

function VoteNow(props: any) {
  return (
    <button className="vote-button" aria-label="vote now">
     Vote Now
    </button>
  );
}

export default VoteNow;
