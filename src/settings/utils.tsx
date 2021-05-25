import { VOTE_STYLES } from "../definitions/constants";
import { VoteInterface } from "../definitions/type";


export const getVotesType = (votes: VoteInterface) => {
  const votesUp = votes.positive;
  const votesDown = votes.negative;

  const type =
    votesUp > votesDown
      ? VOTE_STYLES.positive
      : VOTE_STYLES.negative;
  return type;
};


//get negative and positive percentage according to total votes
export const getPercentage = (votes: VoteInterface) => {
  const total = votes.positive + votes.negative;
  const negative = Math.round((votes.negative * 100) / total);
  const positive = Math.round((votes.positive * 100) / total);
  return {
    positive,
    negative,
  };
};

export const voteStyle = (type: string) => {
  return VOTE_STYLES[type];
};