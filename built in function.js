var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria' , "SMA Metro Lampung");
  console.log(input)

  var tanggal = input[3].split('/');
  var tanggalBaru =  [...tanggal]; //spreade operator
  var bulan = tanggal[1]
  var result = bulan // sebagai pengganti input bulan

  switch(bulan){ 
    case '01': result = 'Januari'; break;
    case '02': result = 'Februari'; break;
    case '03': result = 'Maret'; break;
    case '04': result = 'April'; break;
    case '05': result = 'Mei'; break;
  } 
  
  console.log(result)
  
    var date = tanggalBaru.sort(function(x,y){return y - x})
  console.log(date)

  console.log(tanggal.join('-'))


  var namaBaru = input[1].slice(0,15)
  console.log(namaBaru)

 
 
}

dataHandling2(input)
