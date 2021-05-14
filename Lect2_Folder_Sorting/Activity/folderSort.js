// THIS CODE IS WRITTEN BY ME FOR BETTER EXPLANATION SEE THE CODE BY SIR

const fs = require("fs");
const path = require("path");
// let folderPath = "./Downloads";
let extensions = require("./util");


function makeAfolder(dir){
    fs.mkdirSync(dir);
}


function alreadyHaveAFolder(ext,folderPath){
    let folderName    
        for(let key in extensions){
            if(extensions[key].includes(ext))
            folderName = key;
        }
        
    let dir = folderPath+"/"+folderName;
    if (fs.existsSync(dir)) {
        return folderName;
    }else{
        console.log("folder is made at "+ dir);
        makeAfolder(dir);
        return folderName;
        
    }
    

}

function moveToFolder(fileName, folderName,folderPath){
    let src = folderPath+"/"+fileName;
    let dest = folderPath+"/"+folderName+"/"+fileName
    // console.log(src);
    // console.log(dest);
    fs.copyFileSync(src,dest);
    console.log(fileName +" is added at " + dest);

    fs.unlinkSync(src)
}





function folderSort (folderPath) {
    
    // getting all the files in folder(Downloads in this case)
    let allFiles =  fs.readdirSync(folderPath);
    for(let i = 0 ;i < allFiles.length;i++){
        
        let isDirectory = fs.lstatSync(folderPath + "/"+ allFiles[i]).isDirectory();
        if(isDirectory){
          console.log("It is a folder");
          folderSort(folderPath + "/"+ allFiles[i]); //"./Downloads/Audio"
        }
        // ANSWER CODE
        let folderName = alreadyHaveAFolder(path.extname(allFiles[i]),folderPath)
        
            moveToFolder(allFiles[i],folderName,folderPath);
        
    }

}

folderSort("./Downloads");