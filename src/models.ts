export interface Game {
  board: string,
  state: GameState
}

export enum GameState {
  LOADING = 'LOADING',
  BOARD = 'BOARD'
}
