import { VoteInterface } from "../definitions/type";
import ThumbUpIcon from "../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../assets/img/thumbs-down.svg";

export const getVotesType = (votes: VoteInterface) => {
  const votesUp = votes.positive;
  const votesDown = votes.negative;

  const type =
    votesUp > votesDown
      ? {
          color: "#5EC3BD",
          icon: ThumbUpIcon,
        }
      : {
          color: "#DC9F2D",
          icon: ThumbDownIcon,
        };
  return type;
};
