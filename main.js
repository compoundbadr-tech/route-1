/*1*/ function getFile() {
    console.log({File: __filename, Dir: __dirname});
}
getFile();
const { log, error } = require("console");
//-------------------------------------------------------------
/*2*/ const path = require("path");
function getFileName (filePath) {
    return path.basename (filePath)
}
console.log(getFileName("C:\\route Assignment\\Assignment 2\\main.js"));
//------------------------------------------------------------------------
/*3*/ function buildPath(fileObj) {
    return path.format(fileObj)
}
console.log(buildPath({dir: "/folder" , name: "app" , ext: ".js"}));
//--------------------------------------------------------------------------
/*4*/ function getFileExtentions(filepath) {
    return path.extname(filepath)
}
console.log(getFileExtentions("/docs/readme.md"));
//----------------------------------------------------
/*5*/ function parseFilePath(filePath) {
    return {
        Name: path.basename(filePath , path.extname (filePath)),
        Ext: path.extname(filePath)
    };
}
console.log(parseFilePath("/home/app/main.js"));
//---------------------------------------------------------------
/*6*/ function Absolute(filePath) {
    return path.isAbsolute(filePath)
}
console.log(Absolute("/home/user/file.txt")); //true
console.log(Absolute("file.txt"));  //false
//-----------------------------------------------------------------
/*7*/ function segments(...segments) {
    return path.join(...segments)
}
console.log(segments("src", "components", "app.js"));
//----------------------------------------------------------
/*8*/ function relative(relativepath) {
    return path.resolve(relativepath)
}
console.log(relative("./main.js"));
//--------------------------------------------------------------
/*9*/ function join(...path) {
    return path.join(...path)
}
console.log(join("/folder" , "folder2/file.txt"));
//--------------------------------------------------------
/*10*/ const fs = require("fs");
// async function deleteFile (filepath) {
//     try{
//         await fs.promises.unlink(filepath);
// console.log(`the ${path.basename(filepath)} is deleted`)

//     }catch (error) {
//         console.error("Error deleting file" , error.message);
//     }
// }
// deleteFile("C:\\route Assignment\\Assignment 2\\file.txt");
//----------------------------------------------------------------
/*11*/ function folder(folderPath) {
    fs.mkdirSync(folderPath, {recursive: true });
    console.log("success");
}
folder("./newFolder")
//------------------------------------------------------
/*12*/ const EventEmitter = require ("events");
const emitter = new EventEmitter();
emitter.on("sayHi", () => {
    console.log("welcome event triggred");
});
emitter.emit("sayHi");
//---------------------------------------------------
/*13*/ emitter.on("login" , (username) => {
    console.log(`user logged in: ${username}`);
});
emitter.emit("login" , "Badreldin")
//------------------------------------------------------
/*14*/ function read(filePath) {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(`the file content => "${data}" `);
} 
read("./file.txt");
//---------------------------------------------------------------
/*15*/ function write(filePath, content) {
    fs.writeFile(filePath, content, "utf-8" , () => {
    console.log(`file saved succesfully at ${filePath}`);
    });
}
write("./async.txt", "Async save")
//---------------------------------------------------------------
/*16*/ function exist(dirPath) {
   return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
}
console.log(exist("./notes.txt"));
//-----------------------------------------------------------------------------
/*17*/ const os = require ("os");
function get() {
    return {
       platform: os.platform(),
       Arch: os.arch()
    };
}
console.log(get());

