import React from "react";
import { ReactSVG } from "react-svg";

import "./VoteButtons.scss";
import { VOTE_STYLES } from "../../../definitions/constants";
import { voteStyle } from "../../../settings/utils";

interface VoteButtonInterface {
  type: string;
  isVoted: boolean;
  onPress: () => void;
}
function Vote(props: VoteButtonInterface) {
  function handleClick() {
    props.onPress();
  }

  return (
    <button
      className="vote-button"
      aria-label={`thumbs ${props.type}`}
      style={{
        backgroundColor: voteStyle(props.type).color,
        borderWidth: "0.15rem",
        borderStyle: "solid",
        borderColor: props.isVoted ? "white" : voteStyle(props.type).color,
      }}
      onClick={handleClick}
    >
      <ReactSVG
        src={voteStyle(props.type).icon}
        beforeInjection={(svg) => {
          svg.classList.add("icon-button");
          svg.setAttribute("style", "width: 1.25rem");
        }}
      />
    </button>
  );
}

export default Vote;
