const game = {}

let lastUpdate: number = Date.now()

function processInput(updateDelta: number) {

}

function updateState(updateDelta: number) {

}

function render(updateDelta: number) {

}

function gameLoop() {
  const currentTime = Date.now()
  const updateDelta = currentTime - lastUpdate

  requestAnimationFrame(gameLoop)
  processInput(updateDelta)
  updateState(updateDelta)
  render(updateDelta)
  lastUpdate = currentTime
}

gameLoop()
