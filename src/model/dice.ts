import Action from './action';

/**
 * Generates a random integer given a minimum and a maximum value
 * @param min Minimum value (inclusive)
 * @param max Maximum value (inclusive)
 * @returns A random integer in the desired range
 */
function generateRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Simulates a dice roll
 */
class Dice implements Action {
    private count: number;          // Number of rolls (e.g. the '2' of a 2d6 roll)
    private faces: number;          // Number of faces of the die (e.g. the '6' if a 2d6 roll)
    private fixedBonus: number;     // Fixed integer value to add to/subtract from the roll result

    public constructor(count: number = 1, faces: number = 6, fixedBonus: number = 0) {
        this.count = count;
        this.faces = faces;
        this.fixedBonus = fixedBonus;
    }

    /**
     * Rolls the dice
     * @param modifier Integer value to add to/subtract from the roll result
     * @returns The result of the roll as an integer
     */
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