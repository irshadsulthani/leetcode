/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let currentWidth = 0;

    for (let char of s) {
        let charWidth = widths[char.charCodeAt(0) - 97];
        if (currentWidth + charWidth > 100) {
            lines++;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [lines, currentWidth];
};
