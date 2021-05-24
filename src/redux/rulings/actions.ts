import { AxiosResponse } from "axios";
import {Dispatch} from 'redux';
import { RulingInterface } from "../../definitions/type";
import { sendGetRulingsRequest } from "./services";

// Define action types
export const GET_RULINGS_REQUEST = 'GET_RULINGS_REQUEST';
export const GET_RULINGS_SUCCESS = 'GET_RULINGS_SUCCESS';
export const GET_RULINGS_ERROR = 'GET_RULINGS_ERROR';

export const VOTE_FOR_A_RULING = 'VOTE_FOR_A_RULING';
export const VOTE_AGAIN = 'VOTE_AGAIN';

//Define actions
export const getRulings = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getRulingsRequest());
    try {
      const res: AxiosResponse<RulingInterface[]> = await sendGetRulingsRequest();
      if (res.data) {
        dispatch(getRulingsSuccess(res.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(getRulingsError('Tenemos inconvenientes cargando los datos, intenta más tarde.'));
    }
  };
};

const getRulingsSuccess = (payload: any) => ({
  type: GET_RULINGS_SUCCESS,
  payload,
});

const getRulingsRequest = () => ({
  type: GET_RULINGS_REQUEST,
});

const getRulingsError = (error: string) => ({
  type: GET_RULINGS_ERROR,
  payload: {
    error,
  },
});

export const voteRuling = (payload: any) => ({
  type: VOTE_FOR_A_RULING,
  payload,
});

export const voteAgaing = () => ({
  type: VOTE_AGAIN,
});
