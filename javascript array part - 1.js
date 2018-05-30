function balikString(kata) {
    var kalimat = '';
    for (var i = kata.length-1; i >= 0; i--) {
      kalimat = kalimat + kata[i];
    }
    
    return kalimat;
  }
  console.log(balikString('hello world!'))