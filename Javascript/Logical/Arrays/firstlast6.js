function match(a ,b ) {

    if(a[0]==b[0] || a[a.length-1]==b[b.length-1]){
        return true;
    }
    else{
        return false;
    }
}


let a = [1,2,3,6,4,5]
let b = [4,2,3,4,5,5]

console.log(match(a, b));
