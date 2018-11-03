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

const isOpen = (state, x, y) => {
  return y < BOARD_Y && y >= 0 &&
    x < BOARD_X && x >= 0 &&
    !state.board[y][x] &&
    !(x === state.player.x && y === state.player.y) &&
    !(x === state.enemy.x && y === state.enemy.y)
}

const getMovable = (state, target) => {
  const x = state[target].x
  const y = state[target].y
  const movable = []

  if (isOpen(state, x, y + 1)) { movable.push([ 1,  0]) }
  if (isOpen(state, x, y - 1)) { movable.push([-1,  0]) }
  if (isOpen(state, x + 1, y)) { movable.push([ 0,  1]) }
  if (isOpen(state, x - 1, y )) { movable.push([ 0, -1]) }
  if (isOpen(state, x + 1, y + 1)) { movable.push([ 1,  1]) }
  if (isOpen(state, x - 1, y - 1)) { movable.push([-1, -1]) }
  if (isOpen(state, x + 1, y - 1)) { movable.push([-1,  1]) }
  if (isOpen(state, x - 1, y + 1)) { movable.push([ 1, -1]) }

  return movable
}

export const mutations = {
  resetGame (state) {
    Object.assign(state, JSON.parse(JSON.stringify(initialState)))
  },
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
  onClick ({ state, commit }, { x, y }) {
    if (state.loser !== null) {
      commit('resetGame')
      return
    }
    if (!isOpen(state, x, y)) {
      return
    }
    commit('audio/playSound', 'set', {root: true})
    commit('audio/playBgm', '2bfree', {root: true})

    commit('setWall', { x, y })
    commit('setWallRandomly')
    commit('moveRandomly', 'player')
    commit('moveRandomly', 'enemy')

    if (state.loser !== null) {
      commit('audio/playSound', 'die', {root: true})
      commit('audio/stopBgm', '2bfree', {root: true})
    }
  }
}
