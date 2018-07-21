//possibly a better approach

//accessing dom
// const clickWord = document.getElementById("btnWord");

const wordClick = document.getElementById("clickWord");


const getRandom = document.getElementById("generatedText");
wordClick.addEventListener("click", function() {
  getRandom.innerText = combineWord(
  	//wordlists passed as arguments
  	sillyWordList[randomWord(sillyWordList)].silly, 
  	sillyWordList[randomWord(sillyWordList)].silly,
  	anotherWordList[randomWord(anotherWordList)].another,
  	anotherWordList[randomWord(anotherWordList)].another
  	);

});

//get random index of array
randomWord = (mr) => (Math.floor(Math.random()*mr.length));

//wordlists pass through these parameters to create individual execution environments for the same or different lists
combineWord = (a, b, c, d) => a + " " + b + " " + c + " " + d;




//update -- they can just be passed in parameters to create their own execution environments

//best way for duplicate wordlist. Puts variable output into it's own execution environment so we don't reference the same variable when invoking randomWord function
// anotherTest = () => anotherWordList[randomWord(anotherWordList)].another;
// sillyWordFunc = () => sillyWordList[randomWord(sillyWordList)].silly;

 //best to use functions for using the same list twice to create unique memories
// combineWord = () => anotherTest() + " " + anotherTest() + " " + sillyWordFunc() + " " + sillyWordFunc();

