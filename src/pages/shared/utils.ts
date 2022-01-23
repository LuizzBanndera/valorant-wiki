
export async function GeoLocation () {
  return navigator.geolocation.getCurrentPosition((position) => {
    return {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
  })
}

export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
