let array1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let array2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let array3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let array4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let array5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var arrayofarrays = [array1, array2, array3, array4, array5];
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton = document.querySelector('button');

let string1; let string2; let string3; let string4; let string5; let storystring="";

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function speakstory(string) {



    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

document.getElementById("1").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array1.length);
    string1 = array1[randomindex];
    document.getElementById("area1").value = string1;
    console.log(string1);
});

document.getElementById("2").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array2.length);
    string2 = array2[randomindex];
    document.getElementById("area2").value = string2;
    console.log(string2);
});

document.getElementById("3").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array3.length);
    string3 = array3[randomindex];
    document.getElementById("area3").value = string3;
    console.log(string3);
});

document.getElementById("4").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array4.length);
    string4 = array4[randomindex];
    document.getElementById("area4").value = string4;
    console.log(string4);
});

document.getElementById("5").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array5.length);
    string5 = array5[randomindex];
    document.getElementById("area5").value = string5;
    console.log(string5);
});

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById("speak").addEventListener("click", function() {
    addedstring = combine(string1, string2, string3, string4, string5);
    console.log(addedstring);
    document.getElementById("area").value = addedstring;
    speakNow(addedstring);
}
);
// Function to add each 5 different strings
function combine(string1, string2, string3, string4, string5) {
    console.log("combine " + string1);
    let newstring = string1 + " " + string2 + " " + string3 + " " + string4 + " " + string5;
    console.log(newstring);
    return newstring;
}


// Event listener for generating the full story
document.getElementById("story").addEventListener("click", function() {
    storystring = "";
    for (let i = 0; i <= 50; i++) {
        for (let j = 0; j < arrayofarrays.length; j++) {
            let randomindex = Math.floor(Math.random() * arrayofarrays[j].length);
            storystring += arrayofarrays[j][randomindex] + " ";
        }
        if (storystring.endsWith(" ")) {
            storystring = storystring.trim() + ". ";
        }
    }
    document.getElementById("storyarea").value = storystring;
    console.log(storystring);
});

document.getElementById("speakstory").addEventListener("click", function()
{
	speakstory(storystring);
});

document.getElementById("stopspeaking").addEventListener("click", function()
{
	synth.cancel();
}
);

  