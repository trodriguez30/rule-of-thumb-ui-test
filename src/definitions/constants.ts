import { ObjectInterface, OptionsInterface } from "./type";
import ThumbUpIcon from "../assets/img/thumbs-up.svg";
import ThumbDownIcon from "../assets/img/thumbs-down.svg";
//kind of views options in the rulings section
export const VIEW_TYPE: Array<OptionsInterface> = [
  {
    value: "List",
    label: "Lista",
  },
  {
    value: "Grid",
    label: "Cuadrícula",
  },
];

export const VOTE_STYLES: ObjectInterface = {
  positive: {
    color: "#5EC3BD",
    icon: ThumbUpIcon,
  },
  negative: {
    color: "#DC9F2D",
    icon: ThumbDownIcon,
  },
};

export const HOST_URL = process.env.REACT_APP_BASE_API_URL;
