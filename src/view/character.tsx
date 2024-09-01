import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import './view.css'

type SidebarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  reset: () => void;
}

type CharacterViewProps = {
  userSelection: Object;
  reset: () => void;
}

function SideBar(props: SidebarProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <>
      <div className="sidebar">
        <button className="tab" style={props.selected === 0 ? {backgroundColor: "#242424"} : {}} onClick={() => props.setSelected(0)}>
          {languageFile.ui.commands["@general-tab"]}
        </button><br></br>
        <button className="tab" style={props.selected === 1 ? {backgroundColor: "#242424"} : {}} onClick={() => props.setSelected(1)}>
          {languageFile.ui.commands["@origins-tab"]}
        </button><br></br>
        <button className="tab" style={props.selected === 2 ? {backgroundColor: "#242424"} : {}} onClick={() => props.setSelected(2)}>
          {languageFile.ui.commands["@decisions-tab"]}
        </button><br></br>
        <button className="tab" style={props.selected === 3 ? {backgroundColor: "#242424"} : {}} onClick={() => props.setSelected(3)}>
          {languageFile.ui.commands["@events-tab"]}
        </button><br></br>
        <br></br>
        <button id="saveButton" className="tab">
          {languageFile.ui.commands["@save-button"]}
        </button><br></br>
        <button id="resetButton" className="tab" onClick={() => props.reset()}>
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
      <SideBar selected={selected} setSelected={setSelected} reset={props.reset}></SideBar>
      {pages[selected]}
    </>
  )
}

export default CharacterView;