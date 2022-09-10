const button = (N) => {
    let pembagi = 0;
    for ( i = 1; i <= N; i++) {
        if (N % i == 0) {
            pembagi++
        }
    }
    if (pembagi % 2 == 0) {
        console.log("lampu mati")
    } else {
        console.log("lampu menyala")
    }
}


button(5) //lampu mati
button(4) //lampu menyala


