// your notes here!
console.log("hello world!");



//var index = 0;
//for(index=0; index<101; index++){
//    if(index%3===0){
//        console.log(index);
//    }
//}


var sumFirstHundred = function () {
    var sum = 0;
    for (var index=0; index<101; index++){
        sum = sum+index;
    }
    return sum;
}

console.log(sumFirstHundred());


var largestDivisor = function(number){
    var result = 1;
    var current;
    for(current = 2; current<number; current++){
        if(number%current===0){
            result = current;
        }
    }
    return result;
}


var removeVowels = function (word) {
    if(typeof word !=="string"){
        throw "the input to removeVowels should be a string!";
    }
    var vowelArray = ['a','e','i','o','u'];
    var result = "";
    var index;
    for(index = 0; word.length; index++){
        if(!vowelArray.contains(word.charAt(index))){
            result = result + word.charAt(index);
        }
    }
}