// Generate a random number between 0 and a number
const randomNumberGenerator = num => {
    return Math.floor((Math.random() * num) + 1);
}

// An array of possible messages to be output to the user
let possibleMessages = [['best friend', 'worst enemy', 'soul mate'], ['happiness', 'wealth', 'status']];

// Print the messages to the user
const printOutput = () => {
    let randomSecondMessage = possibleMessages[0][randomNumberGenerator(possibleMessages[0].length)-1];
    let randomThirdMessage = possibleMessages[1][randomNumberGenerator(possibleMessages[1].length) - 1];

    let luckyNum = randomNumberGenerator(300);
    let secondMessageDays = randomNumberGenerator(10);
    let thirdMessageDays = randomNumberGenerator(30);

    let firstMessage = `Your lucky number is ${luckyNum}.`;
    let secondMessage = `You will find your ${randomSecondMessage} in ${secondMessageDays} days.`;
    let thirdMessage = `You will have an increase in ${randomThirdMessage} in ${thirdMessageDays}.`;

    console.log(firstMessage + '\n\n' + secondMessage + '\n\n' + thirdMessage);
}

printOutput();