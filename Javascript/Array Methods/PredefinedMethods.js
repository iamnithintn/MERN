let a = [1,2,3,7,8,9]

//   Methods:-

//1. Push: Adds an element at the end of the array
a.push(10)
console.log(a);
console.log(a.push(11,12));  //this returns the length of the array after addition 
console.log(a);
console.log("1---------------\n");


//2. Pop: Removes an element from the end and return the lenght of the array
a.pop()
console.log(a);
console.log(a.pop());     //prints the removed element
console.log(a);
console.log("2---------------\n");



//3. Shift: Removes the 1st element
a.shift()
console.log(a); 
console.log(a.shift());
console.log(a);
console.log("3---------------\n");



//4. unshift(): adds elements to the 1st index and right shifts all elements by 1 or more index wrt number of new elements added
a.unshift(1)
console.log(a);
console.log(a.unshift(0,0.5));      
console.log(a);
console.log("4---------------\n");



//5. Splice(): add or remove elements from any index in the array
a.splice(1,2,34,35)  //deletes from index 1 and deletes 2 index after that and add 34 and 35 after deleting from index 1
console.log(a);
console.log("5---------------\n");


//6. Includes(): checks if a given input exists in the array or not (BOOLEAN)
console.log(a.includes(3));          //if exists == true, if not == false
console.log("6---------------\n");


//7. toString() and Join(): Converts an array to string
console.log(a.toString());              //simply converts to the string including the seperators ---> 0,34,35,3,7,8,9,10
console.log(a.join(''));                  // here we can specify the type of seperators  --->  03435378910
console.log("7---------------\n");


//8. Reverse(): to reverse an array
console.log(a.reverse());  //  [ 10,  9,  8, 7, 3, 35, 34, 0]
console.log("8---------------\n");


//9. Slice():     to extract a specific part of the array
console.log(a.slice(1,5));           //1-> start index, 5-> end index---> extracts everything from index 1 until index 3-1  -->[ 9, 8, 7, 3 ]
