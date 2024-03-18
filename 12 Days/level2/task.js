function tenMostFrequentWords(paragraph, count = null) {
    let words = paragraph.replace(/[.,]/g, '').split(/\s+/);
    let wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    if (count === null) {
        return Object.entries(wordCount)
            .map(([word, count]) => ({ word, count }));
    }
    let sortedWords = Object.entries(wordCount)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count);
    return sortedWords.slice(0, count);
}

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
