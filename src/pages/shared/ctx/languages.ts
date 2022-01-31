import { TLanguages } from "../types/types.languages"

const languages: TLanguages[] = [
  {
    lang: 'pt-BR',
    menus: {
      agents: 'agentes',
      weapons: 'armas',
      maps: 'mapas',
    },
    languages: {
      br: 'português',
      en: 'inglês',
    },
    agents: {
      skills: 'habilidades',
      passive: 'passiva'
    },
    weapons: {
      details: 'características',
      category: 'categoria',
      value: 'valor',
      fireRate: 'taxa de disparo',
      magSize: 'tam. do pente',
      bulletPen: 'penetração',
      reloadTime: 'recarregamento',
    },
    maps: {
      //this one looks awfull so nothing to do here...
    }

  },
  {
    lang: 'en-US',
    menus: {
      agents: 'agents',
      weapons: 'weapons',
      maps: 'maps',
    },
    languages: {
      br: 'portuguese',
      en: 'english',
    },
    agents: {
      skills: 'skills',
      passive: 'passive'
    },
    weapons: {
      details: 'details',
      category: 'category',
      value: 'cost',
      fireRate: 'fire rate',
      magSize: 'magazine size',
      bulletPen: 'Penetration',
      reloadTime: 'reload time',
    },
    maps: {
      //this one looks awfull so nothing to do here...
    }

  }
]

export default languages