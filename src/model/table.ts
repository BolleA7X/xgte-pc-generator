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

    public pick(modifier: number = 0): TableRow {
        let roll: number = this.dice.roll(modifier);
        for (let i = 0; i < this.rows.length; i++) {
            let row = this.rows[i];
            if (roll <= row.limit)
                return row;
            roll -= row.limit;
        }
        throw new RangeError("Table rows overflow");
    }

    public do(modifier: number = 0): string {
        return this.pick(modifier).text;
    }
}