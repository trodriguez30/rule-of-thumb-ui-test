import React from "react";

import { RulingInterface } from "../../../definitions/type";
import "./Ruling.scss";
import ThumbUpIcon from "../../../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../../../assets/img/thumbs-down.svg";
import { ReactSVG } from "react-svg";
import GaugeBar from "../../atoms/GaugeBar/GaugeBar";
import VoteFor from "../VoteFor/VoteFor";

function RulingListView(props: RulingInterface) {
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
    <div className="ruling-list-item">
      <div className="list-container list-container-opacity">
        <div className="list-content">
          <div className="list-content__top">
            <div
              className="list-content__top-background"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${props.picture})`,
              }}
            >
              <div className="list-content__top-background-opacity"></div>
              <div
                style={{ backgroundColor: getVotesType().color }}
                className="list-content__top-thumb-icon"
              >
                <ReactSVG
                  src={getVotesType().icon}
                  beforeInjection={(svg) => {
                    svg.classList.add("list-content__top-thumb-icon--svg-icon");
                  }}
                />
              </div>
            </div>
            <div className="list-content__top-info">
              <h3 className="list-content__top-title">{props.name}</h3>
              <p className="list-content__top-description">
                {props.description}
              </p>
            </div>

            <VoteFor
              updatedAt={props.lastUpdated}
              name={props.name}
              category={props.category}
            />
          </div>

          <GaugeBar votes={props.votes} />
        </div>
      </div>
    </div>
  );
}

export default RulingListView;
