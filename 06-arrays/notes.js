// your notes here!
console.log("hello world!");
var evenNumbers = [];
for(var index=0; index<10; index++){
    if(index%2===0){
        evenNumbers.push(index);
    }
}
console.log(evenNumbers);

var otherEvenNumbers = [];
for(var index=0; index<10; index+=2){
    otherEvenNumbers.push(index);
}
console.log(otherEvenNumbers);

var numbersUpto15 = [];
for(var i=0; i<15; i++){
    numbersUpto15.push(i);
}
console.log(numbersUpto15);



var largestNumber = function (values){
    var largest = values[0];
    for(var index=0; index<values.length; index++){
        if(values[index]>largest){
            largest = values[index];
        }
    }
    return largest;
};

var multipleOf3 = function (values){
    var result = [];
    for(var index=0; index<values.length; index++){
        if(values[index]%3===0){
            result.push(values[index]);
        }
    }
    return result;
};