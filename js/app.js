// let val = Math.floor(Math.random() * 20);
// console.log(val);

let riddle = {};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function PlayGame() {
    let num1 = randomNumber(20, 50);
    let num2 = randomNumber(20, 50);
    let result = num1 + num2;



    let resultsArray = generateRandomOption(result);
    resultsArray.push(result);
    riddle = {
        num1: num1,
        num2: num2,
        resultsArray: resultsArray,
        answer: result
    };

    console.log(resultsArray);

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    document.getElementById('option1').innerHTML = riddle.resultsArray[0];
    document.getElementById('option2').innerHTML = riddle.resultsArray[1];
    document.getElementById('option3').innerHTML = riddle.resultsArray[2];
    document.getElementById('option4').innerHTML = riddle.resultsArray[3];
}


function generateRandomOption(sum) {
    let resultsArray = [];
    let randomNumberArray = [];

    while (randomNumberArray.length < 3) {
        let random = randomNumber(1, 10);
        if (randomNumberArray.indexOf(random) > -1) continue;
        randomNumberArray.push(random);

    }

    for (let i = 0; i < 3; i++) {
        let addSubtract = randomNumber(0, 1);
        let result = sum;

        if (addSubtract === 1) {
            //add random number to the result
            result += randomNumberArray[i];
        } else {
            //Subtract random number  from the result
            result -= randomNumberArray[i];
        }
        resultsArray.push(result);
    }

    return resultsArray;


}