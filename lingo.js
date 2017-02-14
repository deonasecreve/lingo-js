var word = getRandomwords();
var word_split = word.split("");
var count = 1;

function getRandomwords() {
    var randomword = words[Math.floor(Math.random() * words.length)];
    console.log(randomword);
    return randomword;
}

function wordCheck() {
    if (count == 6 ) {
        alert("stop, de beurten zijn op");
        resetLingo();
        getRandomwords();
        return;
    }
    var wordInput = document.getElementById("wordInput").value;
    var letterInput = wordInput.split("");
    for (i = 0; i < 5; i++) {
        console.log(letterInput[i] + "=" + wordInput[i]);
        placeInputLetters(i, letterInput[i]);
    if (word_split[i] === letterInput[i]){
        document.getElementById("")
        }
    }
    count++
}

function firstLetterLoading() {
    var firstLetter = document.getElementsByClassName("row1")[0].children;
    console.log(word_split[0]);
    firstLetter[0].innerHTML = "<div class='first letter'>" + word_split[0] + "</div";
}
firstLetterLoading();

function placeInputLetters(pos, letter) {
    var firstLetter = document.getElementsByClassName("row" + count)[0].children;
    firstLetter[pos].innerHTML = "<div class='first letter'>" + letter + "</div";
}

function resetLingo(){
    for (i = 1; i < 26; i++){
        document.getElementById(i).innerHTML = '';
    }
}

