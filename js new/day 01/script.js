const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}
let lines = syncReadFile('input.txt');

// Part 1
let a = 0;
for (let i = 0; i < lines.length; i++) {
    if (Number(lines[i+1]) > Number(lines[i])) {
        a += 1;
    }
}

console.log(a)

// Part 2
let b = 0;
for (let i = 0; i < lines.length - 3; i++) {
    if (Number(lines[i]) + Number(lines[i + 1]) + Number(lines[i + 2]) < Number(lines[i + 3]) + Number(lines[i + 1]) + Number(lines[i + 2])) {
        b += 1;
    }
}

console.log(b)
