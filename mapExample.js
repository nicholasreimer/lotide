//The array of numbers should be the length of each name in the lighthouses.

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const map1 = lighthouses.map(x => x.length)

console.log(map1)

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

// Arrow Function syntax for Map
// x => x * 2
// (x) => { return (x * 2); }