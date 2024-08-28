import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import './start.css'

type DropdownProps = {
  setter: (value: string) => void;
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

function StartView() {
  const [race, setRace] = useState("Human");
  const [clas, setClas] = useState("Fighter");
  const [bg, setBg] = useState("Acolyte");
  const [cha, setCha] = useState("0");

  return (
    <>
      <RaceDropdown setter={setRace}></RaceDropdown>
      <ClassDropdown setter={setClas}></ClassDropdown>
      <BackgroundDropdown setter={setBg}></BackgroundDropdown>
      <CharismaDropdown setter={setCha}></CharismaDropdown>
      <br></br>
      <button>GENERATE</button>
    </>
  )
}

export default StartView;