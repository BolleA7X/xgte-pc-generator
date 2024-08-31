import Dice from '../dice'
import { Table } from '../table'

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