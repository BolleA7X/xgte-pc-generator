import { useState } from 'react'
import './App.css'
import StartView from './view/start'
import CharacterView from './view/character'
import { LanguageContext } from './context'
import { CharacterBuilder } from './model/character'

// Languages
import stringsEN from '../lang/en.json'

const languageFiles = {
  "en": stringsEN
}

/**
 * App entry point. If a character has been generated it shows the CharacterView, otherwise it shows the StartView
 */
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
    // Character generation start
    let cb = new CharacterBuilder(languageFile, {
      race: race,
      class: classs,
      background: background,
      charisma: charisma
    })

    let character = cb.make()
    // Character generation end

    view = <CharacterView
      character={character}
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
