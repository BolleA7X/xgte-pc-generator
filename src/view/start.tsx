import { useContext, useEffect } from "react";
import { LanguageContext } from '../context'
import './view.css'

/**
 * Properties passed to the Dropdown component
 */
type DropdownProps = {
  langObject: any;
  setter: (value: string) => void;
}

/**
 * Properties passed to the StartView component
 */
type StartViewProps = {
  setRace: (value: string) => void;
  setClass: (value: string) => void;
  setBackground: (value: string) => void;
  setCharisma: (value: string) => void;
  startGeneration: () => void;
}

/**
 * Dropdown menu to allow the user to customize the random generation
 */
function Dropdown(props: DropdownProps) {
  let elements: JSX.Element[] = []
  let firstItem = true
  let defaultValue = ""

  for (let key of Object.keys(props.langObject)) {
    let value = props.langObject[key]
    let optionKey = "dropdown-" + key.slice(1)
    elements.push(<option key={optionKey} value={value}>{value}</option>,)
    if (firstItem) {
      defaultValue = value
      firstItem = false;
    }
  }

  useEffect(() => {
    props.setter(defaultValue)
  }, [firstItem])

  return (
    <>
      <select onChange={(event) => props.setter(event.target.value)}>
        {elements}
      </select>
    </>
  )
}

/**
 * Complete Start view, made of dropdown menus and a button to start the random character generation
 */
function StartView(props: StartViewProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <>
      <Dropdown langObject={languageFile.ui.races} setter={props.setRace}></Dropdown>
      <Dropdown langObject={languageFile.ui.classes} setter={props.setClass}></Dropdown>
      <Dropdown langObject={languageFile.ui.backgrounds} setter={props.setBackground}></Dropdown>
      <Dropdown langObject={languageFile.ui.charisma} setter={props.setCharisma}></Dropdown>
      <br></br>
      <button id="generateButton" className="positiveButton" onClick={() => props.startGeneration()}>
          {languageFile.ui.commands["@generate-button"]}
      </button>
    </>
  )
}

export default StartView;