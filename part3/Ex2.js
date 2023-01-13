
//1 - toString() :
// - returns a string with array values separated by commas
const fruits = ["Apple,orange"]; 
let text = fruits.toString() 
console.log(text)


//2 - valueOf() :  
// - method returns the array itself.

const fruits1 = ["Apple,orange"];
const myArray = fruits1.valueOf(); 
console.log(myArray)


//3 -concat() :
// - Joins arrays and returns an array with the joined arrays
const p1fruits = ["Apple,orange"];
const p2fruits = ["Apple,orange,Gwava"];
const allfruits = p1fruits.concat(p2fruits);
console.log(allfruits)


//4 - shift() :  
// - method returns selected elements in an array, as a new array.
const fruits2 = ["Banana", "Orange", "Apple"];
fruits2.shift("Lemon","Pineapple","gwava"); //output Array [Orange,Apple,Mango]

//5 - unshift() :  
// - method adds new elements to the beginning of an array.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon","Pineapple"); 

//6 - slice() :
// - method returns selected elements in an array, as a new array.
const fruits4 = ["Banana", "Orange", "Lemon", "coconut", "figs"];
const citrus4 = fruits.slice(1, 3); 



//7 - sort() :
// - sorts the elements of an array.
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.sort(); 


//8 - copyWithin() :
// -Copies array elements within the array, to and from specified positions
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.copyWithin(); 


//9 - push() :
// - method adds new items to the end of an array.
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.push("Kiwi", "Lemon"); 


//10 - array.from :
// -method returns an array from any object with a length property.

var fruits8=Array.from("Banana Orange Apple Mango figs coconut")
console.log(fruits8)