const BOARD_X = 11
const BOARD_Y = 11

const initialState = {
  board: [...Array(BOARD_X)].map(() => Array(BOARD_Y).fill(0)),
  player: {
    x: BOARD_X - 5,
    y: BOARD_Y - 5
  },
  enemy: {
    x: 4,
    y: 4
  },
  loser: null
}

export const state = () => JSON.parse(JSON.stringify(initialState))

const getMovable = (state, target) => {
  const x = state[target].x
  const y = state[target].y
  const movable = []

  if (y + 1 < BOARD_Y && state.board[y + 1][x] === 0) { movable.push([ 1,  0]) }
  if (y - 1 >= 0      && state.board[y - 1][x] === 0) { movable.push([-1,  0]) }
  if (x + 1 < BOARD_X && state.board[y][x + 1] === 0) { movable.push([ 0,  1]) }
  if (x - 1 >= 0      && state.board[y][x - 1] === 0) { movable.push([ 0, -1]) }
  if (y + 1 < BOARD_Y && x + 1 < BOARD_X && state.board[y + 1][x + 1] === 0) { movable.push([ 1,  1]) }
  if (y - 1 >= 0      && x - 1 >= 0      && state.board[y - 1][x - 1] === 0) { movable.push([-1, -1]) }
  if (y - 1 >= 0      && x + 1 < BOARD_Y && state.board[y - 1][x + 1] === 0) { movable.push([-1,  1]) }
  if (y + 1 < BOARD_Y && x - 1 >= 0      && state.board[y + 1][x - 1] === 0) { movable.push([ 1, -1]) }

  return movable
}

export const mutations = {
  setWall (state, { x, y }) {
    state['board'][y][x] = 1
  },
  setWallRandomly (state) {
    const movable = getMovable(state, 'player')
    if (movable.length === 0) {
      return
    }
    const move = movable[Math.floor(Math.random() * movable.length)]

    state['board'][state['player'].y + move[0]][state['player'].x + move[1]] = 1
  },
  moveRandomly (state, target) {
    const movable = getMovable(state, target)
    if (movable.length === 0) {
      return state.loser = target
    }
    const move = movable[Math.floor(Math.random() * movable.length)]

    state[target].y += move[0]
    state[target].x += move[1]
  }
}

export const actions = {
  onClick ({ commit }, { x, y }) {
    commit('setWall', { x, y })
    commit('setWallRandomly')
    commit('moveRandomly', 'player')
    commit('moveRandomly', 'enemy')
  }
}
