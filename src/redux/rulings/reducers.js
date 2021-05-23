import {
  GET_RULINGS_REQUEST,
  GET_RULINGS_SUCCESS,
  GET_RULINGS_ERROR,
  VOTE_FOR_A_RULING,
  VOTE_AGAIN,
} from "./actions";

const initialState = {
  fetchingRulings: false,
  rulings: [],
  error: null,
  rulingsFetched: false,
  rulingsFetchFailed: false,

  rulingVoted: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RULINGS_REQUEST:
      return {
        ...state,
        fetchingRulings: true,
        rulings: [],
        error: null,
        rulingsFetched: false,
        rulingsFetchFailed: false,
      };
    case GET_RULINGS_SUCCESS:
      return {
        ...state,
        fetchingRulings: false,
        rulings: action.payload,
        error: null,
        rulingsFetched: true,
        rulingsFetchFailed: false,
      };
    case GET_RULINGS_ERROR:
      return {
        ...state,
        fetchingRulings: false,
        rulings: [],
        error: action.payload.error,
        rulingsFetched: false,
        rulingsFetchFailed: true,
      };
    case VOTE_FOR_A_RULING:
      return { ...state, rulingVoted: action.payload };
    case VOTE_AGAIN:
      return { ...state, rulingVoted: {} };
    default:
      return state;
  }
}
