// const http = require('http');
// const server = http.createServer();
// console.log(server);                    // Displays the server methods



const http = require('http');
const PORT = 5000;
http.get(`http://localhost:${PORT}/getserver`, (res) => {
    console.log("GET request sent to /getserver");
});

const server = http.createServer((req, res) => {
    if (req.url === "/getserver") {
        res.write("Hello, This is my first server");
        res.end();
    } else {
        res.write("Welcome to the Home Page");
        res.end();
    }
}).listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
});
