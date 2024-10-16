let theNumber = 100020003000;
console.log(+([...new Set([...theNumber.toString()])].sort().reduce((a, b) => a + b).slice(1)));
