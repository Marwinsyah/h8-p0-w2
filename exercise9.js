/*

Exercise 9. Soal No. 1 //
 BUATLAH KODE FUNCTION DISINI
*/

/*
function shoutOut(){
var shoutOut = "Halo Function!";
console.log(shoutOut); // Menampilkan "Halo Function!" di console
}
shoutOut();


//soal No. 2//
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);

function calculateMultiply() {
  hasilPerkalian = num1 * num2;
console.log(hasilPerkalian); // Menampilkan angka 30
}
calculateMultiply();
*/

//soal No. 3//
/*Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
*/


var name = 'Agus';
var age= 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming!";


function processSentence(){
 console.log('Nama saya' + ' ' + name + ', ' + 'umur saya' + ' '  + age + ' ' + 'tahun ,' +  'alamat saya' + ' ' + address + ', ' + 'dan saya punya hobby yaitu' + ' ' + hobby);
}
 processSentence();
