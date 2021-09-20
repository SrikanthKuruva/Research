import fs from 'fs';

let currentWorkingDirectoryPath = process.cwd();
let folderToInspect = `${currentWorkingDirectoryPath}/vlocity/annualReview`;
// fs.readdirSync(folderToInspect).map(fileOrFolder=>{
//     if(fs.lstatSync(`${folderToInspect}/${fileOrFolder}`).isDirectory()){
//         let subFolderToInspect = `${folderToInspect}/${fileOrFolder}`;
//         fs.readdirSync(subFolderToInspect).map(componentFolder => {
//             console.log(`${fileOrFolder}: ${componentFolder}`);
//         });
//     }
// });

fs.readdir(folderToInspect, (err,files)=>{
    files.forEach(subFolder => {
        let subFolderToInspect = `${folderToInspect}/${subFolder}`;
        fs.readdir(subFolderToInspect, (err,subFiles)=>{
            subFiles.forEach(fileFolder => {
                console.log(`${subFolder}: ${fileFolder}`);
            });
        });
    });
});