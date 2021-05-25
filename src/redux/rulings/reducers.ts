import {
  RulingStateInterface,
  RulingActionInterface,
  RulingInterface,
} from "../../definitions/type";
import {
  GET_RULINGS_REQUEST,
  GET_RULINGS_SUCCESS,
  GET_RULINGS_ERROR,
  VOTE_FOR_A_RULING,
  VOTE_AGAIN,
} from "./actions";

const initialState: RulingStateInterface = {
  fetchingRulings: false,
  rulings: [],
  error: null,
  rulingsFetched: false,
  rulingsFetchFailed: false,
  rulingsVoted: [],
};

export default function reducer(
  state: RulingStateInterface = initialState,
  action: RulingActionInterface
) {
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
        rulingsFetched: true,
        rulingsFetchFailed: true,
      };
    case VOTE_FOR_A_RULING: {
      const indexOfRuling = state.rulings.findIndex(
        (r: RulingInterface) => r.name === action.payload.name
      );
      const newRulings = [...state.rulings];
      newRulings[indexOfRuling] = action.payload;
      return {
        ...state,
        rulingsVoted: [...state.rulingsVoted, action.payload.name],
        rulings: newRulings,
      };
    }
    case VOTE_AGAIN: {
      const rulingVotesFilter = state.rulingsVoted.filter(
        (r: string) => r !== action.payload
      );
      return { ...state, rulingsVoted: rulingVotesFilter };
    }
    default:
      return state;
  }
}
