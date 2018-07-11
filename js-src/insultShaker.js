
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

//works possibly slow with map function
function combineWord() {
	let anotherTest = anotherWordList[randomWord(anotherWordList)].another;


    // let test = sillyWordList[randomWord(sillyWordList)].silly;
    // let anotherTest = anotherWordList[randomWord(anotherWordList)].silly;


    //doesn't work--needs to be copied twice
    // let chooseWord = sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly;

    //check for performance hit -- if there is a performance hit just store in multiple variables -- this is if we need to use the same list twice
    return sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly + " " 
    + sillyWordList.map(a => ({...a}))[randomWord(sillyWordList)].silly + " "
    + anotherTest;
}

// function randomWord(mr) {
//     return Math.floor(Math.random()*mr.length);
// };

// randomWord = (mr) => {
//       return Math.floor(Math.random()*mr.length);
// };
