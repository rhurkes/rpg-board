export function loadImage(path: string) {
  return new Promise((resolve, reject) => {
    const img: HTMLImageElement = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = path
  })
}

export function doAfterImageLoad(path: string, callback: Function) {
  const img: HTMLImageElement = new Image()
  img.onload = () => callback()
  img.onerror = () => callback()
  img.src = path
}
