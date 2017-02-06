
function getRandomwords(){
	var random = words[Math.floor(Math.random()*words.length)];
    var first = random.charAt(0);
    //document.getElementById("first").innerHTML = first;
    console.log(random);
    console.log(first);
}
getRandomwords();


//function wordCheck(){
   // var wordInput = document.getElementById("wordInput").value;
    //console.log(wordInput);
       // for (i = 0; i < wordInput.length; i++){
       ///     if(wordInput.charAt(i));
    //    console.log(wordInput.charAt(i));
   // }
//}
//wordCheck();

