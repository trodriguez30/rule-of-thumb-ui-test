import React from "react";
import { VoteInterface } from "../../../definitions/type";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";
import { ReactSVG } from "react-svg";
import "./PercentageBar.scss";

function PercentageBar(props: any) {
  const votes: VoteInterface = props.votes;
  const getPercentage = () => {
    const total = votes.positive + votes.negative;
    const negative = Math.round((votes.negative * 100) / total);
    const positive = Math.round((votes.positive * 100) / total);
    return {
      positive,
      negative,
    };
  };
  return (
    <div className="percentaje-bar">
      <div
        className="percentaje-bar__positive percentaje-bar__mix"
        style={{ width: `${getPercentage().positive}%` }}
      >
        <ReactSVG
          src={ThumbUpIcon}
          beforeInjection={(svg) => {
            svg.classList.add("icon-button");
            svg.setAttribute("style", "width: 1.25rem");
          }}
        />
        <p className="percentaje-bar__number">{`${
          getPercentage().positive
        } %`}</p>
      </div>
      <div
        className="percentaje-bar__negative percentaje-bar__mix"
        style={{ width: `${getPercentage().negative}%` }}
      >
        <p className="percentaje-bar__number">{`${
          getPercentage().negative
        } %`}</p>
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

export default PercentageBar;
