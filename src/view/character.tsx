import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import { Character } from '../model/character'
import './view.css'

type NavbarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  reset: () => void;
}

type PageProps = { character: Character }

type CharacterViewProps = {
  character: Character;
  reset: () => void;
}

function Navbar(props: NavbarProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <>
      <div className="sidebar">
        <button className={props.selected === 0 ? "tab selectedTab" : "tab unselectedTab"} onClick={() => props.setSelected(0)}>
          {languageFile.ui.commands["@general-tab"]}
        </button>
        <button className={props.selected === 1 ? "tab selectedTab" : "tab unselectedTab"} onClick={() => props.setSelected(1)}>
          {languageFile.ui.commands["@origins-tab"]}
        </button>
        <button className={props.selected === 2 ? "tab selectedTab" : "tab unselectedTab"} onClick={() => props.setSelected(2)}>
          {languageFile.ui.commands["@decisions-tab"]}
        </button>
        <button className={props.selected === 3 ? "tab selectedTab" : "tab unselectedTab"} onClick={() => props.setSelected(3)}>
          {languageFile.ui.commands["@events-tab"]}
        </button>
        <br></br>
        <button id="saveButton" className="tab characterButton">
          {languageFile.ui.commands["@save-button"]}
        </button>
        <button id="resetButton" className="tab characterButton" onClick={() => props.reset()}>
          {languageFile.ui.commands["@retry-button"]}
        </button>
      </div>
    </>
  )
}

function GeneralPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[0]["@title"]}</h1>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@race-section"]}</h2>
        <p>{props.character.race}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@class-section"]}</h2>
        <p>{props.character.class}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@background-section"]}</h2>
        <p>{props.character.background}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@charisma-section"]}</h2>
        <p>{props.character.charisma}</p>
      </div>
    </div>
  )
}

function OriginsPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[1]["@title"]}</h1>
      <div className="section">
        <h2>{languageFile.ui.pages[1]["@parents-section"]}</h2>
        <p>{props.character.parents}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[1]["@birthplace-section"]}</h2>
        <p>{props.character.birthplace}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[1]["@siblings-section"]}</h2>
        <p>{props.character.siblings}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[1]["@family-friends-section"]}</h2>
        <p>{props.character.family}</p>
      </div>
    </div>
  )
}

function CharacterView(props: CharacterViewProps) {
  const [selected, setSelected] = useState(0)
  
  let pages = [
    <GeneralPage character={props.character} />,
    <OriginsPage character={props.character} />,
    <h1>Page 3</h1>,
    <h1>Page 4</h1>,
  ]

  return (
    <>
      <Navbar selected={selected} setSelected={setSelected} reset={props.reset}></Navbar>
      {pages[selected]}
    </>
  )
}

export default CharacterView;