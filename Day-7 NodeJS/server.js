var mysql = require('mysql');

var sqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test_data"
});

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // add this line to allow any origin to access the resource
    res.writeHead(200, {'Content-Type': 'application/json'});

    sqlConnection.query("SELECT * FROM products", function (err, result, fields) {
        if(err) throw err;
        res.end(JSON.stringify(result));
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});