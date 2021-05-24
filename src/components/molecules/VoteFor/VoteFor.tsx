import react from "react";
import VoteUp from "../../atoms/VoteButtons/VoteUp";
import VoteDown from "../../atoms/VoteButtons/VoteDown";
import './VoteFor.scss';
import VoteNow from "../../atoms/VoteButtons/VoteNow";

function VoteFor() {
  return (
    <div className="vote-for">
      <VoteUp isVoted={false} />
      <VoteDown isVoted={false} />
      <VoteNow />
    </div>
  );
}

export default VoteFor;