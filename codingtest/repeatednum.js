// Repeated Numbers //
 
let givenArray = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 10];
let repeatedNums = [];

for (var i = 0; i < givenArray.length ; i++){
    if(givenArray[i] === givenArray[i + 1]){
        repeatedNums.push(givenArray[i])
    }
}
    console.log(repeatedNums)