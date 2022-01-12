import FastAverageColor from 'fast-average-color'

export async function AvgColor(imgUrl: string) {
  const fac = new FastAverageColor

  try {
    const color = await (await fac.getColorAsync(imgUrl)).rgb
    return color
  } catch (e) {
    return '#fff'
  }
}