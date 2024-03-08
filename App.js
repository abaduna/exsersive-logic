function oparation(n, m, operation) {
    if (operation.toLocaleLowerCase() === "add") {
        return n + m;
    }
    if (operation.toLocaleLowerCase() === "subtract") {
        return n - m;
    }
    if (operation.toLocaleLowerCase() === "multiply") {
        return n * m;
    }
    if (operation.toLocaleLowerCase() === "divide") {
        return n / m;
    }
    return "not oparation valid";
}
console.log(oparation(5, 5, "add"));
console.log(oparation(5, 5, "subtract"));
console.log(oparation(5, 5, "multiply"));
console.log(oparation(5, 5, "divide"));
