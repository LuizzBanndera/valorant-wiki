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

type TSkins = {
  uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid: string
  displayIcon: string
  wallpaper: string
}

type TWeapon = {
  uuid: string
  displayName: string
  category: string
  defaultSkinUuid: string
  displayIcon: string
  weaponStats: TWeaponStats
  shopData : TShopData
  skings: TSkins

}
type TWeaponData = {
  data: {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    weaponStats: TWeaponStats
    shopData : TShopData
    skings: TSkins
  }
}

type TWeapons = {
  data: TWeapon[]
}