function mulitiples(x) {
    let total = 0;
    for (let i = 0; i < x; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    console.log(total);
}