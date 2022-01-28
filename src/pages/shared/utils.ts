
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


export const handleLoadImage = (e: any) => {  
  const target = e.target
  if (target.src.indexOf('data:image/gif;base64') < 0) {
    return true
  } else {
    return false
  }
}