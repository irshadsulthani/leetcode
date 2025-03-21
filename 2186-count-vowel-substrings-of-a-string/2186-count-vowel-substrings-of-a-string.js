/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let left = 0; left < word.length; left++) {
        let freq = new Map();
        for (let right = left; right < word.length; right++) {
            let char = word[right];

            if (!vowels.has(char)) break; 

            freq.set(char, (freq.get(char) || 0) + 1);

            if (freq.size === 5) count++;
        }
    }

    return count;
};

