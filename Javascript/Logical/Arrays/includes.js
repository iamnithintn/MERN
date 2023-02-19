let b = 7;
let a = [1, 2, 7, 3, 5]
flag = false;

function incl(a, b) {
    for (let index = 0; index < a.length; index++) {
        if (b == a[index]) {
            flag = true
            return flag
            break
        }
        return flag
    }
}

console.log(incl(a, b));