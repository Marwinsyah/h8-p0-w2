//exercise : 11




function balikKata(kata) {
  var tampung = '';
  for(var i = kata.length-1; i >= 0; i--) {
     tampung = tampung + kata[i];
       }
 return tampung; // you can only write your code here!
}

// TEST CASES
console.log(balikKata('Hello world and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
