const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

let lines = syncReadFile('input.txt');

// console.log(lines)
// Part 1

let gamma = '';
let epsilon = '';

//
for (let i = 0; i < 12; i++) {
    let zero = 0;
    let one = 0;

    for (let j = 0; j < lines.length; j++) {
        if (lines[j].split("")[i] === "0") {
            zero += 1;
        } else {
            one += 1;
        }
    }

    if (zero > one) {
        gamma = gamma + "0";
        epsilon = epsilon + "1";
    } else {
        gamma = gamma + "1";
        epsilon = epsilon + "0";
    }

}

let gammaDec = BigInt(parseInt(gamma, 2));
let epsilonDec = BigInt(parseInt(epsilon, 2));
let res = BigInt(gammaDec * epsilonDec);
// console.log(epsilonDec)
// console.log(epsilon)
// console.log(gamma)
// console.log(gammaDec)
console.log('res:')
console.log(res)

// Part 2


function filter(arr, pos, number, lever) {
    let filteredArr;
    if (pos === -1) {
        filteredArr = arr;
    } else {
        filteredArr = arr.filter(el => el.split('')[pos] == number);
    }

    if (filteredArr.length === 1) {
        console.log(filteredArr[0])
        return filteredArr[0];
    }

    let zero = 0;
    let one = 0;

    for (let j = 0; j < filteredArr.length; j++) {
        if (filteredArr[j].split("")[pos + 1] === "0") {
            zero += 1;
        } else {
            one += 1;
        }
    }

    //oxygen
    if (lever) {
        if (zero > one) {
            number = '0';
        } else {
            number = '1';
        }
    } else { //scrubber
        if (zero <= one ) {
            number = '0';
        } else {
            number = '1';
        }
    }

    filter(filteredArr, pos + 1, number, lever);
}


let oxygen = filter(lines, -1, '1', true);
console.log(oxygen)
let scrubber = filter(lines, -1, '1', false);
console.log(scrubber)
