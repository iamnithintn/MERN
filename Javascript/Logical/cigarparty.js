function sp(a,b) {
    if (a>=40 && b==true) {
        console.log("Sucessful");
    } else if(a>=40 && a<=60 && b==false){
        console.log("Sucessful");
    }
    else{
        console.log("Not Sucessful");
    }
}

sp(30,true)