import Dice from '../dice'
import { Table } from '../table'
import { causeOfDeath } from './supplemental'

const adventures = new Table(
    new Dice(1, 100),
    [
        {limit:  10, text: "@adventures-0",  modifier: 0, actions: []},
        {limit:  20, text: "@adventures-1",  modifier: 0, actions: []},
        {limit:  30, text: "@adventures-2",  modifier: 0, actions: []},
        {limit:  40, text: "@adventures-3",  modifier: 0, actions: []},
        {limit:  50, text: "@adventures-4",  modifier: 0, actions: []},
        {limit:  60, text: "@adventures-5",  modifier: 0, actions: []},
        {limit:  70, text: "@adventures-6",  modifier: 0, actions: []},
        {limit:  80, text: "@adventures-7",  modifier: 0, actions: []},
        {limit:  90, text: "@adventures-8",  modifier: 0, actions: [new Dice(2, 6)]},
        {limit:  99, text: "@adventures-9",  modifier: 0, actions: [new Dice(1, 20, 50)]},
        {limit: 100, text: "@adventures-10", modifier: 0, actions: []},
    ]
)

const arcaneMatters = new Table(
    new Dice(1, 10),
    [
        {limit:  1, text: "@arcanematters-0", modifier: 0, actions: []},
        {limit:  2, text: "@arcanematters-1", modifier: 0, actions: []},
        {limit:  3, text: "@arcanematters-2", modifier: 0, actions: []},
        {limit:  4, text: "@arcanematters-3", modifier: 0, actions: []},
        {limit:  5, text: "@arcanematters-4", modifier: 0, actions: []},
        {limit:  6, text: "@arcanematters-5", modifier: 0, actions: []},
        {limit:  7, text: "@arcanematters-6", modifier: 0, actions: []},
        {limit:  8, text: "@arcanematters-7", modifier: 0, actions: []},
        {limit:  9, text: "@arcanematters-8", modifier: 0, actions: []},
        {limit: 10, text: "@arcanematters-9", modifier: 0, actions: []}, // Removed the two rolls from this entry because they don't make sense
    ]
)

const boons = new Table(
    new Dice(1, 10),
    [
        {limit:  1, text: "@boons-0", modifier: 0, actions: []},
        {limit:  2, text: "@boons-1", modifier: 0, actions: []},
        {limit:  3, text: "@boons-2", modifier: 0, actions: []},
        {limit:  4, text: "@boons-3", modifier: 0, actions: [new Dice(1, 20)]},
        {limit:  5, text: "@boons-4", modifier: 0, actions: []},
        {limit:  6, text: "@boons-5", modifier: 0, actions: []},
        {limit:  7, text: "@boons-6", modifier: 0, actions: []},
        {limit:  8, text: "@boons-7", modifier: 0, actions: []},
        {limit:  9, text: "@boons-8", modifier: 0, actions: []},
        {limit: 10, text: "@boons-9", modifier: 0, actions: [new Dice(1, 20)]},
    ]
)

const crime = new Table(
    new Dice(1, 8),
    [
        {limit: 1, text: "@crime-0", modifier: 0, actions: []},
        {limit: 2, text: "@crime-1", modifier: 0, actions: []},
        {limit: 3, text: "@crime-2", modifier: 0, actions: []},
        {limit: 4, text: "@crime-3", modifier: 0, actions: []},
        {limit: 5, text: "@crime-4", modifier: 0, actions: []},
        {limit: 6, text: "@crime-5", modifier: 0, actions: []},
        {limit: 7, text: "@crime-6", modifier: 0, actions: []},
        {limit: 8, text: "@crime-7", modifier: 0, actions: []},
    ]
)

const punishment = new Table(
    new Dice(1, 12),
    [
        {limit:  3, text: "@punishment-0", modifier: 0, actions: []},
        {limit:  6, text: "@punishment-1", modifier: 0, actions: []},
        {limit:  8, text: "@punishment-2", modifier: 0, actions: []},
        {limit: 12, text: "@punishment-3", modifier: 0, actions: [new Dice(1, 4)]},
    ]
)

export const supernaturalEvents = new Table(
    new Dice(1, 100),
    [
        {limit:   5, text: "@supernatural-0",  modifier: 0, actions: []},
        {limit:  10, text: "@supernatural-1",  modifier: 0, actions: []},
        {limit:  15, text: "@supernatural-2",  modifier: 0, actions: [new Dice(1, 20, 50)]},
        {limit:  20, text: "@supernatural-3",  modifier: 0, actions: []},
        {limit:  30, text: "@supernatural-4",  modifier: 0, actions: []},
        {limit:  40, text: "@supernatural-5",  modifier: 0, actions: []},
        {limit:  50, text: "@supernatural-6",  modifier: 0, actions: []},
        {limit:  60, text: "@supernatural-7",  modifier: 0, actions: []},
        {limit:  70, text: "@supernatural-8",  modifier: 0, actions: []},
        {limit:  75, text: "@supernatural-9",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit:  80, text: "@supernatural-10", modifier: 0, actions: []},
        {limit:  85, text: "@supernatural-11", modifier: 0, actions: []},
        {limit:  90, text: "@supernatural-12", modifier: 0, actions: []},
        {limit:  95, text: "@supernatural-13", modifier: 0, actions: []},
        {limit: 100, text: "@supernatural-14", modifier: 0, actions: []},
    ]
)

export const tragedies = new Table(
    new Dice(1, 12),
    [
        {limit:  2, text: "@tragedies-0",  modifier: 0, actions: [causeOfDeath]},
        {limit:  3, text: "@tragedies-1",  modifier: 0, actions: []},
        {limit:  4, text: "@tragedies-2",  modifier: 0, actions: []},
        {limit:  5, text: "@tragedies-3",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit:  6, text: "@tragedies-4",  modifier: 0, actions: []},
        {limit:  7, text: "@tragedies-5",  modifier: 0, actions: []},
        {limit:  8, text: "@tragedies-6",  modifier: 0, actions: []},
        {limit:  9, text: "@tragedies-7",  modifier: 0, actions: []},
        {limit: 10, text: "@tragedies-8",  modifier: 0, actions: []},
        {limit: 11, text: "@tragedies-9",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit: 12, text: "@tragedies-10", modifier: 0, actions: [causeOfDeath, new Dice(1, 12)]},
    ]
)

const war = new Table(
    new Dice(1, 12),
    [
        {limit:  1, text: "@war-0", modifier: 0, actions: []},
        {limit:  3, text: "@war-1", modifier: 0, actions: []},
        {limit:  4, text: "@war-2", modifier: 0, actions: []},
        {limit:  7, text: "@war-3", modifier: 0, actions: []},
        {limit:  9, text: "@war-4", modifier: 0, actions: []},
        {limit: 11, text: "@war-5", modifier: 0, actions: []},
        {limit: 12, text: "@war-6", modifier: 0, actions: []},
    ]
)

const weirdStuff = new Table(
    new Dice(1, 12),
    [
        {limit:  1, text: "@weirdstuff-0",  modifier: 0, actions: [new Dice(1, 4)]},
        {limit:  2, text: "@weirdstuff-1",  modifier: 0, actions: []},
        {limit:  3, text: "@weirdstuff-2",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit:  4, text: "@weirdstuff-3",  modifier: 0, actions: [new Dice(1, 4)]},
        {limit:  5, text: "@weirdstuff-4",  modifier: 0, actions: []},
        {limit:  6, text: "@weirdstuff-5",  modifier: 0, actions: []},
        {limit:  7, text: "@weirdstuff-6",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit:  8, text: "@weirdstuff-7",  modifier: 0, actions: []},
        {limit:  9, text: "@weirdstuff-8",  modifier: 0, actions: []},
        {limit: 10, text: "@weirdstuff-9",  modifier: 0, actions: []},
        {limit: 11, text: "@weirdstuff-10", modifier: 0, actions: []},
        {limit: 12, text: "@weirdstuff-11", modifier: 0, actions: []},
    ]
)

export const lifeEvents = new Table(
    new Dice(1, 100),
    [
        {limit:  10, text: "@events-0",  modifier: 0, actions: [tragedies]},
        {limit:  20, text: "@events-1",  modifier: 0, actions: [boons]},
        {limit:  30, text: "@events-2",  modifier: 0, actions: []},
        {limit:  40, text: "@events-3",  modifier: 0, actions: [new Dice(1, 6)]},
        {limit:  50, text: "@events-4",  modifier: 0, actions: []},
        {limit:  70, text: "@events-5",  modifier: 0, actions: [new Dice(2, 6)]},
        {limit:  75, text: "@events-6",  modifier: 0, actions: []},
        {limit:  80, text: "@events-7",  modifier: 0, actions: [adventures]},
        {limit:  85, text: "@events-8",  modifier: 0, actions: [supernaturalEvents]},
        {limit:  90, text: "@events-9",  modifier: 0, actions: [war]},
        {limit:  95, text: "@events-10", modifier: 0, actions: [crime, punishment]},
        {limit:  99, text: "@events-11", modifier: 0, actions: [arcaneMatters]},
        {limit: 100, text: "@events-12", modifier: 0, actions: [weirdStuff]},
    ]
)