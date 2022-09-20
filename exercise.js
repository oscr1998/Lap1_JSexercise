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

// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

/* another <change className=""></change> */
