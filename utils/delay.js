const Delay = (ms) => {
  return new Promise((res) => {
    return setTimeout(res, ms)
  })
}

export const RandomDelay = async () => {
  const milis = [500, 1000, 1500, 2000, 2500, 3000]
  const randomIndex = Math.floor(Math.random() * 6)
  const randomMilis = milis[randomIndex]
  await Delay(randomMilis)
}

// const Delay = (ms) => new Promise((res) => setTimeout(res, ms))

export default Delay