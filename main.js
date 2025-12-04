//   part 1 /*1*/ 
const fs = require("fs");
const { pipeline } = require("stream");
const filePath = "data.txt";

const stream = fs.createReadStream(filePath, {encoding: "utf-8", highWaterMark: 64 });
stream.on("data", chunk => {
    console.log("New chunk");
    console.log(chunk);
});

stream.on("end", () => {
    console.log("finshed reading file");
    
})
   /*2*/
const sourcePath = "./source.txt";
const destPath = "./dest.txt";

const readable = fs.createReadStream(sourcePath);
const writable = fs.createWriteStream(destPath);
readable.pipe(writable)
writable.on("finish", () => {
    console.log("file copied");
})
  /*3*/
const zlib = require("zlib");
const { pipe } = require("stream");
const { error } = require("console");

const input = "./data.txt";
const output = "./data.txt.gz";

const read = fs.createReadStream(input);
const gzip = zlib.createGzip();
const write = fs.createWriteStream(output);

pipeline(
    read,
    gzip,
    write,
    (err) => {
        if (err) {
            console.error("pipeline failed", err);
        }else {
            console.log("file compressed seccessfully");
            
        }
    }
)
//-----------------------------------------------------------------
   /* part 3 */
// 1 - The Node.js Event Loop is a system that allows Node.js
//  to handle many tasks at the same time without blocking.
//--------------------------------------------------------------
// 2 - libuv is a C library that Node.js uses to handle
// libuv gives Node.js the ability to perform tasks without blocking
// libuv is the engine that powers Node.js’s asynchronous behavior.
// libuv is the engine that powers Node.js’s asynchronous behavior.
// libuv is the engine that powers Node.js’s asynchronous behavior.
// Without libuv, Node.js would not be non-blocking.
//-------------------------------------------------------------------
// 3 - Node.js handles async operations by:

// Using libuv to manage system operations

// Running heavy tasks in a thread pool

// Using the event loop to trigger callbacks when ready

// Keeping the main JS thread free so it never blocks
//------------------------------------------------------------
// 4 - Call Stack	Executes JavaScript code
// Event Queue	Stores async callbacks waiting to run
// Event Loop	Moves tasks from queue → call stack when it's free
//---------------------------------------------------------------------
// 5 - Thread Pool	A set of background threads,
//  used to handle heavy or blocking tasks ,
// without blocking the main JavaScript thread.
// Default Size:	4 threads
// How to Change:	By setting the environment variable: UV_THREADPOOL_SIZE
//-------------------------------------------------------------------------------------
// 6 - Node.js handles blocking code synchronously on
//  the main thread, while non-blocking code
//  runs asynchronously in the background using the event loop and thread pool.
//---------------------------------------------------------------------------------
  // part 2 /*1*/ 
const http = require("http");

const userFile = "./users.json";

function readUsers() {
    const data = fs.readFileSync(userFile, "utf-8");
    return JSON.parse(data);
}
function writeUsers(users) {
    fs.writeFileSync(userFile, JSON.stringify(users, null, 2), "utf-8");
}

const server = http.createServer((req,res) => {
    if (req.method === "POST" && req.url === "/user") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            if (!body) {
                res.writeHead(400 , 
                    {"content-type": "application/json"});
                    return res.end(JSON.stringify({error: "Embty body"}));
            }
            let newUser = null;
            newUser =JSON.parse(body);

            if (newUser.name || newUser.email){
                res.writeHead(400,
                     {"content-type": "application/json"});
                     return res.end(JSON.stringify({error: "Name and email are required"}));
            }
            const users = readUsers();
            const exists = users.some(u => u.email === newUser.email);
            if (exist) {
                res.writeHead(409,
                     {"content-type": "application/json"});
                     return res.end(JSON.stringify({error : "Email already exists"}));
            }
            newUser.id = Date.now();
            users.push(newUser);
            writeUsers(users);

            res.writeHead(201, {"content-type": "application/json"});
            res.end(JSON.stringify({message : "user created" , user: newUser}));
        });
    }
    else {
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({error:"Not found"}));
    }
});

server.listen(3000, () => {
    console.log("server running");
    
});