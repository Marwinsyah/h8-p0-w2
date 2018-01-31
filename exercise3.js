
var nama = 'Nina';
var peran = 'Penyihir';

if(nama === '') {
  console.log("nama harus diisi")
} else if(peran === '') {
  console.log("Halo " + nama + ", pilih peranmu untuk memulai game");
}else if(peran=== 'Kesatria'){
  console.log('Selamat datang di dunia Proxitya, ' +nama);
  console.log('Halo Kesatria '+ nama + ' Kamu dapat menyerang dengan senjatamu !')
}else if(peran=== 'tabib') {
  console.log('Halo Tabib ' + nama + ' Kamu akan membantu temanmu yang terluka');
}else if(peran === 'Penyihir') {
  console.log('Halo Penyihir ' + nama + ' Ciptakan keajaiban yang membantu kemenanganmu !');
}


