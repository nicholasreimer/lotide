/* INSTRUCTIONS:
-This function should take in a collection of items and return counts for a specific subset of those items. 
-it will also be given an idea of which items we care about and it will only count those, ignoring the others.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🔴 Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  let results = {}

  for (const item of allItems) {

    if (itemsToCount[item]) {

      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);


