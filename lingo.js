
function getRandomwords(){
	var randomword = words[Math.floor(Math.random()*words.length)];
    console.log(randomword);
    return randomword;
}

var word = getRandomwords();
var word_split = word.split("");
var count = 1;


function wordCheck(){
   var wordInput = document.getElementById("wordInput").value;
   var letterInput = wordInput.split("");
    for (i = 0; i < 5; i++){
        if(letterInput[i] === wordInput[i]){
            console.log(letterInput[i] + "=" + wordInput[i]);
        }
    }
}
wordCheck();

function Loading(){
    var firstLetter = document.getElementsByClassName("row1")[0].children;
    console.log(word_split[0]);
firstLetter[0].innerHTML = "<div class='first letter'>" + word_split[0] + "</div";
}
Loading()
