import Action from './action';

function generateRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Dice implements Action {
    private count: number;
    private faces: number;
    private fixedBonus: number;

    public constructor(count: number = 1, faces: number = 6, fixedBonus: number = 0) {
        this.count = count;
        this.faces = faces;
        this.fixedBonus = fixedBonus;
    }

    public roll(modifier: number = 0): number {
        let sum: number = 0;
        for (let i = 0; i < this.count; i++)
            sum += generateRandomInteger(1, this.faces);
        
        return sum + this.fixedBonus + modifier;
    }

    public do(modifier: number = 0): string[] {
        return [this.roll(modifier).toString()];
    }
}

export default Dice;