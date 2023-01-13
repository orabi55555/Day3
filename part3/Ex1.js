student={
    id:1,
    name:"ahmed orabi",
    grade:9
}  
var student1=new Object();  
student1.id=101;  
student1.name="Ravi Malik";  
student1.salary=20;  
//1
//Object.is() 
//This method determines whether two values are the same value.
console.log(Object.is(student,student1))

//2
//Object.assign()
//This method is used to copy enumerable and own properties from a source object to a target object
var student2=new Object();  
Object.assign(student2, student)  

//3
//Object.freeze()
//This method prevents existing properties from being removed
Object.freeze(student2);

//4
//object.array()
//This method returns an array of values.
var obj=Object.values(student1)  
console.log(obj)

//5
//object.seal()
//This method prevents new properties from being added and marks all existing properties as non-configurable.
Object.seal(student1)

//6
//object.getOwnPropertyDescriptor(obj, prop) 
//This method returns a property descriptor for the specified property of the specified object.

Object.getOwnPropertyDescriptor(student1, 'name');


//7
//Object.getPrototypeOf(object1) 
//This method returns the prototype of the specified object.
Object.getPrototypeOf(student1) 


//8
//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const me = Object.create(person);

//9
//The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    }})

//10
//The Object.isSealed() static method determines if an object is sealed.
console.log(Object.isSealed(object1));
