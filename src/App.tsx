import { useState } from 'react'
import './App.css'
import StartView from './view/start'
import { LanguageContext } from './context'

// Languages
import stringsEN from '../lang/en.json'

const languageFiles = {
  "en": stringsEN
}

function App() {
  let languageFile = languageFiles["en"];

  return (
    <LanguageContext.Provider value={languageFile}>
      <>
        <StartView />
      </>
    </LanguageContext.Provider>
  )
}

export default App
