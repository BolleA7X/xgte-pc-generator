import Dice from './dice'
import { Table } from './table'

/* ======================================== SUPPLEMENTAL ======================================== */

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

/**
 * New custom table to randomly roll a background
 */
export const background = new Table(
    new Dice(1, 100),
    [
        {limit:   6, text: "@background-0",  modifier: 0, actions: []},
        {limit:  12, text: "@background-1",  modifier: 0, actions: []},
        {limit:  18, text: "@background-2",  modifier: 0, actions: []},
        {limit:  25, text: "@background-3",  modifier: 0, actions: []},
        {limit:  31, text: "@background-4",  modifier: 0, actions: []},
        {limit:  37, text: "@background-5",  modifier: 0, actions: []},
        {limit:  43, text: "@background-6",  modifier: 0, actions: []},
        {limit:  50, text: "@background-7",  modifier: 0, actions: []},
        {limit:  56, text: "@background-8",  modifier: 0, actions: []},
        {limit:  62, text: "@background-9",  modifier: 0, actions: []},
        {limit:  68, text: "@background-10", modifier: 0, actions: []},
        {limit:  75, text: "@background-11", modifier: 0, actions: []},
        {limit:  81, text: "@background-12", modifier: 0, actions: []},
        {limit:  87, text: "@background-13", modifier: 0, actions: []},
        {limit:  93, text: "@background-14", modifier: 0, actions: []},
        {limit: 100, text: "@background-15", modifier: 0, actions: []},
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
        {limit:   7, text: "@class-0",  modifier: 0, actions: []},
        {limit:  14, text: "@class-1",  modifier: 0, actions: []},
        {limit:  29, text: "@class-2",  modifier: 0, actions: []},
        {limit:  36, text: "@class-3",  modifier: 0, actions: []},
        {limit:  52, text: "@class-4",  modifier: 0, actions: []},
        {limit:  58, text: "@class-5",  modifier: 0, actions: []},
        {limit:  64, text: "@class-6",  modifier: 0, actions: []},
        {limit:  70, text: "@class-7",  modifier: 0, actions: []},
        {limit:  84, text: "@class-8",  modifier: 0, actions: []},
        {limit:  89, text: "@class-9",  modifier: 0, actions: []},
        {limit:  94, text: "@class-10", modifier: 0, actions: []},
        {limit: 100, text: "@class-11", modifier: 0, actions: []},
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

export const race = new Table(
    new Dice(1, 100),
    [
        {limit:  12, text: "@race-0", modifier: 0, actions: []},
        {limit:  23, text: "@race-1", modifier: 0, actions: []},
        {limit:  34, text: "@race-2", modifier: 0, actions: []},
        {limit:  45, text: "@race-3", modifier: 0, actions: []},
        {limit:  56, text: "@race-4", modifier: 0, actions: []},
        {limit:  67, text: "@race-5", modifier: 0, actions: []},
        {limit:  78, text: "@race-6", modifier: 0, actions: [halfelfParents]},
        {limit:  89, text: "@race-7", modifier: 0, actions: [halforcParents]},
        {limit: 100, text: "@race-8", modifier: 0, actions: [tieflingParents]},
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

/* ======================================== ORIGINS ======================================== */

export const parents = new Table(
    new Dice(1, 100),
    [
        {limit:  95, text: "@parents-0", modifier: 0, actions: []},
        {limit: 100, text: "@parents-1", modifier: 0, actions: []},
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
        {limit:  2, text: "0",       modifier: 0, actions: [new Dice(0, 0)]},
        {limit:  4, text: "1d3",     modifier: 0, actions: [new Dice(1, 3)]},
        {limit:  6, text: "1d4 + 1", modifier: 0, actions: [new Dice(1, 4, 1)]},
        {limit:  8, text: "1d6 + 2", modifier: 0, actions: [new Dice(1, 6, 2)]},
        {limit: 10, text: "1d8 + 3", modifier: 0, actions: [new Dice(1, 8, 3)]},
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

/* ======================================== PERSONAL DECISIONS ======================================== */

/* BACKGROUND */

export const acolyte = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@acolyte-0", modifier: 0, actions: []},
        {limit: 2, text: "@acolyte-1", modifier: 0, actions: []},
        {limit: 3, text: "@acolyte-2", modifier: 0, actions: []},
        {limit: 4, text: "@acolyte-3", modifier: 0, actions: []},
        {limit: 5, text: "@acolyte-4", modifier: 0, actions: []},
        {limit: 6, text: "@acolyte-5", modifier: 0, actions: []},
    ]
)

export const charlatan = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@charlatan-0", modifier: 0, actions: []},
        {limit: 2, text: "@charlatan-1", modifier: 0, actions: []},
        {limit: 3, text: "@charlatan-2", modifier: 0, actions: []},
        {limit: 4, text: "@charlatan-3", modifier: 0, actions: []},
        {limit: 5, text: "@charlatan-4", modifier: 0, actions: []},
        {limit: 6, text: "@charlatan-5", modifier: 0, actions: []},
    ]
)

export const criminal = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@criminal-0", modifier: 0, actions: []},
        {limit: 2, text: "@criminal-1", modifier: 0, actions: []},
        {limit: 3, text: "@criminal-2", modifier: 0, actions: []},
        {limit: 4, text: "@criminal-3", modifier: 0, actions: []},
        {limit: 5, text: "@criminal-4", modifier: 0, actions: []},
        {limit: 6, text: "@criminal-5", modifier: 0, actions: []},
    ]
)

export const entertainer = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@entertainer-0", modifier: 0, actions: []},
        {limit: 2, text: "@entertainer-1", modifier: 0, actions: []},
        {limit: 3, text: "@entertainer-2", modifier: 0, actions: []},
        {limit: 4, text: "@entertainer-3", modifier: 0, actions: []},
        {limit: 5, text: "@entertainer-4", modifier: 0, actions: []},
        {limit: 6, text: "@entertainer-5", modifier: 0, actions: []},
    ]
)

export const folkHero = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@folkhero-0", modifier: 0, actions: []},
        {limit: 2, text: "@folkhero-1", modifier: 0, actions: []},
        {limit: 3, text: "@folkhero-2", modifier: 0, actions: []},
        {limit: 4, text: "@folkhero-3", modifier: 0, actions: []},
        {limit: 5, text: "@folkhero-4", modifier: 0, actions: []},
        {limit: 6, text: "@folkhero-5", modifier: 0, actions: []},
    ]
)

export const guildArtisan = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@guildartisan-0", modifier: 0, actions: []},
        {limit: 2, text: "@guildartisan-1", modifier: 0, actions: []},
        {limit: 3, text: "@guildartisan-2", modifier: 0, actions: []},
        {limit: 4, text: "@guildartisan-3", modifier: 0, actions: []},
        {limit: 5, text: "@guildartisan-4", modifier: 0, actions: []},
        {limit: 6, text: "@guildartisan-5", modifier: 0, actions: []},
    ]
)

export const hermit = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@hermit-0", modifier: 0, actions: []},
        {limit: 2, text: "@hermit-1", modifier: 0, actions: []},
        {limit: 3, text: "@hermit-2", modifier: 0, actions: []},
        {limit: 4, text: "@hermit-3", modifier: 0, actions: []},
        {limit: 5, text: "@hermit-4", modifier: 0, actions: []},
        {limit: 6, text: "@hermit-5", modifier: 0, actions: []},
    ]
)

export const noble = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@noble-0", modifier: 0, actions: []},
        {limit: 2, text: "@noble-1", modifier: 0, actions: []},
        {limit: 3, text: "@noble-2", modifier: 0, actions: []},
        {limit: 4, text: "@noble-3", modifier: 0, actions: []},
        {limit: 5, text: "@noble-4", modifier: 0, actions: []},
        {limit: 6, text: "@noble-5", modifier: 0, actions: []},
    ]
)

export const outlander = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@outlander-0", modifier: 0, actions: []},
        {limit: 2, text: "@outlander-1", modifier: 0, actions: []},
        {limit: 3, text: "@outlander-2", modifier: 0, actions: []},
        {limit: 4, text: "@outlander-3", modifier: 0, actions: []},
        {limit: 5, text: "@outlander-4", modifier: 0, actions: []},
        {limit: 6, text: "@outlander-5", modifier: 0, actions: []},
    ]
)

export const sage = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@sage-0", modifier: 0, actions: []},
        {limit: 2, text: "@sage-1", modifier: 0, actions: []},
        {limit: 3, text: "@sage-2", modifier: 0, actions: []},
        {limit: 4, text: "@sage-3", modifier: 0, actions: []},
        {limit: 5, text: "@sage-4", modifier: 0, actions: []},
        {limit: 6, text: "@sage-5", modifier: 0, actions: []},
    ]
)

export const sailor = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@sailor-0", modifier: 0, actions: []},
        {limit: 2, text: "@sailor-1", modifier: 0, actions: []},
        {limit: 3, text: "@sailor-2", modifier: 0, actions: []},
        {limit: 4, text: "@sailor-3", modifier: 0, actions: []},
        {limit: 5, text: "@sailor-4", modifier: 0, actions: []},
        {limit: 6, text: "@sailor-5", modifier: 0, actions: []},
    ]
)

export const soldier = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@soldier-0", modifier: 0, actions: []},
        {limit: 2, text: "@soldier-1", modifier: 0, actions: []},
        {limit: 3, text: "@soldier-2", modifier: 0, actions: []},
        {limit: 4, text: "@soldier-3", modifier: 0, actions: []},
        {limit: 5, text: "@soldier-4", modifier: 0, actions: []},
        {limit: 6, text: "@soldier-5", modifier: 0, actions: []},
    ]
)

export const urchin = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@urchin-0", modifier: 0, actions: []},
        {limit: 2, text: "@urchin-1", modifier: 0, actions: []},
        {limit: 3, text: "@urchin-2", modifier: 0, actions: []},
        {limit: 4, text: "@urchin-3", modifier: 0, actions: []},
        {limit: 5, text: "@urchin-4", modifier: 0, actions: []},
        {limit: 6, text: "@urchin-5", modifier: 0, actions: []},
    ]
)

/* CLASS TRAINING */

export const barbarian = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@barbarian-0", modifier: 0, actions: []},
        {limit: 2, text: "@barbarian-1", modifier: 0, actions: []},
        {limit: 3, text: "@barbarian-2", modifier: 0, actions: []},
        {limit: 4, text: "@barbarian-3", modifier: 0, actions: []},
        {limit: 5, text: "@barbarian-4", modifier: 0, actions: []},
        {limit: 6, text: "@barbarian-5", modifier: 0, actions: []},
    ]
)

export const bard = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@bard-0", modifier: 0, actions: []},
        {limit: 2, text: "@bard-1", modifier: 0, actions: []},
        {limit: 3, text: "@bard-2", modifier: 0, actions: []},
        {limit: 4, text: "@bard-3", modifier: 0, actions: []},
        {limit: 5, text: "@bard-4", modifier: 0, actions: []},
        {limit: 6, text: "@bard-5", modifier: 0, actions: []},
    ]
)

export const cleric = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@cleric-0", modifier: 0, actions: []},
        {limit: 2, text: "@cleric-1", modifier: 0, actions: []},
        {limit: 3, text: "@cleric-2", modifier: 0, actions: []},
        {limit: 4, text: "@cleric-3", modifier: 0, actions: []},
        {limit: 5, text: "@cleric-4", modifier: 0, actions: []},
        {limit: 6, text: "@cleric-5", modifier: 0, actions: []},
    ]
)

export const druid = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@druid-0", modifier: 0, actions: []},
        {limit: 2, text: "@druid-1", modifier: 0, actions: []},
        {limit: 3, text: "@druid-2", modifier: 0, actions: []},
        {limit: 4, text: "@druid-3", modifier: 0, actions: []},
        {limit: 5, text: "@druid-4", modifier: 0, actions: []},
        {limit: 6, text: "@druid-5", modifier: 0, actions: []},
    ]
)

export const fighter = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@fighter-0", modifier: 0, actions: []},
        {limit: 2, text: "@fighter-1", modifier: 0, actions: []},
        {limit: 3, text: "@fighter-2", modifier: 0, actions: []},
        {limit: 4, text: "@fighter-3", modifier: 0, actions: []},
        {limit: 5, text: "@fighter-4", modifier: 0, actions: []},
        {limit: 6, text: "@fighter-5", modifier: 0, actions: []},
    ]
)

export const monk = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@monk-0", modifier: 0, actions: []},
        {limit: 2, text: "@monk-1", modifier: 0, actions: []},
        {limit: 3, text: "@monk-2", modifier: 0, actions: []},
        {limit: 4, text: "@monk-3", modifier: 0, actions: []},
        {limit: 5, text: "@monk-4", modifier: 0, actions: []},
        {limit: 6, text: "@monk-5", modifier: 0, actions: []},
    ]
)

export const paladin = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@paladin-0", modifier: 0, actions: []},
        {limit: 2, text: "@paladin-1", modifier: 0, actions: []},
        {limit: 3, text: "@paladin-2", modifier: 0, actions: []},
        {limit: 4, text: "@paladin-3", modifier: 0, actions: []},
        {limit: 5, text: "@paladin-4", modifier: 0, actions: []},
        {limit: 6, text: "@paladin-5", modifier: 0, actions: []},
    ]
)

export const ranger = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@ranger-0", modifier: 0, actions: []},
        {limit: 2, text: "@ranger-1", modifier: 0, actions: []},
        {limit: 3, text: "@ranger-2", modifier: 0, actions: []},
        {limit: 4, text: "@ranger-3", modifier: 0, actions: []},
        {limit: 5, text: "@ranger-4", modifier: 0, actions: []},
        {limit: 6, text: "@ranger-5", modifier: 0, actions: []},
    ]
)

export const rogue = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@rogue-0", modifier: 0, actions: []},
        {limit: 2, text: "@rogue-1", modifier: 0, actions: []},
        {limit: 3, text: "@rogue-2", modifier: 0, actions: []},
        {limit: 4, text: "@rogue-3", modifier: 0, actions: []},
        {limit: 5, text: "@rogue-4", modifier: 0, actions: []},
        {limit: 6, text: "@rogue-5", modifier: 0, actions: []},
    ]
)

export const sorcerer = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@sorcerer-0", modifier: 0, actions: []},
        {limit: 2, text: "@sorcerer-1", modifier: 0, actions: []},
        {limit: 3, text: "@sorcerer-2", modifier: 0, actions: []},
        {limit: 4, text: "@sorcerer-3", modifier: 0, actions: []},
        {limit: 5, text: "@sorcerer-4", modifier: 0, actions: []},
        {limit: 6, text: "@sorcerer-5", modifier: 0, actions: []},
    ]
)

export const warlock = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@warlock-0", modifier: 0, actions: []},
        {limit: 2, text: "@warlock-1", modifier: 0, actions: []},
        {limit: 3, text: "@warlock-2", modifier: 0, actions: []},
        {limit: 4, text: "@warlock-3", modifier: 0, actions: []},
        {limit: 5, text: "@warlock-4", modifier: 0, actions: []},
        {limit: 6, text: "@warlock-5", modifier: 0, actions: []},
    ]
)

export const wizard = new Table(
    new Dice(1, 6),
    [
        {limit: 1, text: "@wizard-0", modifier: 0, actions: []},
        {limit: 2, text: "@wizard-1", modifier: 0, actions: []},
        {limit: 3, text: "@wizard-2", modifier: 0, actions: []},
        {limit: 4, text: "@wizard-3", modifier: 0, actions: []},
        {limit: 5, text: "@wizard-4", modifier: 0, actions: []},
        {limit: 6, text: "@wizard-5", modifier: 0, actions: []},
    ]
)

/* ======================================== EVENTS ======================================== */

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