let set = new Set([10]);
set.add(20).add(set.size);
console.log(set);

console.log([...set][set.size-1]);