/* Write a loop that makes seven calls to console.log to 
output the following triangle:

#
##
###
####
#####
######
#######

*/

let str = '';
for(let count = 1; count <= 7; count++){
  str += '#';
  //console.log(str);
}


// Or print stars

function printStar(n){
    for(let i = 0; i <= n; i++){
    let str = '';
        for(let x = 0; x <= i; x++){
            str += '#';
        }
        //console.log(str)
    }
}

//printStar(7);

let str = '';
let spacesCount = 0;
let hash = 1;
let rows = 4;

for (let count = 1; count <= rows; count++){
    spacesCount = rows - count;
    str = ''.repeat(spacesCount) + '#'.repeat(hash);
    hash += 2;
    console.log(str);
}