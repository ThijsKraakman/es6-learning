function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));
