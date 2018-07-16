//accessing dom
const clickWord = document.getElementById("btnWord");

const wordClick = document.getElementById("clickWord");
const getRandom = document.getElementById("generatedText");
wordClick.addEventListener("click", function() {
  getRandom.innerHTML = combineWord();

});

//get random index of array
randomWord = (mr) => (Math.floor(Math.random()*mr.length));

//best way for duplicate wordlist. Puts variable output into it's own execution environment so we don't reference the same variable when invoking randomWord function
anotherTest = () => anotherWordList[randomWord(anotherWordList)].another;
sillyWordFunc = () => sillyWordList[randomWord(sillyWordList)].silly;

 //best to use functions for using the same list twice to create unique memories
combineWord = () => anotherTest() + " " + anotherTest() + " " + sillyWordFunc() + " " + sillyWordFunc();