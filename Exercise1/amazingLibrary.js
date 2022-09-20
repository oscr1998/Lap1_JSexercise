function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        console.log(sum)
    }
    return sum
}

module.exports={sumOfArray}
