import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import './view.css'

type NavbarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  reset: () => void;
}

type GeneralPageProps = {
  race: string;
  class: string;
  background: string;
  charisma: number;
}

type CharacterViewProps = {
  userSelection: {
    race: string;
    class: string;
    background: string;
    charisma: string;
  };
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

function GeneralPage(props: GeneralPageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[0]["@title"]}</h1>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@race-section"]}</h2>
        <p>{props.race}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@class-section"]}</h2>
        <p>{props.class}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@background-section"]}</h2>
        <p>{props.background}</p>
      </div>
      <div className="section">
        <h2>{languageFile.ui.pages[0]["@charisma-section"]}</h2>
        <p>{props.charisma}</p>
      </div>
    </div>
  )
}

function CharacterView(props: CharacterViewProps) {
  const [selected, setSelected] = useState(0)
  
  let pages = [
    <GeneralPage
      race={props.userSelection.race}
      class={props.userSelection.class}
      background={props.userSelection.background}
      charisma={Number(props.userSelection.charisma)}
    />,
    <h1>Page 2</h1>,
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