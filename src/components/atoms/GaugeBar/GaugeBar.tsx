import React from "react";
import { VoteInterface } from "../../../definitions/type";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";
import { ReactSVG } from "react-svg";
import "./GaugeBar.scss";
import { getPercentage } from "../../../settings/utils";

function GaugeBar(props: any) {
  const votes: VoteInterface = props.votes;

  const percentage =  getPercentage(votes);
  return (
    <div className="percentaje-bar">
      <div
        className="percentaje-bar__positive percentaje-bar__mix"
        style={{ width: `${percentage.positive}%` }}
      >
        <ReactSVG
          src={ThumbUpIcon}
          beforeInjection={(svg) => {
            svg.classList.add("icon-button");
            svg.setAttribute("style", "width: 1.25rem");
          }}
        />
        <p className="percentaje-bar__number">{`${
          percentage.positive
        }%`}</p>
      </div>
      <div
        className="percentaje-bar__negative percentaje-bar__mix"
        style={{ width: `${percentage.negative}%` }}
      >
        <p className="percentaje-bar__number">{`${
          percentage.negative
        }%`}</p>
        <ReactSVG
          src={ThumbDownIcon}
          beforeInjection={(svg) => {
            svg.classList.add("icon-button");
            svg.setAttribute("style", "width: 1.25rem");
          }}
        />
      </div>
    </div>
  );
}

export default GaugeBar;
