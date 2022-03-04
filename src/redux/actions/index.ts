import { CREATE_RANDOM_GRID, SET_CHOSEN_VALUE } from '../types'

export const setChosenValue = (value: number) => ({
  type: SET_CHOSEN_VALUE,
  payload: value,
})


export const createRandomGrid = () => {

  const shuffle = (array: number[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  shuffle(items)

  return { type: CREATE_RANDOM_GRID, payload: items }
}
