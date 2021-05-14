// THIS CODE IS WRITTEN BY ME FOR BETTER EXPLANATION SEE THE CODE BY SIR

const fs = require("fs");
const path = require("path");
let folderPath = "./Downloads";
let extensions = require("./util");


function makeAfolder(dir){
    fs.mkdirSync(dir);
}


function alreadyHaveAFolder(ext){
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

function moveToFolder(fileName, folderName){
    let src = folderPath+"/"+fileName;
    let dest = folderPath+"/"+folderName+"/"+fileName
    // console.log(src);
    // console.log(dest);
    fs.copyFileSync(src,dest);
    console.log(fileName +" is added at " + dest);

    fs.unlinkSync(src)
}





function folderSort () {
    
    // getting all the files in folder(Downloads in this case)
    let allFiles =  fs.readdirSync(folderPath);
    for(let i = 0 ;i < allFiles.length;i++){
        
        //Name of all the files using this 
        // console.log(allFiles[i]);

        // name of all the extensions
        // console.log(path.extname(allFiles[i]));
        
        // for(let key in extensions){
        //     if(extensions[key].includes(path.extname(allFiles[i])))
        //     console.log("YES");
        // }


        // ANSWER CODE
        let folderName = alreadyHaveAFolder(path.extname(allFiles[i]))
        
            moveToFolder(allFiles[i],folderName);
        
    }

}

folderSort();