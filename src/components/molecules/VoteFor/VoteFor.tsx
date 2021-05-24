import react from "react";
import VoteUp from "../../atoms/VoteButtons/VoteUp";
import VoteDown from "../../atoms/VoteButtons/VoteDown";
import "./VoteFor.scss";
import VoteNow from "../../atoms/VoteButtons/VoteNow";
import moment from "moment";

function VoteFor(props: any) {
  return (
    <div className="vote-for">
      <p className="vote-for__updated-date">{`${moment(
        props.updatedAt,
        "YYYYMMDD"
      ).fromNow()} in ${props.category}`}</p>
      <div className="vote-for__buttons">
        <VoteUp isVoted={false} />
        <VoteDown isVoted={false} />
        <VoteNow />
      </div>
    </div>
  );
}

export default VoteFor;
