import rogueDungeonLoader from './loaders/rogue-dungeon-sheet'
import { Game, GameState } from './models'

function processInput(updateDelta: number) {

}

function updateState(updateDelta: number) {

}

function render(updateDelta: number) {
  console.log(game.state)
}

function init() {
  game.board = 'plains'
  rogueDungeonLoader.load(() => {
    game.state = GameState.BOARD
  })
}

function gameLoop() {
  const currentTime = Date.now()
  const updateDelta = currentTime - lastUpdate

  requestAnimationFrame(gameLoop)

  if (game.state !== GameState.LOADING) {
    processInput(updateDelta)
    updateState(updateDelta)
  }

  render(updateDelta)
  lastUpdate = currentTime
}

const game: Game = {
  board: null,
  state: GameState.LOADING
}

let lastUpdate: number = Date.now()

init()
gameLoop()
