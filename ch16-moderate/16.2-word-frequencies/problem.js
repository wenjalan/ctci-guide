// Problem 16.2: Word Frequencies
//
// Design a method to find the frequency of occurrences of any given word in a book. What if we were running this algorithm multiple times?
let freq = null;

// returns the number of times a word appears in book
function getFrequency(word, book) {
    // if this is the first time we're running, get the map
    if (freq === null) {
        freq = countWordOccurrences(book);
    }
    // return the value in the map
    return freq.has(word) ? freq.get(word) : 0;
}

// returns a map of words to their frequencies in book
function countWordOccurrences(book) {
    const map = new Map();
    book.forEach(word => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });
    return map;
}

console.log(getFrequency('a', ['a', 'b', 'c']));