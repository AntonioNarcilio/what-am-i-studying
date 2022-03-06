// types
import { GameReducerActionTypes } from '@/types/reducer';
import { HistoryTypes, StateTypes } from '@/types/game-context';

export const INITIAL_STATE: StateTypes = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: '',
  history: [],
};

const reducer = (prevState:StateTypes, action:GameReducerActionTypes) => {
  switch (action.type) {
    case 'UPDATE_SQUARES': {
      const {
        squares, history, isXNext, whoIsWinner,
      } = prevState;

      const newHistory = [
        ...history, {
          squares,
          isXNext,
          whoIsWinner,
        },
      ];

      const newState = { ...prevState };
      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.whoIsWinner = whoIsWinner;
      newState.history = newHistory;

      return newState;
    }

    case 'UPDATE_WINNER': {
      return { ...prevState, whoIsWinner: action.payload.toString() };
    }

    case 'UPDATE_HISTORY': {
      const [history, index] = action.payload;
      const { squares, isXNext, whoIsWinner }: HistoryTypes = history[Number(index)];
      const newHistory = [...history];

      newHistory.splice(Number(index), history.length);

      const newState = {
        ...prevState,
        squares,
        whoIsWinner,
        isXNext,
        history: newHistory,
      };

      return newState;
    }

    case 'RESET': {
      return INITIAL_STATE;
    }

    default:
      return prevState;
  }
};

export default reducer;
