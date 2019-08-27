function countSheep(num){

    for (let i = num; i > 0; i--){
        console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log("All sheep jumped over the fence")
}

countSheep(15)



function powerCalculator(int, exp){

    if(exp < 0){
        return 'exponent should be >= 0'
    }

    let result = int

    for(let i = 1; i < exp; i++){
        result *= int
    }

    return result
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -2))



function reverse(string){

    let result = ''
    let ticks = 0

    for(let i = string.length - 1; i >= 0; i--){

        ticks++

        result += string[i]

    }

    return {
        result,
        ticks};

}

console.log(reverse("reverse"))



function triangular(num){

    // T = (n)(n + 1) / 2.


    let result = 0;

    for(let i = 0; i <= num; i++){
        
        result += i

    }

    return result;

}

console.log(triangular(3))



function splitter(str, sep){

    let result = ''

    for(let i = 0; i < str.length; i++){

        if(str[i] !== sep){
            result += str[i]
        }
    }

    return result;
}

console.log(splitter("02/20/2020", "/"))



function fibonacci(num){

    // f(n) = f(n - 1) + f(n - 2)

    let fibArray = [0, 1];

    for (let i = 2; i < num + 1; i++){
        
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])

    }

    return fibArray[num]

}

console.log(fibonacci(7))



function factorial(num){

    let result = 1;

    for(let i = 2; i <= num; i++){
        
        result *= i

    }

    return result;

}

console.log(factorial(5))