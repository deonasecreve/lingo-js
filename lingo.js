var word = getRandomWords();
var word_split = word.split("");
var count = 1;
var correctLetter= 1;

function getRandomWords() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    return randomWord;
}

function wordCheck() {
    if (count == 6 ) {
        alert("stop, de beurten zijn op");
        resetLingo();
        getRandomWords();
        firstLetterLoading();
        return;
    }
    var wordInput = document.getElementById("wordInput").value;
    var letterInput = wordInput.split("");
    for (i = 0; i < 5; i++) {
        console.log(letterInput[i] + "=" + wordInput[i]);
        placeInputLetters(i, letterInput[i]);
    if (word_split[i] === letterInput[i]){
        document.getElementById(correctLetter).style.background = "red";
    }
    else if(word_split.includes(letterInput[i])){
        document.getElementById(correctLetter).style.background = "yellow";
        }
    correctLetter++
    }

setTimeout(function(){ 
    if(word === wordInput){
        alert("stop, de beurten zijn op");
        resetLingo();
            }
        }, 1000); 
    count++
}

function firstLetterLoading() {
    var firstLetter = document.getElementsByClassName("row1")[0].children;
    console.log(word_split[0]);
    firstLetter[0].innerHTML = "<div class='first letter'>" + word_split[0] + "</div";
    return firstLetterLoading;
}
firstLetterLoading();

function placeInputLetters(pos, letter) {
    var firstLetter = document.getElementsByClassName("row" + count)[0].children;
    firstLetter[pos].innerHTML = "<div class='first letter'>" + letter + "</div";
}

function resetLingo(){
    for (i = 1; i < 26; i++){
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.background = "white";
        document.getElementsByClassName("row1")[0].children;
    }
    count = 1;
}

