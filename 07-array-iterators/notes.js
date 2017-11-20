// your notes here!
console.log("hello world!");


var double = function(a){
    return a*2;
}

var doubleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(double);
console.log(doubleNumbers);


var range = function(limit){
    
    var result = [];
    for(var index=0; index<limit; index++){
        result.push(index);      
    }  
    return result;
};

range(100);

range(100).map(function(value){
    if(value%3===0 && value%5===0){
        return "fizzBuzz";
    }else if(value%3===0){
        return "FIZZ";
    } else if(value%5===0){
        return "Buzz";
    } else {
        return value;
    }
}).forEach(function(number){
    console.log(number);
});


var result = range(100).reduce(function(smallestSoFar, number){
    return smallestSoFar<number?smallestSoFar:number;
});

console.log(result);

result = [5, 6, 7, 0, 9, -1, -11, 79, 88, 44].reduce(function(smallestSoFar, number){
    return smallestSoFar<number?smallestSoFar:number;
});

console.log(result);

var capitalize = function (tweet) {
    return tweet[0].toUpperCase() + tweet.slice(1);
};

var paragraphify = function(tweets){
    return tweets.reduce(function (para, currentTweet){
      return para + capitalize(tweet) + ". ";  
    }, "");
}