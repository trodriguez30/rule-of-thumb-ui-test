import React from "react";

import { RulingInterface } from "../../../definitions/type";
import "./Ruling.scss";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";
import { ReactSVG } from "react-svg";
import GaugeBar from "../../atoms/GaugeBar/GaugeBar";
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
        className="ruling-grid"
      >
        <div className="grid-container grid-container-opacity">
          <div className="grid-content">
            <div className="grid-content__top">
              <div
                style={{ backgroundColor: getVotesType().color }}
                className="grid-content__top-thumb-icon"
              >
                <ReactSVG src={getVotesType().icon} 
                beforeInjection={(svg) => {
                  svg.classList.add("grid-content__top-thumb-icon--svg-icon");
                }} />
              </div>
              <h3 className="grid-content__top-title">{props.name}</h3>
            </div>
            <p className="grid-content__top-description">{props.description}</p>
            <VoteFor updatedAt={props.lastUpdated} name={props.name} category={props.category}/>
            <GaugeBar votes={props.votes} />
          </div>
        </div>
    </div>
  );
}

export default RulingGridView;
