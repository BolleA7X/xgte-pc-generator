import Dice from '../dice'
import { Table } from '../table'
import { causeOfDeath } from './supplemental'

export const parents = new Table(
    new Dice(1, 100),
    [
        {limit:  95, text: "@parents-0", modifier: 0, actions: []},
        {limit: 100, text: "@parents-1", modifier: 0, actions: []},
    ]
)

export const halfelfParents = new Table(
    new Dice(1, 8),
    [
        {limit: 5, text: "@halfelfparents-0", modifier: 0, actions: []},
        {limit: 6, text: "@halfelfparents-1", modifier: 0, actions: []},
        {limit: 7, text: "@halfelfparents-2", modifier: 0, actions: []},
        {limit: 8, text: "@halfelfparents-3", modifier: 0, actions: []},
    ]
)

export const halforcParents = new Table(
    new Dice(1, 8),
    [
        {limit: 3, text: "@halforcparents-0", modifier: 0, actions: []},
        {limit: 5, text: "@halforcparents-1", modifier: 0, actions: []},
        {limit: 7, text: "@halforcparents-2", modifier: 0, actions: []},
        {limit: 8, text: "@halforcparents-3", modifier: 0, actions: []},
    ]
)

export const tieflingParents = new Table(
    new Dice(1, 8),
    [
        {limit: 4, text: "@tieflingparents-0", modifier: 0, actions: []},
        {limit: 6, text: "@tieflingparents-1", modifier: 0, actions: []},
        {limit: 7, text: "@tieflingparents-2", modifier: 0, actions: []},
        {limit: 8, text: "@tieflingparents-3", modifier: 0, actions: []},
    ]
)

export const birthplace = new Table(
    new Dice(1, 100),
    [
        {limit:  50, text: "@birthplace-0",  modifier: 0, actions: []},
        {limit:  55, text: "@birthplace-1",  modifier: 0, actions: []},
        {limit:  63, text: "@birthplace-2",  modifier: 0, actions: []},
        {limit:  65, text: "@birthplace-3",  modifier: 0, actions: []},
        {limit:  68, text: "@birthplace-4",  modifier: 0, actions: []},
        {limit:  70, text: "@birthplace-5",  modifier: 0, actions: []},
        {limit:  72, text: "@birthplace-6",  modifier: 0, actions: []},
        {limit:  74, text: "@birthplace-7",  modifier: 0, actions: []},
        {limit:  77, text: "@birthplace-8",  modifier: 0, actions: []},
        {limit:  78, text: "@birthplace-9",  modifier: 0, actions: []},
        {limit:  80, text: "@birthplace-10", modifier: 0, actions: []},
        {limit:  82, text: "@birthplace-11", modifier: 0, actions: []},
        {limit:  84, text: "@birthplace-12", modifier: 0, actions: []},
        {limit:  85, text: "@birthplace-13", modifier: 0, actions: []},
        {limit:  88, text: "@birthplace-14", modifier: 0, actions: []},
        {limit:  91, text: "@birthplace-15", modifier: 0, actions: []},
        {limit:  93, text: "@birthplace-16", modifier: 0, actions: []},
        {limit:  95, text: "@birthplace-17", modifier: 0, actions: []},
        {limit:  96, text: "@birthplace-18", modifier: 0, actions: []},
        {limit:  97, text: "@birthplace-19", modifier: 0, actions: []},
        {limit:  98, text: "@birthplace-20", modifier: 0, actions: []},
        {limit:  99, text: "@birthplace-21", modifier: 0, actions: []},
        {limit: 100, text: "@birthplace-22", modifier: 0, actions: []},
    ]
)

export const siblingsNumber = new Table(
    new Dice(1, 10),
    [
        {limit:  2, text: "@siblingsnum-0", modifier: 0, actions: []},
        {limit:  4, text: "@siblingsnum-1", modifier: 0, actions: []},
        {limit:  6, text: "@siblingsnum-2", modifier: 0, actions: []},
        {limit:  8, text: "@siblingsnum-3", modifier: 0, actions: []},
        {limit: 10, text: "@siblingsnum-4", modifier: 0, actions: []},
    ]
)

export const birthOrder = new Table(
    new Dice(2, 6),
    [
        {limit:  2, text: "@birthorder-0", modifier: 0, actions: []},
        {limit:  7, text: "@birthorder-1", modifier: 0, actions: []},
        {limit: 12, text: "@birthorder-2", modifier: 0, actions: []},
    ]
)

export const family = new Table(
    new Dice(1, 100),
    [
        {limit:   1, text: "@family-0",   modifier: 0, actions: []},
        {limit:   2, text: "@family-1",   modifier: 0, actions: []},
        {limit:   3, text: "@family-2",   modifier: 0, actions: []},
        {limit:   5, text: "@family-3",   modifier: 0, actions: []},
        {limit:   7, text: "@family-4",   modifier: 0, actions: []},
        {limit:  15, text: "@family-5",   modifier: 0, actions: []},
        {limit:  25, text: "@family-6",   modifier: 0, actions: []},
        {limit:  35, text: "@family-7",   modifier: 0, actions: []},
        {limit:  55, text: "@family-8",   modifier: 0, actions: []},
        {limit:  75, text: "@family-9",   modifier: 0, actions: []},
        {limit: 100, text: "@family-10",  modifier: 0, actions: []},
    ]
)

export const absentParent = new Table(
    new Dice(1, 4),
    [
        {limit: 1, text: "@absentparent-0", modifier: 0, actions: [causeOfDeath]},
        {limit: 2, text: "@absentparent-1", modifier: 0, actions: []},
        {limit: 3, text: "@absentparent-2", modifier: 0, actions: []},
        {limit: 4, text: "@absentparent-3", modifier: 0, actions: []},
    ]
)

export const familyLifestyle = new Table(
    new Dice(3, 6),
    [
        {limit:  3, text: "@lifestyle-0", modifier: -40, actions: []},
        {limit:  5, text: "@lifestyle-1", modifier: -20, actions: []},
        {limit:  8, text: "@lifestyle-2", modifier: -10, actions: []},
        {limit: 12, text: "@lifestyle-3", modifier:   0, actions: []},
        {limit: 15, text: "@lifestyle-4", modifier:  10, actions: []},
        {limit: 17, text: "@lifestyle-5", modifier:  20, actions: []},
        {limit: 18, text: "@lifestyle-6", modifier:  40, actions: []},
    ]
)

export const childhoodHome = new Table(
    new Dice(1, 100),
    [
        {limit:   0, text: "@home-0", modifier: 0, actions: []},
        {limit:  20, text: "@home-1", modifier: 0, actions: []},
        {limit:  30, text: "@home-2", modifier: 0, actions: []},
        {limit:  40, text: "@home-3", modifier: 0, actions: []},
        {limit:  50, text: "@home-4", modifier: 0, actions: []},
        {limit:  70, text: "@home-5", modifier: 0, actions: []},
        {limit:  90, text: "@home-6", modifier: 0, actions: []},
        {limit: 110, text: "@home-7", modifier: 0, actions: []},
        {limit: 999, text: "@home-8", modifier: 0, actions: []},
    ]
)

export const childhoodMemories = new Table(
    new Dice(3, 6),
    [
        {limit:  3, text: "@memories-0", modifier: 0, actions: []},
        {limit:  5, text: "@memories-1", modifier: 0, actions: []},
        {limit:  8, text: "@memories-2", modifier: 0, actions: []},
        {limit: 12, text: "@memories-3", modifier: 0, actions: []},
        {limit: 15, text: "@memories-4", modifier: 0, actions: []},
        {limit: 17, text: "@memories-5", modifier: 0, actions: []},
        {limit: 99, text: "@memories-6", modifier: 0, actions: []},
    ]
)