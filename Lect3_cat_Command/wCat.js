#!/usr/bin/env node                       

// console.log(process.argv);
let content = process.argv.splice(2);
let fs = require("fs");

let flags = [];
let files = [];

for (let i = 0; i < content.length; i++) {
  if (content[i].startsWith("-")) flags.push(content[i]);
  else files.push(content[i]);
}

// for files
let fileKaData = "";

for(let i=0; i<files.length;i++){
    fileKaData += fs.readFileSync(files[i]);
    fileKaData+="\r\n";
}

console.log(fileKaData);


// -s flag
//==========

function removeLargeSpaces() {
  let afterSplit = fileKaData.split("\r\n");
  console.log(afterSplit);

  let afterSpaceRemoval = [];

    for(let i=0; i<afterSplit.length;i++){
        if(i!= 0 && afterSplit[i] == '' && afterSplit[i-1] == '' ){
            continue;
        }else{
            afterSpaceRemoval.push(afterSplit[i]);
        }

    }
for(let i=0;i<afterSpaceRemoval.length;i++)
console.log(afterSpaceRemoval[i]);
}


if(flags.includes("-s"))
removeLargeSpaces();

// -n flag
//==========


function addLineNumberToAllEmptyLines() {
  let afterSplit = fileKaData.split("\r\n");
  console.log(afterSplit);
  let count = 0;
  let afterAddingNumber = [];
  for (let i = 0; i < afterSplit.length; i++) {
    //   afterAddingNumber.push(afterSplit[i]);
    if(afterSplit[i].startsWith("\n")){
        count++;
        afterAddingNumber.push("\n");
        afterAddingNumber.push(count+". "+afterSplit[i].substring(1));
    }else if(afterSplit[i] == ''){
        count++;
        afterAddingNumber.push(count+". "+'\r');
    }else{
        count++;
        afterAddingNumber.push(count+". "+afterSplit[i]);
    }

  }

  console.log(afterAddingNumber)
  for(let i = 0; i< afterAddingNumber.length;i++)
  console.log(afterAddingNumber[i]);

}
if(flags.includes("-n"))
addLineNumberToAllEmptyLines();


// -b flag
// ==========

function addLineNumberToNonEmptyLines() {
  let afterSplit = fileKaData.split("\r\n");
  console.log(afterSplit);
  let count = 0;
  let afterAddingNumber = [];
  for (let i = 0; i < afterSplit.length; i++) {
    //   afterAddingNumber.push(afterSplit[i]);
    if(afterSplit[i].startsWith("\n")){
        count++;
        afterAddingNumber.push("\n");
        afterAddingNumber.push(count+". "+afterSplit[i].substring(1));
    }else if(afterSplit[i] == ''){
        afterAddingNumber.push('\r');
    }else{
        count++;
        afterAddingNumber.push(count+". "+afterSplit[i]);
    }

  }

  console.log(afterAddingNumber)
  for(let i = 0; i< afterAddingNumber.length;i++)
  console.log(afterAddingNumber[i]);

}
if(flags.includes("-b"))
addLineNumberToNonEmptyLines();

