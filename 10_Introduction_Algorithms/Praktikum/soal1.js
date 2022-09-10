const prime = (angka) => {
    let pembagi = 0;
    for( i = 1; i <= angka; i++){
      if (angka % i == 0){
        pembagi++
      }
    }
    if (pembagi == 2){
      console.log("Bilangan Prima")
    } else {
      console.log("Bukan Bilangan Prima")
    }
  }
  
  prime(3) //Bilangan Prima
  prime(7) //Bilangan Prima
  prime(10) //Bukan Bilangan Prima
  