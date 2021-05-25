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
