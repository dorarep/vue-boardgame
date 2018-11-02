const BOARD_X = 11
const BOARD_Y = 11

const initialState = {
  board: [...Array(BOARD_X)].map(() => Array(BOARD_Y).fill(0)),
  player: {
    x: (BOARD_X - 1) / 2,
    y: BOARD_Y - 1
  },
  enemy: {
    x: (BOARD_X - 1) / 2,
    y: 0
  }
}

initialState.board[1][1] = 1

export const state = () => JSON.parse(JSON.stringify(initialState))

export const mutations = {
  setWall (state, { x, y }) {
    state['board'][y][x] = 1
    state.enemy.y++
  }
}

export const actions = {
  onClick ({ commit }, { x, y }) {
    commit('setWall', { x, y })
  }
}
