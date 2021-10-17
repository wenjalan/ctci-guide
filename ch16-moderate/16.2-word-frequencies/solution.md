# Problem 16.2: Word Frequencies
Design a method to find the frequency of occurrences of any given word in a book. What if we were running this algorithm multiple times?

## Setup
The wording on this problem is a bit unclear that we're given a word (string) and a book (array of strings to look through), and we're supposed to count how many times you find that word in the book. The key to this problem, however, is that we're hintedthat this algorithm is going to be ran multiple times. That gives us two cases:

1. We're given the book and the word, for the first time
2. We're given the book and the word, for the nth time

## Methodology
Seeing as we need to "read" the entire book to see all the words, we should expect that our first run has to be at least O(n) time. But for every subsequent call, we can have prepared the counts in advance by way of map.