import { useContext } from "react";
import { LanguageContext } from '../context'
import './start.css'

type DropdownProps = {
  setter: (value: string) => void;
}

type StartViewProps = {
  setRace: (value: string) => void;
  setClass: (value: string) => void;
  setBackground: (value: string) => void;
  setCharisma: (value: string) => void;
  startGeneration: () => void;
}

function RaceDropdown(props: DropdownProps) {
  const languageFile = useContext(LanguageContext);

  let races: JSX.Element[] = []
  for (let raceKey of Object.keys(languageFile.ui.races)) {
    let raceName = languageFile.ui.races[raceKey];
    races.push(<option value={raceName}>{raceName}</option>,)
  }

  return (
    <>
      <select onChange={(event) => props.setter(event.target.value)}>
        {races}
      </select>
    </>
  )
}

function ClassDropdown(props: DropdownProps) {
  const languageFile = useContext(LanguageContext);

  let classes: JSX.Element[] = []
  for (let classKey of Object.keys(languageFile.ui.classes)) {
    let className = languageFile.ui.classes[classKey];
    classes.push(<option value={className}>{className}</option>,)
  }

  return (
    <>
      <select onChange={(event) => props.setter(event.target.value)}>
        {classes}
      </select>
    </>
  )
}

function BackgroundDropdown(props: DropdownProps) {
  const languageFile = useContext(LanguageContext);

  let backgrounds: JSX.Element[] = []
  for (let backgroundKey of Object.keys(languageFile.ui.backgrounds)) {
    let backgroundName = languageFile.ui.backgrounds[backgroundKey];
    backgrounds.push(<option value={backgroundName}>{backgroundName}</option>,)
  }

  return (
    <>
      <select onChange={(event) => props.setter(event.target.value)}>
        {backgrounds}
      </select>
    </>
  )
}

function CharismaDropdown(props: DropdownProps) {
  const languageFile = useContext(LanguageContext);

  let scores: JSX.Element[] = []
  for (let charismaKey of Object.keys(languageFile.ui.charisma)) {
    let charismaValue = languageFile.ui.charisma[charismaKey];
    scores.push(<option value={charismaValue}>{charismaValue}</option>,)
  }

  return (
    <>
      <select defaultValue={"0"} onChange={(event) => props.setter(event.target.value)}>
        {scores}
      </select>
    </>
  )
}

function StartView(props: StartViewProps) {
  return (
    <>
      <RaceDropdown setter={props.setRace}></RaceDropdown>
      <ClassDropdown setter={props.setClass}></ClassDropdown>
      <BackgroundDropdown setter={props.setBackground}></BackgroundDropdown>
      <CharismaDropdown setter={props.setCharisma}></CharismaDropdown>
      <br></br>
      <button onClick={() => props.startGeneration()}>GENERATE</button>
    </>
  )
}

export default StartView;