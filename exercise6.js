//exercise 6 soal no. 1

var deret = 2;
var pernyataan = 'I love coding';
var pernyataan2 = 'I will become fullstack developer';

{
  console.log('LOOPING PERTAMA');
}
while(deret < 21) {
  console.log(deret + '-' + pernyataan );
  deret++;
}

{
  console.log('LOOPING KEDUA')
}
while(deret > 0) {
  console.log(deret + '-' + pernyataan2);
  deret--;

}

//soal exercise 6 : soal No. 2.
/*
var deret = 0;
var pernyataan = 'I love coding';
var pernyataan2 = 'I will become fullstack developer';

{
  console.log('LOOPING PERTAMA');
  }
for(var deret = 2; deret < 22; deret += 2) {
console.log(deret  + '-' + pernyataan);
}



{
  console.log('LOOPING KEDUA');
  }
for(var deret = 20; deret > 0; deret -= 2) {
  console.log(deret + '-' + pernyataan2);
}
*/

/*
//exercise 6 soal no. 3 //

var Counter = 0;
var CekCounter1 = 'ganjil';
var CekCounter2 = 'genap';

for(var Counter = 1; Counter < 101; Counter += 1) {
  console.log('Counter sekarang :' + Counter);
}
console.log(Counter);
