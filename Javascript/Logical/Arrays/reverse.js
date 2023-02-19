let a = [1,2,3,4,5]
let b = []
let c = []
let d = []

let i=0


console.log("No Methods");
for (let index = a.length-1; index >=0; index--) {
    b[i]= a[index]
    i++
}
console.log(b);


console.log("Using push()");
for (let index = a.length-1; index >=0; index--) {
    c.push(a[index])
}
console.log(c);


console.log("Using unshit()");
for (let index = 0; index < a.length; index++) {
    d.unshift(a[index]);
}
console.log(d);