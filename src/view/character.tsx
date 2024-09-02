import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import './view.css'

type NavbarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  reset: () => void;
}

type CharacterViewProps = {
  userSelection: Object;
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

function CharacterView(props: CharacterViewProps) {
  const [selected, setSelected] = useState(0)
  
  let pages = [
    <h1>Page 1</h1>,
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