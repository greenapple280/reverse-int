module.exports = function reverse (n) {
        let numToStr = n + "";
        let strToArr = numToStr.split('').map(Number).reverse();
        let arrToStr = strToArr.join('');
        let strToNum = parseInt(arrToStr);
        return strToNum;
}