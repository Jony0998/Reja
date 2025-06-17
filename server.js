
const http = require("http");

const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://Jony_me:Ov8hUBFhaOpuT8Ry@cluster0.y2l0kvg.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }, (err, client) => {
  if(err) console.log("ERROR on connection MongoDB");
else {
    console.log("MongoDB connection succeed");
   module.exports = client;



    const app = require("./app");
   const server = http.createServer(app);       
let PORT = 4002;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});  
 
}

 });


// PM2

// npm install pm2 —global
// npm install pm2 -g

// pm2 start server.js —name=MartinReja
// pm2 logs  
// pm2 logs ID

// pm2 stop ID
// pm2 start ID
// pm2 restart ID
// pm2 delete ID
