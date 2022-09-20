// 1.

// function stringLength(word){
//     console.log(word.length)
// }

// stringLength('hello')

// #########################

function getTrain(sentence) {
	let splitSen = sentence.split(" ");
	for (i = 0; i < splitSen.length; i++) {
		if (splitSen[i].toLowerCase() === "trains") {
			return splitSen[i];
		}
	}
}

console.log(getTrain("I dislike trains as a mode of transport"));

// ########################

function fifth(letters) {
	return letters[4];
}

console.log(fifth("abcdefghijklmnopqrstuvwxyz"));

// ##################
function upper(word) {
	return word.toUpperCase();
}

console.log(upper("I love you"));

// Using the inbuilt number methods only

// 1

function decimalPlace(num) {
	return num.toFixed(2);
}

console.log(decimalPlace(1.23456789));

// 2

function toStr(str) {
	return Number(str);
}

console.log(toStr("342423"));

// Using the inbuilt array methods only

//1

function firstAndLast(arr) {
	// return arr.slice(0, 1) + arr.pop();
	return arr.shift() + " " + arr.pop();
}

const colors = ["red", "yellow", "green", "blue"];

console.log(firstAndLast(colors));

// 2

function addToArray(arr, value) {
	arr.push(value);
	return arr;
}

const moreColors = ["red", "yellow", "green", "blue"];

console.log(addToArray(moreColors, "orange"));

// 3

function thirdElement(arr) {
	return console.log(arr[2]);
}

const evenMoreColor = ["red", "yellow", "green", "blue"];

thirdElement(evenMoreColor);

// 4

const min = (arr) => {
	return Math.min(...arr);
};

const numArr = [23123, 2, -328, 0];

console.log(min(numArr));

// #################

function travel(country,flightLength,home="England"){
    const startJourney = "London"
    return `I started my journey in ${startJourney} and I flew from ${home} and it took me ${flightLength} to get to ${country}.`
}

console.log(travel('Portugal','4 hours'))
