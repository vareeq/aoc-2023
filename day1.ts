import fs from 'fs';

const fileContent = fs.readFileSync('day1.input.txt', 'utf-8');

let calibrationValue = 0

for (const line of fileContent.split('\n')) {
    const numbers = []
    for (const char of line) {
        const parsedChar = parseInt(char)
        if (!Number.isNaN(parsedChar)) {
            numbers.push(parseInt(char))
        }
    }

    if (numbers.length === 0) {
        continue
    }
    
    const extractedVal = [numbers[0], numbers[numbers.length - 1]]
    const digits = `${extractedVal[0]}${extractedVal[1]}`
    const digitsInt = parseInt(digits)
    calibrationValue += digitsInt
}

console.log("sum of calibration values: ", calibrationValue)