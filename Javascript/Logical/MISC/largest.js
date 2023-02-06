function hi(a , b) {
    if( a==b){
        return 0
    }
    else if(a%5 == b%5){
        return (a>b)?b:a;
    }
    else{
       return (a>b)?a:b;
    }
}

console.log(hi(10,5));