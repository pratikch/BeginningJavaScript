// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (value) {
    var result = false;
    if(typeof value!== "string"){
        return false;
    }
    if (value.length > 1){
        result = false;
    }else {
        var charToCompare = value.charAt(0).toLowerCase();
        if(charToCompare === "a" || charToCompare ==="e" || charToCompare==="i" || charToCompare==="o" || charToCompare==="u"){
            result = true;
        }
    }
    return result;
};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (value) {
    var result = false;
    if(typeof value ==="string" && value.length ===1){
        if(value >="a" && value <="z"){   
            result = true;
        }
    }
        
    return result;
};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (input) {
    if(typeof input !=="number" || input<0){
        throw "not a positive number"
    }
    var sum = 0;
    for(var index=0; index<=input; index++){
        sum =sum+index;
    }
    return sum;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a, b) {
    
    if(typeof a !== "number" || typeof b!== "number"){
        throw "not a number we need numbers";
    }
    var result = 0;
    var start = a;
    var end = b;
    if(b<a){
        start = b;
        end = a;
    }
    
    for(var index=start; index<=end; index++){
        result = result+index;
    }
    
    return result;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (inputString) {
    if(typeof inputString!=="string"){
        throw "error";
    }
    var result = 0;
    for(var index=0; index<inputString.length; index++){
        if(isVowel(inputString.charAt(index))){
            result++;
        }
    }
    return result;
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (inputString) {
    if(typeof inputString!=="string"){
        throw "not a string c'mon";
    }
    var resultString = "";
    for(var index= inputString.length-1; index>=0; index--){
        resultString = resultString+inputString.charAt(index);
    }
    return resultString;
};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (value) {
    var result = true;
    
    if(typeof value !== "number"){
        return false;
    }
    
    if(value < 2){
        result = false;
    }else{
        for(var divisor = 2; divisor<value; divisor++){
            if(value%divisor === 0){
                result = false;
                break;
            }
        }
    }
    return result;
};


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (upperBound) {
    if(typeof upperBound!=="number"){
        throw "input number";
    }
    var result = 0;
    for(var index=2; index<=upperBound; index++){
        if(isPrime(index)){
            result = result+index;
        }
    }
    return result;
};


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (numOfPrimesToSum) {
    var result = 0;
    var count = 0;
    if(typeof numOfPrimesToSum!=="number" || numOfPrimesToSum<0){
        throw "not a valid number";
    }
    for(var index=0; count<numOfPrimesToSum;index++){

            if(isPrime(index)){
                result = result+index;
                count++;
            }
    }

    return result;
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function (value) {
    if(typeof value !=="string"){
        throw "exception";
    }
    var result = "";
    for(var index=0; index<value.length; index++){
        var charToCompare = value.charAt(index);
        if((value.charAt(index)>="A" && value.charAt(index)<="Z") || (value.charAt(index)>="a" && value.charAt(index)<="z")){
            result = result+value.charAt(index);
        }
    }
    return result;
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (value) {
    if(typeof value!=="string"){
        return false;
    }
    var simpleString = removeNonLetters(value).toLowerCase();
    var endIndex = simpleString.length -1;
    var palindrom = true;
    for(var index=0; index<=simpleString.length/2; index++){
        if(simpleString.charAt(index)!==simpleString.charAt(endIndex-index)){
            palindrom = false;
            break;
        }
    }
    return palindrom;
};
