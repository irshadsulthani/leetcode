/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ')
            .sort((a,b) => a.match(/\d/) - b.match(/\d/))
            .map(word => word.replace(/\d/, ''))
            .join(' ')
};