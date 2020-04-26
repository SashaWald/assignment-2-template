const filterOdd = (arr) => {
    let onlyOdd = []
    onlyOdd = arr.filter((i) => i % 2 != 0);
    return onlyOdd
};
module.exports = filterOdd;
