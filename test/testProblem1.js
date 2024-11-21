
import { createDirectory,createFiles, deleteFiles } from "../problem1.js";


createDirectory()
.then((response)=>  createFiles())
.then((response)=>{
    console.log("files created successfully");
     return deleteFiles()})
.then((response)=> console.log("files deleted"))
.catch((err)=> console.log("Error is : " + err));
 



