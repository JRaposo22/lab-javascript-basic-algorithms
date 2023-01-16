// Iteration 1: Names and Input

let hacker1 = "Joao";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Joao2";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}

// Iteration 3: Loops

let hacker1Upper = "";

for (let i = 0; i < hacker1.length; i++) {
hacker1Upper += hacker1[i].toUpperCase();
if (i < hacker1.length - 1) {
    hacker1Upper += " ";
}
}
console.log(hacker1Upper);

let hacker2Reversed = "";

for (i = hacker2.length -1; i >= 0; i--){
    hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) == -1) {
console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus1

let longText = "Lorem et ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis erat in aliquam consectetur. Aenean lorem dolor, pharetra id dignissim non, pellentesque rutrum est. Cras gravida vestibulum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In in enim eu libero vehicula sodales eu in ante. Donec a magna ut ligula imperdiet tincidunt. Curabitur ac nulla porttitor, condimentum velit ut, varius massa. Fusce dapibus eleifend aliquet. Phasellus condimentum mollis rhoncus. Praesent fringilla, purus vel posuere fringilla, neque purus sagittis tortor, sit amet consectetur sem elit vel tortor. Praesent pharetra volutpat gravida. Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum  ipsumLorem ipsumLorem . \n Lorem ipsum. Lorem ipsumLorem ipsumLorem ipsum. \n Lorem ipsum. Lorem ipsumLorem ipsumLorem ipsum.";


let count = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== " " && longText[i + 1] == " " || i == longText.length -1 && longText[i -1] !== " ") {
        count++;
    }
}
console.log(count);


let wordCount = 0;
let etWord = " et ";

for (let i = 0; i < longText.length; i++) {
    let spliceString = longText.slice(i, i + 4);
    if (spliceString == etWord) {
        wordCount++;
    }
}
console.log(wordCount);

// Bonus2

let phraseToCheck = "Amor roma";

function palincheck (phrase) {
    phrase = phrase.toLowerCase();
    phrase = phrase.replace(/[^a-zA-Z0-9]/g, '');
    let phraseReversed = "";
    for (i = phrase.length - 1; i >= 0; i--) {
        phraseReversed += phrase[i];
    }
    if (phrase == phraseReversed) {
        console.log("This phrase is a palindrome.")
    } else {
        console.log("This phrase is not a palindrome.")
    }
}

palincheck(phraseToCheck);