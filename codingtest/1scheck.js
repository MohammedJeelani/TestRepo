// Consecutive 1s check //

let newNumArray= [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]
let consecutiveOnes = (newNumArray = []) => {
        let maximum = 0;
        let largestCount = 0;
        let currentCount = 0;
    while(currentCount < newNumArray.length) {
        if(newNumArray[currentCount] === 0) {
            if (currentCount - largestCount > maximum){
                maximum = currentCount - largestCount
            };
            currentCount++;
            largestCount = currentCount;
        }   else {
            currentCount++;
        };
    };
    return currentCount - largestCount > maximum ? currentCount - largestCount : maximum;

} 
    console.log(consecutiveOnes(newNumArray))