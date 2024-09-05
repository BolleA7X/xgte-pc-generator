import Action from './action';
import Dice from './dice';

export type TableRow = {
    limit: number;
    text: string;
    modifier: number;
    actions: Action[];
}

export class Table implements Action {
    private dice: Dice;
    private rows: TableRow[];

    public constructor(dice: Dice, rows: TableRow[] = []) {
        this.dice = dice;
        this.rows = rows;
    }

    public roll(modifier: number = 0): TableRow {
        let roll: number = this.dice.roll(modifier);
        for (let i = 0; i < this.rows.length; i++) {
            let row = this.rows[i];console.log("Rolled: ", roll, "; Table index: ", i)
            if (roll <= row.limit)
                return row;
            roll -= row.limit;
        }
        throw new RangeError("Table rows overflow");
    }

    public pick(index: number): TableRow {
        if (index >= this.rows.length)
            return this.rows[this.rows.length-1]
        return this.rows[index]
    }

    public do(modifier: number = 0): string {
        let row = this.roll(modifier)
        let res = row.text
        for (let action of row.actions)
            res += "\n" + action.do(modifier)
        console.log(row, res)
        return res
    }
}