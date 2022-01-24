export type TChroma = {
  uuid: string
  displayName: string
  displayIcon: string
  swatch: string
}

export type TSkin = {
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid: string
  displayIcon: string
  chromas: TChroma[]
}

export type TSkins = {
  data : TSkin[]
}