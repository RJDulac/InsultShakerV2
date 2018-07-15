
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







const wordClick = document.getElementById("clickWord");
const getRandom = document.getElementById("generatedText");
wordClick.addEventListener("click", function() {
  getRandom.innerHTML = combineWord();

});

randomWord = (mr) => (Math.floor(Math.random()*mr.length));

//best way for duplicate wordlist. Puts variable output into it's own excution environment so we don't reference the same variable when invoking randomWord function
anotherTest = () => anotherWordList[randomWord(anotherWordList)].another;
sillyWordFunc = () =>sillyWordList[randomWord(sillyWordList)].silly;

 //best to use functions for using the same list twice to create unique memories
combineWord = () => anotherTest() + " " + anotherTest() + " " + sillyWordFunc() + " " + sillyWordFunc();



