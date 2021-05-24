import React from "react";
import moment from "moment";
import { RulingInterface } from "../../../definitions/type";
import "./Ruling.scss";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";
import { ReactSVG } from "react-svg";
import PercentageBar from "../../atoms/PercentajeBar/PercentageBar";
import VoteFor from "../VoteFor/VoteFor";

function RulingGridView(props: RulingInterface) {
  const votesUp = props.votes.positive;
  const votesDown = props.votes.negative;

  const getVotesType = () => {
    const type =
      votesUp > votesDown
        ? {
            color: "#5EC3BD",
            icon: ThumbUpIcon,
          }
        : {
            color: "#DC9F2D",
            icon: ThumbDownIcon,
          };
    return type;
  };
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.picture})`,
      }}
      className="grid-container"
    >
      <div className="grid-container grid-container-opacity">
        <div className="grid-content">
          <div className="grid-content__top">
            <div
              style={{ backgroundColor: getVotesType().color }}
              className="grid-content__top-thumb-icon"
            >
              <ReactSVG src={getVotesType().icon} className="svg-icon" />
            </div>
            <h3 className="grid-content__top-title">{props.name}</h3>
          </div>
          <p className="grid-content__top-description">{props.description}</p>
          <p className="grid-content__top-date">{`${moment(
            props.lastUpdated,
            "YYYYMMDD"
          ).fromNow()} in ${props.category}`}</p>
          <VoteFor />
          <PercentageBar votes={props.votes} />
        </div>
      </div>
    </div>
  );
}

export default RulingGridView;
