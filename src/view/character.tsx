import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import './view.css'

type SidebarProps = {
  reset: () => void;
}

type CharacterViewProps = {
  reset: () => void;
}

function SideBar(props: SidebarProps) {
  const [selected, setSelected] = useState(0)

  const languageFile = useContext(LanguageContext);

  return (
    <>
      <div className="sidebar">
        <button className="tab" style={selected === 0 ? {backgroundColor: "#242424"} : {}} onClick={() => setSelected(0)}>
          {languageFile.ui.commands["@general-tab"]}
        </button><br></br>
        <button className="tab" style={selected === 1 ? {backgroundColor: "#242424"} : {}} onClick={() => setSelected(1)}>
          {languageFile.ui.commands["@origins-tab"]}
        </button><br></br>
        <button className="tab" style={selected === 2 ? {backgroundColor: "#242424"} : {}} onClick={() => setSelected(2)}>
          {languageFile.ui.commands["@decisions-tab"]}
        </button><br></br>
        <button className="tab" style={selected === 3 ? {backgroundColor: "#242424"} : {}} onClick={() => setSelected(3)}>
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
  return (
    <>
      <SideBar reset={props.reset}></SideBar>
    </>
  )
}

export default CharacterView;