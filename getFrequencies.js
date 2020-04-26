const getFrequencies = (arr) => {
    let frequencies = {}
    for (i = 0; i < arr.length; i++){
        if(arr[i] in frequencies){
            frequencies[arr[i]]++;
        }
        else{
            frequencies[arr[i]]=1;
        }
    }
    return frequencies
};
module.exports = getFrequencies;
