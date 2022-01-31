import React, { useState } from 'react'
import languages from '@db/pages/shared/ctx/languages'
import {TLanguages} from '@shared/types/types.languages'

type TContext = {
  state : {
    language: {
      value: TLanguages,
      selectedLanguage:  number,
      setSelectedLanguage: React.Dispatch<React.SetStateAction<number>>,
    }
  }
}


const defaultValues = {
  state: {
    language: {
      value: languages[0],
      selectedLanguage: 0,
      setSelectedLanguage: () => {}
    }
  }
}

export const ReactContext = React.createContext<TContext>(defaultValues)

const Context : React.FunctionComponent = props => {
  const [selectedLanguage, setSelectedLanguage] = useState(0)
  const languageObject = languages

  return (
  <ReactContext.Provider value={
  {
    state: {
      language: {
        value: languageObject[selectedLanguage],
        selectedLanguage,
        setSelectedLanguage
      }
    },
  }}
  >
    <>{props.children}</>
  </ReactContext.Provider>
  )
}


export default Context