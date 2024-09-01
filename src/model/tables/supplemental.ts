import Dice from '../dice'
import { Table } from '../table'
import * as pd from './decisions'

/**
 * This table was originally the 'life events by age' table.
 * Now it generates a random character age and the number of life events is given by the 'modifier' field.
 * The number of events is now fixed instead of random (in the last entry the character could have 12 events...)
 */
export const age = new Table(
    new Dice(1, 100),
    [
        {limit:  20, text: "@age-0",  modifier: 1, actions: []},
        {limit:  59, text: "@age-1",  modifier: 2, actions: []},
        {limit:  69, text: "@age-2",  modifier: 3, actions: []},
        {limit:  89, text: "@age-3",  modifier: 4, actions: []},
        {limit:  99, text: "@age-4",  modifier: 5, actions: []},
        {limit: 100, text: "@age-5",  modifier: 6, actions: []},
    ]
)

export const alignment = new Table(
    new Dice(3, 6),
    [
        {limit:  3, text: "@alignment-0", modifier: 0, actions: []},
        {limit:  5, text: "@alignment-1", modifier: 0, actions: []},
        {limit:  8, text: "@alignment-2", modifier: 0, actions: []},
        {limit: 12, text: "@alignment-3", modifier: 0, actions: []},
        {limit: 15, text: "@alignment-4", modifier: 0, actions: []},
        {limit: 17, text: "@alignment-5", modifier: 0, actions: []},
        {limit: 18, text: "@alignment-6", modifier: 0, actions: []},
    ]
)

export const causeOfDeath = new Table(
    new Dice(1, 12),
    [
        {limit:  1, text: "@causeofdeath-0",  modifier: 0, actions: []},
        {limit:  2, text: "@causeofdeath-1",  modifier: 0, actions: []},
        {limit:  3, text: "@causeofdeath-2",  modifier: 0, actions: []},
        {limit:  4, text: "@causeofdeath-3",  modifier: 0, actions: []},
        {limit:  5, text: "@causeofdeath-4",  modifier: 0, actions: []},
        {limit:  7, text: "@causeofdeath-5",  modifier: 0, actions: []},
        {limit:  8, text: "@causeofdeath-6",  modifier: 0, actions: []},
        {limit:  9, text: "@causeofdeath-7",  modifier: 0, actions: []},
        {limit: 10, text: "@causeofdeath-8",  modifier: 0, actions: []},
        {limit: 11, text: "@causeofdeath-9",  modifier: 0, actions: []},
        {limit: 12, text: "@causeofdeath-10", modifier: 0, actions: []},
    ]
)

export const classes = new Table(
    new Dice(1, 100),
    [
        {limit:   7, text: "@class-0",  modifier: 0, actions: [pd.barbarian]},
        {limit:  14, text: "@class-1",  modifier: 0, actions: [pd.bard]},
        {limit:  29, text: "@class-2",  modifier: 0, actions: [pd.cleric]},
        {limit:  36, text: "@class-3",  modifier: 0, actions: [pd.druid]},
        {limit:  52, text: "@class-4",  modifier: 0, actions: [pd.fighter]},
        {limit:  58, text: "@class-5",  modifier: 0, actions: [pd.monk]},
        {limit:  64, text: "@class-6",  modifier: 0, actions: [pd.paladin]},
        {limit:  70, text: "@class-7",  modifier: 0, actions: [pd.ranger]},
        {limit:  84, text: "@class-8",  modifier: 0, actions: [pd.rogue]},
        {limit:  89, text: "@class-9",  modifier: 0, actions: [pd.sorcerer]},
        {limit:  94, text: "@class-10", modifier: 0, actions: [pd.warlock]},
        {limit: 100, text: "@class-11", modifier: 0, actions: [pd.wizard]},
    ]
)

export const occupation = new Table(
    new Dice(1, 100),
    [
        {limit:   5, text: "@occupation-0",  modifier: 0, actions: []},
        {limit:  10, text: "@occupation-1",  modifier: 0, actions: []},
        {limit:  11, text: "@occupation-2",  modifier: 0, actions: []},
        {limit:  26, text: "@occupation-3",  modifier: 0, actions: []},
        {limit:  31, text: "@occupation-4",  modifier: 0, actions: []},
        {limit:  36, text: "@occupation-5",  modifier: 0, actions: []},
        {limit:  38, text: "@occupation-6",  modifier: 0, actions: []},
        {limit:  43, text: "@occupation-7",  modifier: 0, actions: []},
        {limit:  55, text: "@occupation-8",  modifier: 0, actions: []},
        {limit:  60, text: "@occupation-9",  modifier: 0, actions: []},
        {limit:  75, text: "@occupation-10", modifier: 0, actions: []},
        {limit:  80, text: "@occupation-11", modifier: 0, actions: []},
        {limit:  85, text: "@occupation-12", modifier: 0, actions: []},
        {limit:  90, text: "@occupation-13", modifier: 0, actions: []},
        {limit:  95, text: "@occupation-14", modifier: 0, actions: []},
        {limit: 100, text: "@occupation-15", modifier: 0, actions: []},
    ]
)

export const race = new Table(
    new Dice(1, 100),
    [
        {limit:  40, text: "@race-0", modifier: 0, actions: []},
        {limit:  50, text: "@race-1", modifier: 0, actions: []},
        {limit:  60, text: "@race-2", modifier: 0, actions: []},
        {limit:  70, text: "@race-3", modifier: 0, actions: []},
        {limit:  75, text: "@race-4", modifier: 0, actions: []},
        {limit:  80, text: "@race-5", modifier: 0, actions: []},
        {limit:  85, text: "@race-6", modifier: 0, actions: []},
        {limit:  90, text: "@race-7", modifier: 0, actions: []},
        {limit:  95, text: "@race-8", modifier: 0, actions: []},
        {limit: 100, text: "@race-9", modifier: 0, actions: []},
    ]
)

export const relationship = new Table(
    new Dice(3, 4),
    [
        {limit:  4, text: "@relationship-0", modifier: 0, actions: []},
        {limit: 10, text: "@relationship-1", modifier: 0, actions: []},
        {limit: 12, text: "@relationship-2", modifier: 0, actions: []},
    ]
)

export const status = new Table(
    new Dice(3, 6),
    [
        {limit:  3, text: "@status-0", modifier: 0, actions: [causeOfDeath]},
        {limit:  5, text: "@status-1", modifier: 0, actions: []},
        {limit:  8, text: "@status-2", modifier: 0, actions: []},
        {limit: 12, text: "@status-3", modifier: 0, actions: []},
        {limit: 15, text: "@status-4", modifier: 0, actions: []},
        {limit: 17, text: "@status-5", modifier: 0, actions: []},
        {limit: 18, text: "@status-6", modifier: 0, actions: []},
    ]
)