import React from "react";
import { ReactSVG } from "react-svg";
import { InfoStateProps } from "../../../definitions/type";
import "./InfoState.scss";

function EmptyState(props: InfoStateProps) {
  const classNameDefault = "info-state";
  const className = props.type === "info" ? classNameDefault : `${classNameDefault} info-loader`
  return (
    <div className={className}>
      <ReactSVG
        src={props.icon}
        beforeInjection={(svg) => {
          svg.classList.add("info-state__svg-icon");
        }}
      />
      <h2 className="info-state__message">{props.message}</h2>
    </div>
  );
}

export default EmptyState;
