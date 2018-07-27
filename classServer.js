const http = require('http');

const PORT0 = 7000;
const PORT1 = 7500;

const handleRequest0 = (request, response) =>
{
    response.end("You're beautiful.");
}

const handleRequest1 = (request, response) =>
{
    response.end("You stink!");
}

const server0 = http.createServer(handleRequest0);
const server1 = http.createServer(handleRequest1);

server0.listen(PORT0, function() {
    console.log('You are beautiful on port ' + PORT0);
});

server1.listen(PORT1, function() {
    console.log('You have B.O. on port ' + PORT1);
});
