type TWeaponStats = {
  fireRate: number
  magazineSize: number
  runSpeedMultiplier: number
  equipTimeSeconds: number
  reloadTimeSeconds: number
  firstBulletAccuracy: number
  wallPenetration: string
  fireMode: string
  feature: string
  altFireType: string
  adsStats: {
    zoomMultiplier: number
    fireRate: number
  }
}

type TShopData = {
  cost: number
  category: string
  categoryText: string
}

type TChroma = {
  uuid: string
  displayName: string
  displayIcon: string
  swatch: string
}

type TSkins = {
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid: string
  displayIcon: string
  wallpaper: string
  chromas: TChroma[]
}

export type TWeapon = {
  uuid: string
  displayName: string
  category: string
  defaultSkinUuid: string
  displayIcon: string
  weaponStats: TWeaponStats
  shopData : TShopData
  skins: TSkins

}

export type TWeaponData = {
  data: {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    weaponStats: TWeaponStats
    shopData : TShopData
    skins: TSkins[]
  }
}

export type TWeapons = {
  data: TWeapon[]
}