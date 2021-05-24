import axios from "axios";
import { HOST_URL } from "../../definitions/constants";

export const sendGetRulingsRequest = async () => {
  const res = await axios({
    method: "get",
    url: `${HOST_URL}/rulings`,
  });
  return res;
};
