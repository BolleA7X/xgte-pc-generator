import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import { Character } from '../model/character'
import './view.css'

type NavbarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  reset: () => void;
}

type SectionProps = {
  title: string;
  subsections: {
    label: string;
    text: string;
  }[]
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

function PageSection(props: SectionProps) {
  let subsections: JSX.Element[] = []

  for (let sub of props.subsections)
    subsections.push(
      <p>
        <b hidden={sub.label === "" || sub.text === ""}>{sub.label}</b>
        {sub.text}
      </p>
  )

  return (
    <div className="section">
      <h2>{props.title}</h2>
      {subsections}
    </div>
  )
}

/* ================================================ PAGES ================================================ */

function GeneralPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[0]["@title"]}</h1>
      <PageSection 
        title={languageFile.ui.pages[0]["@race-section"]}
        subsections={[{label: "", text: props.character.race}]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@class-section"]}
        subsections={[{label: "", text: props.character.class}]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@background-section"]}
        subsections={[{label: "", text: props.character.background}]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@charisma-section"]}
        subsections={[{label: "", text: props.character.charisma.toString()}]}
      />
    </div>
  )
}

function OriginsPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[1]["@title"]}</h1>
      <PageSection 
        title={languageFile.ui.pages[1]["@parents-section"]}
        subsections={[
          {label: languageFile.ui.pages[1]["@parents-know-label"], text: props.character.parentsFamiliarity},
          {label: languageFile.ui.pages[1]["@parents-mixed-label"], text: props.character.mixedParents},
        ]}
      />
      <PageSection 
        title={languageFile.ui.pages[1]["@birthplace-section"]}
        subsections={[{label: "", text: props.character.birthplace}]}
      />
      <PageSection 
        title={languageFile.ui.pages[1]["@siblings-section"]}
        subsections={[
          {label: languageFile.ui.pages[1]["@siblings-num-label"], text: props.character.siblingsNumber},
          {label: languageFile.ui.pages[1]["@siblings-order-label"], text: props.character.birthOrder},
        ]}
      />
      <PageSection 
        title={languageFile.ui.pages[1]["@family-friends-section"]}
        subsections={[
          {label: languageFile.ui.pages[1]["@family-raised-label"], text: props.character.family},
          {label: languageFile.ui.pages[1]["@family-absent-label"], text: props.character.absentParent},
          {label: languageFile.ui.pages[1]["@family-death-label"], text: props.character.parentDeath},
          {label: languageFile.ui.pages[1]["@family-lifestyle-label"], text: props.character.lifestyle},
          {label: languageFile.ui.pages[1]["@family-home-label"], text: props.character.childHome},
          {label: languageFile.ui.pages[1]["@family-memories-label"], text: props.character.childMemories},
        ]}
      />
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