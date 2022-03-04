import { CREATE_RANDOM_GRID, SET_CHOSEN_VALUE } from '../types';

export type State = {
  chosenNumber: number
  randomGrid: number[]
}

type Action = {
  type: string,
  payload?: any
}

const initialState: State = {
  chosenNumber: 0,
  randomGrid: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

const countReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CHOSEN_VALUE:
      return {
        ...state,
        chosenNumber: action.payload
      };
    case CREATE_RANDOM_GRID:
      return {
        ...state,
        randomGrid: action.payload
      }
    default:
      return state;
  }
}

export { countReducer }