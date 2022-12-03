const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

let lines = syncReadFile('input.txt');

// Part 1
let depth = 0;
let x = 0;

lines.forEach((direction) => {
    let arr = direction.split(' ');
    let val = Number(arr[1]);
    switch (arr[0]) {
        case 'forward':
            x += val;
            break;
        case 'down':
            depth += val;
            break;
        case 'up':
            depth -= val;
    }
})

console.log(depth * x);

// Part 2
depth = 0;
x = 0
let aim = 0;
lines.forEach((direction) => {
    let arr = direction.split(' ');
    let val = Number(arr[1]);
    switch (arr[0]) {
        case 'forward':
            x += val
            depth += aim * val;
            break;
        case 'down':
            aim += val;
            break;
        case 'up':
            aim -= val;
    }
})

console.log(depth * x);
