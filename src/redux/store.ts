import {createStore} from 'easy-peasy'
import {TLanguages} from '@shared/types/types.languages'

type TStore = {
  languages: TLanguages[]
}

export const store = createStore({
  languages: [],
})