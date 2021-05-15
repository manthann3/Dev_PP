let fs = require("fs");

//-s

let fileKaData = fs.readFileSync("../f1.txt");
fileKaData += "";

// -s flag
//==========

// function removeLargeSpaces() {
//   let afterSplit = fileKaData.split("\n\r");
//   console.log(afterSplit);

//   let afterSpaceRemoval = [];

//     for(let i=0; i<afterSplit.length;i++){
//         if(afterSplit[i] == ''){
//             continue;
//         }else{
//             afterSpaceRemoval.push(afterSplit[i]);
//         }

//     }
// for(let i=0;i<afterSpaceRemoval.length;i++)
// console.log(afterSpaceRemoval[i]);
// }

// removeLargeSpaces();



// -b flag
//==========

// function addLineNumberToNonEmptyLines() {
//   let afterSplit = fileKaData.split("\r\n");
//   console.log(afterSplit);
//   let count = 0;
//   let afterAddingNumber = [];
//   for (let i = 0; i < afterSplit.length; i++) {
//     //   afterAddingNumber.push(afterSplit[i]);
//     if(afterSplit[i].startsWith("\n")){
//         count++;
//         afterAddingNumber.push("\n");
//         afterAddingNumber.push(count+". "+afterSplit[i].substring(1));
//     }else if(afterSplit[i] == ''){
//         afterAddingNumber.push('\r');
//     }else{
//         count++;
//         afterAddingNumber.push(count+". "+afterSplit[i]);
//     }

//   }

//   console.log(afterAddingNumber)
//   for(let i = 0; i< afterAddingNumber.length;i++)
//   console.log(afterAddingNumber[i]);

// }
// addLineNumberToNonEmptyLines();




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
  addLineNumberToAllEmptyLines();
  