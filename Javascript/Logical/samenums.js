function same(a,b,c) {
    
    if (a==b && b==c && a==c) {
        return 20;
    } else if(a==b || b==c || c==a){
       return 10;
    }
    else {
        return 0;
    }
}

console.log(same(2,1,3));