let str = '';
let rows = 8;
let cols = 8;

for(let row = 1; row <= cols; row++){
    for(let col = 1; col <= cols; col++){
        const isRowOdd = row % 2 === 1;
        const isColOdd = col % 2 === 1;

        if((isRowOdd && isColOdd) || (!isRowOdd && !isColOdd)){
            str += ' ';
        }else{
            str += '#';
        }
    }
    str += '\n';
}

console.log(str)