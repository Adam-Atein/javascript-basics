
//Adam
var stringSize = function (text) {
    return text.length
}
var replaceCharacterE = function (text) {
    return text.replace('e', ' ')
}
var concatString = function (text1, text2) {
    return text1 + text2
}
var showChar5 = function (text) {
    return text.charAt(4)
}
var showChar9 = function (text) {
	return text.substring(0,9)
	 	
}
var toCapitals = function (text) {
    return text.toUpperCase()
}
var toLowerCase = function (text) {
    return text.toLowerCase()
}
var removeSpaces = function (text) {
    return text.trim()
}
var IsString = function (text) {
    return (typeof text === 'string');
}

var getExtension = function (text) {
    return text.split('.').pop()
}
var countSpaces = function (text) {
    return text.split(' ').length - 1
}
var InverseString = function (text) {

    //     let x = "";
    // for (let i = text.length - 1; i >= 0; i--) {
    //     x += text[i];
    // }
    // return x;
    return text.split("").reverse().join("");
}

var power = function (x, y) {
    return Math.pow(x, y)
}
var absoluteValue = function (num) {
    return Math.abs(num)
}
var absoluteValueArray = function (array) {
    let x = '';
    let z  = [];
    for (let i = 0; i < array.length; i++) {
        x = Math.abs(array[i])
        z .push(x)
    }
    return z 
}
var circleSurface = function (radius) {
    return Math.ceil(Math.PI * Math.pow(radius, 2))
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac) 
}
var BMI = function (weight, height) {
    return(parseFloat((weight / (height * height)).toFixed(2)))
}

var createLanguagesArray = function () {
    return ["Html", "CSS", "Java", "PHP"]
}

var createNumbersArray = function () {
    return [0,1,2,3,4,5]
}

var replaceElement = function (languages) {
	languages.splice(2,1,'Javascript')
	return languages
}

var addElement = function (languages) {
    languages.splice(5,0,'Ruby','Python')
	return languages	
}

var addNumberElement = function (numbers) {
    numbers.splice(0, 0, -2, -1);
    return numbers
}

var removeFirst = function (languages) {
    languages.shift();
    return languages
}

var removeLast = function (languages) {
    languages.pop();
    return languages
}

var convertStrToArr = function (social_arr) {
	return social_arr.split(',')
	 
}

var convertArrToStr = function (languages) {
    return languages.toString()
}

var sortArr = function (social_arr) {
    return social_arr.sort()
}

var invertArr = function (social_arr){
	return social_arr.reverse()
	 
}
