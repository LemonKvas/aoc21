const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

const lines = syncReadFile('input.txt');

let numbers = [];

lines.forEach((line) => {
    const arr = line.split(" ");

    arr.forEach((number) => {
        if (number != '') {
            numbers.push(number);
        }
    })
})


const row = [83, 69, 34, 46, 30, 23, 19, 75, 22, 37, 89, 78, 32, 39, 11, 44, 95, 43, 26, 48, 84, 53, 94, 88, 18, 40, 62, 35, 27, 42, 15, 2, 91, 20, 4, 64, 99, 71, 54, 97, 52, 36, 28, 7, 74, 45, 70, 86, 98, 1, 61, 50, 68, 6, 77, 8, 57, 47, 51, 72, 65, 3, 49, 24, 79, 13, 17, 92, 41, 80, 63, 67, 82, 90, 55, 0, 10, 93, 38, 21, 59, 73, 33, 31, 9, 76, 5, 66, 16, 58, 85, 87, 12, 29, 25, 14, 96, 56, 60, 81];

console.log(row)

console.log(numbers)

// Part 1


// Part 2

