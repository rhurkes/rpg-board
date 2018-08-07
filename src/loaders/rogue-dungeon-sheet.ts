import { doAfterImageLoad } from '../util/file-util'

function load(afterLoad: Function) {
  doAfterImageLoad(path, afterLoad)
}

const path: string = '../../assets/sheets/rogue-dungeon-sheet.png'

export default {
  load,
  key: 'rogue-dungeon-sheet',
  tiles: {
    "dark-grass": [3, 2],
    "light-grass": [3, 3],
    "dirt": [3, 4],
    "sand": [3, 5],
  }
}
