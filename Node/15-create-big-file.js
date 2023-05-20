const { writeFileSync, write} = require('fs')
for (let i = 0; i <10000; I ++){ 
    writeFileSync('./content/big.txt', 'hellow world', i, { flag: 'a'})
}