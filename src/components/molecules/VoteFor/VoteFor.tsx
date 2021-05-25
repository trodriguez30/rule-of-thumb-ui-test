import react, { useEffect, useState } from "react";
import Vote from "../../atoms/VoteButtons/Vote";
import "./VoteFor.scss";
import ButtonText from "../../atoms/VoteButtons/ButtonText";
import moment from "moment";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { voteRuling, voteAgain } from "../../../redux/rulings/actions";

import ReactGA from 'react-ga';

function VoteFor(props: any) {
  const { ruling } = props;
  const [voteType, setVoteType] = useState("");
  const [isVoted, setIsVoted] = useState(false);
  const dispatch = useDispatch();

  const rulingsVoted = useSelector(
    (state: RootStateOrAny) => state.rulings.rulingsVoted
  );

  useEffect(() => {
    setIsVoted(rulingsVoted.includes(ruling.name));
  }, [rulingsVoted, ruling]);

  function voteForARuling() {
    if (voteType.length !== 0) {
      const payload = { ...ruling };
      payload.votes[voteType] += 1;
      dispatch(voteRuling(payload));
      ReactGA.event({
        category: 'Vote',
        action: 'Vote for a Ruling',
        label: payload.name,
        value: voteType === "positive" ? 1 : 0,
      });
      setVoteType("");
    }
  }

  function voteARulingAgain() {
    dispatch(voteAgain(ruling.name));
    setVoteType("");
  }

  return (
    <div className="vote-for">
      <p className="vote-for__message">
        {isVoted
          ? "Thank you for your vote!"
          : `${moment(ruling.lastUpdated, "YYYYMMDD").fromNow()} in ${
              ruling.category
            }`}
      </p>
      {isVoted ? (
        <div className="vote-for__buttons">
          <ButtonText onPress={voteARulingAgain} text="Vote Again" />
        </div>
      ) : (
        <div className="vote-for__buttons">
          <Vote
            type="positive"
            isVoted={voteType === "positive"}
            onPress={() => setVoteType("positive")}
          />
          <Vote
            type="negative"
            isVoted={voteType === "negative"}
            onPress={() => setVoteType("negative")}
          />
          <ButtonText onPress={voteForARuling} text="Vote Now" />
        </div>
      )}
    </div>
  );
}

export default VoteFor;
