import React from "react";

import './VoteButtons.scss';

function ButtonText(props: any) {
  return (
    <button className="vote-button" aria-label="vote text" onClick={props.onPress}>
     {props.text}
    </button>
  );
}

export default ButtonText;
