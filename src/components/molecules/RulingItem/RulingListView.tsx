import React from "react";

import { RulingInterface } from "../../../definitions/type";
import "./Ruling.scss";

import { ReactSVG } from "react-svg";
import GaugeBar from "../../atoms/GaugeBar/GaugeBar";
import VoteFor from "../VoteFor/VoteFor";
import { getVotesType } from "../../../settings/utils";

function RulingListView(props: RulingInterface) {
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
                style={{ backgroundColor: getVotesType(props.votes).color }}
                className="list-content__top-thumb-icon"
              >
                <ReactSVG
                  src={getVotesType(props.votes).icon}
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

            <VoteFor ruling={props}/>
          </div>

          <GaugeBar votes={props.votes} />
        </div>
      </div>
    </div>
  );
}

export default RulingListView;
