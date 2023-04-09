/* 
It's the month of Ramadan, and all your friends are trying to read the full Quran! There are 30 chapters for 30 days. You want to help them out by writing a function that will tell them how many chapters they have left to read each day.

Write a function that takes in the number of chapters that have been read so far, and returns the number of chapters that are left to read.
*/

export function chaptersLeft(chaptersRead) {
    if (chaptersRead > 30) {
        return 0;
    } else if (chaptersRead < 0) {
        return 30;
    } else if (typeof chaptersRead !== 'number') {
        return 30;
    } else {
        return 30 - chaptersRead;
    }
}


