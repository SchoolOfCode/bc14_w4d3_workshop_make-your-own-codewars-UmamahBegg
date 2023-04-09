//👉 Write your tests below here:

import { chaptersLeft } from './main.js';

test ('returns the number of chapters left to read', () => {
    expect(chaptersLeft(1)).toEqual(29);
    expect(chaptersLeft(5)).toEqual(25);
    expect(chaptersLeft(30)).toEqual(0);
});

test ('returns 0 if the number of chapters read is greater than 30', () => {
    expect(chaptersLeft(31)).toEqual(0);
    expect(chaptersLeft(100)).toEqual(0);
});

test ('returns 30 if the number of chapters read is less than 0', () => {
    expect(chaptersLeft(-1)).toEqual(30);
    expect(chaptersLeft(-100)).toEqual(30);
});

test ('returns 30 if the number of chapters read is not a number', () => {
    expect(chaptersLeft('hello')).toEqual(30);
    expect(chaptersLeft(true)).toEqual(30);
});

test ('returns 30 if the number of chapters read is not provided', () => {
    expect(chaptersLeft()).toEqual(30);
});
