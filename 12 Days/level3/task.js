let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(text) {
    let CleanText = text.replace(/[@%$&;#!]/g, '') 
    console.log(`Clean text : "${CleanText}"`);

    let word = CleanText.replace(/[.,?]/g,'').split(/\s+/);
    let wordCount = {};
    word.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    let sortedWords = Object.entries(wordCount)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count);
    console.log(sortedWords.slice(0, 3));
}

cleanText(sentence)