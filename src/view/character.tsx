import { useState, useContext } from "react";
import { LanguageContext } from '../context'
import { Character } from '../model/character'
import './view.css'

/**
 * Properties passed to the Navbar component
 */
type NavbarProps = {
  selected: number;
  setSelected: (id: React.SetStateAction<number>) => void;
  save: () => void;
  reset: () => void;
}

/**
 * Properties passed to the PageSection component
 */
type SectionProps = {
  title: string;
  subsections: {
    label: string;
    text: string;
  }[]
}

/**
 * Properties passed to all xPage components
 */
type PageProps = { character: Character }

type CharacterViewProps = {
  character: Character;
  reset: () => void;
}

/**
 * Navbar at the top of the Character view
 */
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
          {languageFile.ui.commands["@personality-tab"]}
        </button>
        <button className={props.selected === 3 ? "tab selectedTab" : "tab unselectedTab"} onClick={() => props.setSelected(3)}>
          {languageFile.ui.commands["@events-tab"]}
        </button>
        <br></br>
        <button id="saveButton" className="tab characterButton" onClick={() => props.save()}>
          {languageFile.ui.commands["@save-button"]}
        </button>
        <button id="resetButton" className="tab characterButton" onClick={() => props.reset()}>
          {languageFile.ui.commands["@retry-button"]}
        </button>
      </div>
    </>
  )
}

/**
 * A section of a page, made of a title and one or more subsections. Subsections have a bold label, followed by some text.
 */
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

/**
 * Page that contains the character's general information (age, race, class, ...)
 */
function GeneralPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[0]["@title"]}</h1>
      <PageSection
        title={languageFile.ui.pages[0]["@age-section"]}
        subsections={[{label: "", text: props.character.age}]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@race-section"]}
        subsections={[{label: "", text: props.character.race}]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@class-section"]}
        subsections={[
          {label: "", text: props.character.class},
          {label: languageFile.ui.pages[0]["@class-reason-label"], text: props.character.classReason}
        ]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@background-section"]}
        subsections={[
          {label: "", text: props.character.background},
          {label: languageFile.ui.pages[0]["@background-reason-label"], text: props.character.bgReason}
        ]}
      />
      <PageSection 
        title={languageFile.ui.pages[0]["@charisma-section"]}
        subsections={[{label: "", text: props.character.charisma.toString()}]}
      />
    </div>
  )
}

/**
 * Page that contains the character's origins (family, childhood, ...)
 */
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
          {label: languageFile.ui.pages[1]["@family-absent1-label"], text: props.character.absentParents[0]},
          {label: languageFile.ui.pages[1]["@family-death-label"], text: props.character.parentDeath[0]},
          {label: languageFile.ui.pages[1]["@family-absent2-label"], text: props.character.absentParents[1]},
          {label: languageFile.ui.pages[1]["@family-death-label"], text: props.character.parentDeath[1]},
          {label: languageFile.ui.pages[1]["@family-lifestyle-label"], text: props.character.lifestyle},
          {label: languageFile.ui.pages[1]["@family-home-label"], text: props.character.childHome},
          {label: languageFile.ui.pages[1]["@family-memories-label"], text: props.character.childMemories},
        ]}
      />
    </div>
  )
}

/**
 * Page that contains the character's personality (traits, flaws, ...)
 */
function PersonalityPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  return (
    <div className="page">
      <h1>{languageFile.ui.pages[2]["@title"]}</h1>
      <PageSection
        title={languageFile.ui.pages[2]["@traits-section"]}
        subsections={[{label: "", text: props.character.traits}]}
      />
      <PageSection
        title={languageFile.ui.pages[2]["@ideals-section"]}
        subsections={[{label: "", text: props.character.ideals}]}
      />
      <PageSection
        title={languageFile.ui.pages[2]["@bonds-section"]}
        subsections={[{label: "", text: props.character.bonds}]}
      />
      <PageSection
        title={languageFile.ui.pages[2]["@flaws-section"]}
        subsections={[{label: "", text: props.character.flaws}]}
      />
    </div>
  )
}

/**
 * Page that contains the list of events the character experienced
 */
function EventsPage(props: PageProps) {
  const languageFile = useContext(LanguageContext);

  let events = []
  for (let i = 0; i < props.character.events.length; i++) {
    let title = languageFile.ui.pages[3]["@event-label"] + (i+1).toString()
    events.push(
      <PageSection
        title={title}
        subsections={[{label: "", text: props.character.events[i]}]}
      />
    )
  }
  
  return (
    <div className="page">
      <h1>{languageFile.ui.pages[3]["@title"]}</h1>
      {events}
    </div>
  )
}

/**
 * Complete Character view, made of its pages and a navbar to navigate them
 */
function CharacterView(props: CharacterViewProps) {
  const [selected, setSelected] = useState(0)

  // This is the only way I found to force the download of a text file
  const save = () => {
    // Generate the file
    const fileName = "character-" + (new Date(Date.now())).valueOf().toString() + ".json"
    const fileContent = JSON.stringify(props.character, null, '\t')
    
    // Create a Blob with the file content
    const blob = new Blob([fileContent], { type: "text/plain" })
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob)
    
    // Create a link element and programmatically click it
    let a = document.createElement("a")
    a.hidden = true
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
  }
  
  let pages = [
    <GeneralPage character={props.character} />,
    <OriginsPage character={props.character} />,
    <PersonalityPage character={props.character}/>,
    <EventsPage character={props.character} />,
  ]

  return (
    <>
      <Navbar selected={selected} setSelected={setSelected} save={save} reset={props.reset}></Navbar>
      {pages[selected]}
    </>
  )
}

export default CharacterView;