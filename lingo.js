var randomWord;
var word_split;
var count = 1;
var correctLetter = 1;

function getRandomWords() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word_split = randomWord.split("");
    console.log(randomWord);
    return randomWord;
}
getRandomWords();

function wordCheck() {
    setTimeout(function(){ 
    if(randomWord === wordInput){
        alert("Het woord is goed geraden!");
        resetLingo();
        return;
            }
        }, 1000); 

setTimeout(function(){ 
    if(count === 6){
        alert("stop, de beurten zijn op");
        resetLingo();
        return;
            }
        }, 1000);

    var correctLetter = 1;
    var wordInput = document.getElementById("wordInput").value;
    var letterInput = wordInput.split("");
    for (i = 0; i < 5; i++) {
        console.log(letterInput[i] + "=" + wordInput[i]);
        placeInputLetters(i, letterInput[i]);
        if (word_split[i] === letterInput[i]){
            document.getElementById(count.toString() + correctLetter).style.background = "red";
        }
        else if(word_split.includes(letterInput[i])){
            document.getElementById(count.toString() + correctLetter).style.background = "yellow";
        }
        correctLetter++
    }
    count++
	document.getElementById("wordInput").value = "";
	document.getElementById("wordInput").select();
}
 
function firstLetterLoading() {
    var firstLetter = document.getElementsByClassName("row1")[0].children;
    firstLetter[0].innerHTML = "<div class='first letter'>" + word_split[0] + "</div";
}
firstLetterLoading();

function placeInputLetters(pos, letter) {
    var firstLetter = document.getElementsByClassName("row" + count)[0].children;
    firstLetter[pos].innerHTML = "<div class='first letter'>" + letter + "</div";
}

function resetLingo(){
    
    for (i = 11; i < 55; i++){
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.background = "white";
    }
    count = 1;
    getRandomWords();
    firstLetterLoading();
}



