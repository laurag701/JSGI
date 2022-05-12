let average = [ 4, 5, 6, 7, 0, 1, 2];
average.length = 30;
average[34] = 40;

let count = 0;
let total = 0;

for (let i = 0; i < average.length; i++) {
    if(average[i] !== undefined) {
        count++;
        total += average[i];
    }
}

let avg = total / count;
console.log(avg);
