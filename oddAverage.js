// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//         }
//         let sum = 0;
//         for (const number of odds) {
//             sum = sum + number;
//         }
//         const count = odds.length;
//     }
 
// }

// const numbers = [2, 35, 3, 545, 22, 54, 28, 36];
// const avg = oddAverage(numbers);
// console.log(avg);

// there is an error in this code

function oddAverage(numbers) {
    let sum = 0;
    let count = 0;

    for (const number of numbers) {
        if (Math.abs(number) % 2 === 1) { // Ensuring it works for negative numbers too
            sum += number;
            count++;
        }
    }

    return count === 0 ? 0 : sum / count; // Handling case where no odd numbers exist
}

const numbers = [2, 35, 3, 545, 22, 54, 28, 36];
const avg = oddAverage(numbers);
console.log(avg);
