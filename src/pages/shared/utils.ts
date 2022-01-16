
async function GeoLocation () {
  return navigator.geolocation.getCurrentPosition((position) => {
    return {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
  })
}