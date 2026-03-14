console.log(2 > 1);  // true
console.log("2" > 1); // true (JS converts "2" to 2)
console.log("02" > 1); // true
console.log(null > 0);   // false (0 > 0 is false)
console.log(null == 0);  // false (Equality check doesn't convert null to 0)
console.log(null >= 0);  // true  (Comparison converts null to 0, so 0 >= 0 is true)

console.log(undefined == 0); // false (undefined is never converted to 0)
console.log(undefined > 0);  // false