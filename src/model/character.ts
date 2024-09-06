import Dice from './dice'
import * as tables from './tables'

type UserSelection = {
    race: string;
    class: string;
    background: string;
    charisma: string;
}

export class Character {
    public race: string = ""
    public class: string = ""
    public background: string = ""
    public charisma: number = 0

    public parents: string = ""
    public birthplace: string = ""
    public siblings: string = ""
    public family: string = ""
}

function getIndexOfTable(tableDict: any, target: string): number {
    let values = Object.keys(tableDict).map<any>((key) => tableDict[key])
    return values.indexOf(target)
}

export class CharacterBuilder {
    private languageFile: any;
    private userSelection: UserSelection;
    private character: Character;

    public constructor(languageFile: any, userSelection: UserSelection) {
        this.languageFile = languageFile
        this.userSelection = userSelection
        this.character = new Character()
    }

    private setRace() {
        // Check if race was selected
        let raceIndex = getIndexOfTable(this.languageFile.tables.supplemental.race, this.userSelection.race)
        let randomSelection: boolean = raceIndex === -1

        let raceEntry
        if (randomSelection) {
            raceEntry = tables.race.roll()
        }
        else {
            raceEntry = tables.race.pick(raceIndex)
        }

        this.character.race = this.languageFile.tables.supplemental.race[raceEntry.text]
    }

    private setClass() {
        // Check if class was selected
        let classIndex = getIndexOfTable(this.languageFile.tables.supplemental.class, this.userSelection.class)
        let randomSelection: boolean = classIndex === -1

        let classEntry
        if (randomSelection) {
            classEntry = tables.classes.roll()
        }
        else {
            classEntry = tables.classes.pick(classIndex)
        }

        this.character.class = this.languageFile.tables.supplemental.class[classEntry.text]
    }

    private setBackground() {
        // Check if background was selected
        let backgroundIndex = getIndexOfTable(this.languageFile.tables.supplemental.background, this.userSelection.background)
        let randomSelection: boolean = backgroundIndex === -1

        let backgroundEntry
        if (randomSelection) {
            backgroundEntry = tables.background.roll()
        }
        else {
            backgroundEntry = tables.background.pick(backgroundIndex)
        }

        this.character.background = this.languageFile.tables.supplemental.background[backgroundEntry.text]
    }

    private setCharisma() {
        // Check if charisma was selected
        let charismaIndex = getIndexOfTable(this.languageFile.ui.charisma, this.userSelection.charisma)
        let randomSelection: boolean = charismaIndex <= 0
        let basedOnClass: boolean = charismaIndex > 5

        let charisma: number = 0
        if (randomSelection) {
            charisma = (new Dice(2, 3, -3)).roll()
        } else if (basedOnClass) {
            let classesDict = this.languageFile.tables.supplemental.class
            let classes = Object.keys(classesDict).map<any>((key) => classesDict[key])
            let classIndex = classes.indexOf(this.character.class)
            const scoreByClass = [-1, 3, 1, 0, 0, -1, 2, 0, 1, 3, 3, 0]
            charisma = scoreByClass[classIndex]
        } else {
            charisma = charismaIndex - 2
        }

        this.character.charisma = charisma
    }

    private setOrigins() {
        const lang = this.languageFile.tables.origins

        // Parents
        this.character.parents = lang.parents[tables.parents.roll().text]

        // Mixed parents
        let raceIndex = getIndexOfTable(this.languageFile.tables.supplemental.race, this.character.race)
        let raceEntry = tables.race.pick(raceIndex)
        if (raceEntry.actions.length === 1)
            this.character.parents += "\n" + lang.mixedparents[raceEntry.actions[0].do(0)]

        // Birthplace
        this.character.birthplace = lang.birthplace[tables.birthplace.roll().text]

        // Siblings
        let siblingsNumberEntry = tables.siblingsNumber.roll()
        let siblingsRoll = siblingsNumberEntry.text
        let siblingsNumber = Number(siblingsNumberEntry.actions[0].do(0))
        this.character.siblings = this.languageFile.ui.pages[1]["@siblings-num-label"] + siblingsNumber.toString()
        if (siblingsNumber > 0)
        {
            this.character.siblings += " (" + siblingsRoll + ")"
            let birthOrder = lang.birthorder[tables.birthOrder.roll().text]
            this.character.siblings += "\n" + this.languageFile.ui.pages[1]["@siblings-order-label"] + birthOrder
        }

        // Family and friends
        this.character.family = lang.family[tables.family.roll().text]
        let absentParentEntry = tables.absentParent.roll()
        this.character.family += "\n" + lang.absentparent[absentParentEntry.text]
        if (absentParentEntry.actions.length === 1)
            this.character.family += "\n" + this.languageFile.tables.supplemental.causeofdeath[absentParentEntry.actions[0].do(0)]
        let lifestyleEntry = tables.familyLifestyle.roll()
        this.character.family += "\n" + lang.lifestyle[lifestyleEntry.text]
        this.character.family += "\n" + lang.home[tables.childhoodHome.roll(lifestyleEntry.modifier).text]
        this.character.family += "\n" + lang.memories[tables.childhoodMemories.roll(this.character.charisma).text]
    }

    public make() {
        this.setRace()
        this.setClass()
        this.setBackground()
        this.setCharisma()
        this.setOrigins()

        return this.character
    }
}