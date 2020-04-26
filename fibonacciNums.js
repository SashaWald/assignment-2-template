  
const fibonacciNums = (n) => {
    let fibonacci = [0,1]
    if (n === 0){
        return []
    }
    else if (n === 1){
        return [0]
    }
    else if (n === 2){
        return fibonacci
    }
    else{
        for (i = 2; i < n; i++){
            fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
        }
        return fibonacci
    }    
};

module.exports = fibonacciNums;
