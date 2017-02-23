var randomWord;
var randomWordLetters;
var poging = 1;
var radioButtons = document.getElementsByName('letterAantal');
var letterVanAantal;


function letterAantal() {
    for (var i= 0, length = radioButtons.length; i < length; i++){
        if (radioButtons[i].checked){
            letterVanAantal = radioButtons[i].value;
            console.log("letterVanAantal: " + letterVanAantal);
           break;
        }
    }
}

function tabelMaken(){
	for (i = 1; i < 6; i++) {
		var extraRij = document.createElement("TR");
		extraRij.id = i;
		document.getElementById("lingo-tabel").appendChild(extraRij);
		for (d = 1; d <= letterVanAantal; d++) {
            console.log(d);
			var extraLetter = document.createElement("TD");
			extraLetter.id = i + "." + d;
			document.getElementById(i).appendChild(extraLetter);
		}
	}
	getRandomWords();
	
	document.getElementById("letter").disabled = true;
}

function getRandomWords() {
    if (letterVanAantal == 5){
        randomWord = words_5[Math.floor(Math.random() * words_5.length)];
	
    } else if (letterVanAantal == 6) {
        randomWord = words_6[Math.floor(Math.random() * words_6.length)];
		
    } else if (letterVanAantal == 7){
        randomWord = words_7[Math.floor(Math.random() * words_7.length)];
		
    } else if (letterVanAantal == 8){
        randomWord = words_8[Math.floor(Math.random() * words_8.length)];
	
    }
    firstLetterLoading();
}

function wordCheck() {

    var wordInput = document.getElementById("wordInput").value;
    console.log('poging ' + poging.toString() + ' : ' + wordInput);
    var letterInput = wordInput.split('');
    
    if(randomWord == wordInput){
        alert("Het woord is goed geraden!");
        resetLingo();
        return;
     }
        
    if(poging === 6){
        alert("stop, de beurten zijn op");
        resetLingo();
        return;
    }
  
    randomWordLetters = randomWord.split("");    
    var voorkomendeLetters = randomWordLetters.slice(0);       // copy the arrow; make sure we don't screw up the next turn by erasing letters from randomWordLetters
    for (var i = 0; i < randomWordLetters.length; i++) {
        placeInputLetters(i, letterInput[i]);
        var search = poging.toString() + "." + (i + 1);
        var element = document.getElementById(search);

        if (letterInput[i] == randomWordLetters[i] ){
            element.style.background = "#861B1B";
        } else if (voorkomendeLetters.includes(letterInput[i]) ) {
            element.style.background = "#D7DF01";
            voorkomendeLetters.splice(voorkomendeLetters.indexOf(letterInput[i]), 1);
        }
    }

    document.getElementById("wordInput").value = "";
    document.getElementById("wordInput").select();

    poging++;
}
 
function firstLetterLoading() {
    console.log(randomWord);
    var letterAntwoord = randomWord.split("");
    document.getElementById("1.1").innerHTML = letterAntwoord[0].toUpperCase();
}


function placeInputLetters(pos, letter) {
    var firstLetter = document.getElementById(poging + "." + (pos + 1));
    console.log(firstLetter);
    firstLetter.innerHTML = "<div class='first letter'>" + letter + "</div";
}

function resetLingo(){
    document.getElementById("lingo-tabel").innerHTML = "";
    poging = 1;
    document.getElementById("letter").disabled = false;
}



