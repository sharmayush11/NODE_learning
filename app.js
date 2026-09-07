const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            console.log("Request completed");
            console.log(body); 
            res.end("User received");
        });
    } else {
        res.end("Not found");
    }
});
server.listen(3000, () => {
    console.log("Server started on port 3000");
});
