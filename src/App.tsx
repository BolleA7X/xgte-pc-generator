import { useState } from 'react'
import './App.css'
import StartView from './view/start'
import CharacterView from './view/character'
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

  let languageFile = languageFiles["en"];

  let view: JSX.Element
  if (!generated) {
    view = <StartView 
      setRace={setRace} setClass={setClass} setBackground={setBackground} setCharisma={setCharisma} 
      startGeneration={() => setGenerated(true)}
    />
  }
  else {
    view = <CharacterView
      userSelection={{"race": race, "class": classs, "background": background, "charisma": charisma}}
      reset={()=> setGenerated(false)}
    />
  }

  return (
    <LanguageContext.Provider value={languageFile}>
      <>
        {view}
      </>
    </LanguageContext.Provider>
  )
}

export default App
