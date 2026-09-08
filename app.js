const express = require('express');

const server = express();

server.get("/users/:userId/posts/:postId", (req, res) => {
    console.log(req.params);
    const uId = req.params.userId
    const pId = req.params.postId
    console.log("User ID =",  uId);
    console.log("Post ID =",  pId);
    
    res.send(`User ID: ${uId}, Post ID: ${pId}`);
});

server.listen(3000, () => {
    console.log('server started on port 3000');
});