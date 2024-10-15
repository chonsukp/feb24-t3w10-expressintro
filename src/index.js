const express = require("express");

// make an instance of the express system so we can configure it eg. routes, settings 
const app = express();

// GET localhost:3000/
// .get("/", req, res) =>{})
// .get("/", (banana, elephat) => {})
app.get("/", (request, response) => {
    // response.send("<h1>Hello word!</h1>");
    response.json({
        message:"Hello World!"
    })
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening to localhost:${PORT}`);
});