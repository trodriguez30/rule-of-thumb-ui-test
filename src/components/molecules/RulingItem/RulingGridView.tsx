import React from "react";

import { RulingInterface } from "../../../definitions/type";
import "./Ruling.scss";
import { ReactSVG } from "react-svg";
import GaugeBar from "../../atoms/GaugeBar/GaugeBar";
import VoteFor from "../VoteFor/VoteFor";
import { getVotesType } from "../../../settings/utils";

function RulingGridView(props: RulingInterface) {
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
                style={{ backgroundColor: getVotesType(props.votes).color }}
                className="grid-content__top-thumb-icon"
              >
                <ReactSVG src={getVotesType(props.votes).icon} 
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
