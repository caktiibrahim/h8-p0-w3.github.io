function angkaPalindrome(num) {
  for(i = 0; i < num ; i++){
    num++;

    var angkatStr = String(num); // menjadikan angka ke string
    var tampungAngka = '';

    for(j = (angkatStr.length-1); j >= 0; j--){
      tampungAngka = tampungAngka + angkatStr[j];
    } 
    if(angkatStr === tampungAngka){
     return num  
    }
  }
  
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001