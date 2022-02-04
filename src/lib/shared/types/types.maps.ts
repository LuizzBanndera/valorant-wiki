export type TCallout = {
  regionName: string
  superRegionName: string
  location: {
    x: number
    y: number
  }
}

export type TMap = {
  uuid: string
  displayName: string
  displayIcon: string
  cordinates: string
  listViewIcon: string
  splash: string
  xMultiplier: number
  yMultiplier: number
  xScalarToAdd: number
  yScalarToAdd: number
  callouts: TCallout[]
}

export type TMaps = {
  data : TMap[]
}