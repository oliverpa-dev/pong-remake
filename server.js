const http = require('http');
    http.createServer((request, response) => {
    response.write("Kocham Cie! Moja Bajaderecko Najmocniutkiej utkiej utkiej!");
    response.end();
    })
    .listen(5000, () => console.log("Server is running on port: ", 5000));  
