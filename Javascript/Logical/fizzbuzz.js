function fizzbuzz(a) {
    if(a%3==0 & a%5==0){
        console.log("FizzBuzz");
    }
    else if(a%3==0 || a%5==0){
        console.log("Fizz");
    }
    else{
        console.log(a+'!');
    }
}

fizzbuzz(10);


