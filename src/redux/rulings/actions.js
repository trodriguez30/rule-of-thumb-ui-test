import axios from 'axios';

// Define action types
export const GET_RULINGS_REQUEST = 'GET_RULINGS_REQUEST';
export const GET_RULINGS_SUCCESS = 'GET_RULINGS_SUCCESS';
export const GET_RULINGS_ERROR = 'GET_RULINGS_ERROR';

export const VOTE_FOR_A_RULING = 'VOTE_FOR_A_RULING';
export const VOTE_AGAIN = 'VOTE_AGAIN';

const HOST_URL = process.env.REACT_APP_BASE_API_URL;

//Define actions
export const getRulings = () => {
  console.log(HOST_URL);
  return async (dispatch) => {
    dispatch(getRulingsRequest());
    try {
      const opts = {
        method: 'get',
        url: `${HOST_URL}/rulings`,
      };
      const response = await axios(opts);

      if (response.data) {
        dispatch(getRulingsSuccess(response.data));
      } else {
        throw new Error(
          'Tenemos inconvenientes cargando los datos, intenta más tarde',
        );
      }
    } catch (error) {
      dispatch(getRulingsError(error.message));
    }
  };
};

const getRulingsSuccess = (payload) => ({
  type: GET_RULINGS_SUCCESS,
  payload,
});

const getRulingsRequest = () => ({
  type: GET_RULINGS_REQUEST,
});

const getRulingsError = (error) => ({
  type: GET_RULINGS_ERROR,
  payload: {
    error,
  },
});

export const voteRuling = (payload) => ({
  type: VOTE_FOR_A_RULING,
  payload,
});

export const voteAgaing = () => ({
  type: VOTE_AGAIN,
});
