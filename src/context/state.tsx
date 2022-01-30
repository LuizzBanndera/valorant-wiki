import React, { useState } from 'react'
import languages from '@db/pages/shared/ctxFiles/languages'

export const ReactContext = React.createContext({})

const Ctx : React.FunctionComponent = props => {
  const [languageSelected, setLanguageSelected] = useState(0)
  const languageObject = languages

  return (
  <ReactContext.Provider value={{state: {
        language: languageObject[languageSelected],
        languageSelected
      }, setLanguageSelected}}>
        <>{props.children}</>
      </ReactContext.Provider>
  )
}


export default Ctx