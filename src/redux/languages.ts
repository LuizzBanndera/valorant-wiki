import {Action, action} from 'easy-peasy'

type TLanguages = {
  lang: string[]
  selectedLang: number,
  setLang: Action<TLanguages, number>
}

export const languages: TLanguages = {
  lang: ['pt-BR', 'en-US'],
  selectedLang: 0,
  setLang: action((state, payload: number) => {
    state.selectedLang = payload
  })
}