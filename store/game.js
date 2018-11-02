const BOARD_X = 10
const BOARD_Y = 10

const initialState = {
  board: [...Array(BOARD_X)].map(() => Array(BOARD_Y).fill(0))
}

export const state = () => JSON.parse(JSON.stringify(initialState))

export const mutations = {
  updateBoard (state, { x, y, val }) {
    state['board'][x][y] = val
  }
}

export const actions = {
}
