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
  const [race, setRace] = useState("")
  const [classs, setClass] = useState("")
  const [background, setBackground] = useState("")
  const [charisma, setCharisma] = useState("")
  const [generated, setGenerated] = useState(false)

  const startGeneration = () => {
    console.log(race, classs, background, charisma)
    setGenerated(true)
  }

  let languageFile = languageFiles["en"];

  let view: JSX.Element
  if (!generated) {
    view = <StartView 
      setRace={setRace} setClass={setClass} setBackground={setBackground} setCharisma={setCharisma} 
      startGeneration={startGeneration}
    />
  }
  else
    view = <h1>Generated</h1>

  return (
    <LanguageContext.Provider value={languageFile}>
      <>
        {view}
      </>
    </LanguageContext.Provider>
  )
}

export default App
