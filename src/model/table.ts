import Action from './action';
import Dice from './dice';

/**
 * A single entry of a table
 */
export type TableRow = {
    limit: number;              // Highest roll result to select this entry
    text: string;               // Text associated to the entry, or a key to get the text from the language file
    modifier: number;           // Possible numerical value to return with the text
    actions: Action[];          // List of actions to trigger after this entry was selected (dice rolls or rolls on other tables)
}

/**
 * A table to get random results from
 */
export class Table implements Action {
    private dice: Dice;         // Dice to roll
    private rows: TableRow[];

    public constructor(dice: Dice, rows: TableRow[] = []) {
        this.dice = dice;
        this.rows = rows;
    }

    /**
     * Picks an entry of the table randomly
     * @param modifier Integer value to add to/subtract from the roll result
     * @returns Table entry
     */
    public roll(modifier: number = 0): TableRow {
        let roll: number = this.dice.roll(modifier);
        for (let i = 0; i < this.rows.length; i++) {
            let row = this.rows[i]
            if (roll <= row.limit)
                return row;
        }
        throw new RangeError("Table rows overflow");
    }

    /**
     * Gets the table entry at the given index
     * @param index Index of the target entry
     * @returns Table entry
     */
    public pick(index: number): TableRow {
        if (index >= this.rows.length)
            return this.rows[this.rows.length-1]
        return this.rows[index]
    }

    public do(modifier: number = 0): string[] {
        let row = this.roll(modifier)
        let res = [row.text]
        for (let action of row.actions)
            res = res.concat(action.do(modifier))
        return res
    }
}