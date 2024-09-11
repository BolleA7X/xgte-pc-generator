/**
 * Defines a generic action triggered by a roll on a table.
 * Actions can be other rolls on tables or a simple dice roll
 */
interface Action {
    /**
     * Does the action
     * @param modifier Integer value to add to/subtract from the roll result
     * @return List of strings returned by the chain of actions
     */
    do(modifier: number): string[];
}

export default Action;