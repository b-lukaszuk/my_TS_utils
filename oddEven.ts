function isEven(someNum: number): boolean {
    return (someNum % 2) === 0;
}

function isOdd(someNum: number): boolean {
    return !isEven(someNum);
}

export { isEven, isOdd };
