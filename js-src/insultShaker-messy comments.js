
const clickWord = document.getElementById("btnWord");

const sillyWordList = [
{silly: "jerk"},
{silly: "butter"},
{silly: "rolling"},
{silly: "broken"},
{silly: "booger"},
{silly: "air head"},
{silly: "dork"},
{silly: "limey"},
{silly: "klutz"},
{silly: "nerd"},
{silly: "dweeb"},
{silly: "obnoxious"},
{silly: "geezer"},
{silly: "crusty"},
{silly: "crazy"},
{silly: "trashy"},
{silly: "unkempt"},
{silly: "beastly"},
{silly: "sauce"},
{silly: "busted"},
{silly: "silly"},
{silly: "absurd"}
];

const anotherWordList = [
{another: "jerk"},
{another: "butter"},
{another: "rolling"},
{another: "broken"},
{another: "nugget"},
{another: "biscuit"},
{another: "boring"},
{another: "cat"},
{another: "coward"},
{another: "trash"},
{another: "wobbly"},
{another: "dusty"},
{another: "dumb"},
{another: "fool"},
{another: "gross"},
{another: "stupid"}

];


//cannot access silly with this way?
// const anotherWordList = sillyWordList.splice(0);

//possible performance hit with map method but works
//no need for another word list unless map becomes a performance hit
// const anotherWordList = sillyWordList.map(a => ({...a}));

randomWord = (mr) => (Math.floor(Math.random()*mr.length));



const wordClick = document.getElementById("clickWord");
const getRandom = document.getElementById("generatedText");
wordClick.addEventListener("click", function() {
  getRandom.innerHTML = combineWord();

    // console.log(combineWord());
});

//find way to optimize codde. This isn't efficent
// function combineWord() {
//     let test = sillyWordList[randomWord(sillyWordList)].silly;
//     let anotherTest = anotherWordList[randomWord(anotherWordList)].silly;

//     return test + " " + anotherTest;
// }

//works possibly slow with map method

//put functions in global and turn into an arrow function later. Also leave descriptive comments
function combineWord() {
    //best way for duplicate wordlist. Puts variable output into it's own excution environment so we don't reference the same variable when invoking randomWord function
	anotherTest = () => anotherWordList[randomWord(anotherWordList)].another;
    sillyWordFunc = () =>sillyWordList[randomWord(sillyWordList)].silly;



    // let test = sillyWordList[randomWord(sillyWordList)].silly;
    // let anotherTest = anotherWordList[randomWord(anotherWordList)].silly;


    //doesn't work--needs to be copied twice
    // let chooseWord = sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly;

    //best to use functions for using the same list twice to create unique memories
    return anotherTest() + " " + anotherTest() + " " + sillyWordFunc() + " " + sillyWordFunc();

    //old way less efficent
    // sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly + " " 
    // + sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly
}

// function randomWord(mr) {
//     return Math.floor(Math.random()*mr.length);
// };

// randomWord = (mr) => {
//       return Math.floor(Math.random()*mr.length);
// };

