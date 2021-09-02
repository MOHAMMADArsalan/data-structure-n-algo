/**
 * words = ['abc', 'bca', 'cat', 'act']
 *
 * return [['abc' , 'bca'], ['cat' , 'act']]
 *
 * time (w * n log(n)) | space( w * n)
 */



function groupOfAnagrams(words) {
    let anagrams = {};

    for(let word of words) {
        const sortedWord  = word.split('').sort().join('');

        if(!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }

        anagrams[sortedWord].push(word);
    }
    return Object.values(anagrams);
}



console.log(groupOfAnagrams(['abc', 'bca', 'cat', 'act']))