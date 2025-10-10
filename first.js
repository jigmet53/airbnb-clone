console.log("Kg codding is the best");

const fs= require('fs');
fs.writeFile('output.txt',"Writing my first file", (err)=>
{if(err)console.log('Error')
else console.log('File successfully written')})