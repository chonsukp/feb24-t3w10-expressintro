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

app.post("/", (request, response) => {
    response.json({
        message:"POST request received!"
    });
})

app.post("/bananas", (request, response) => {
    response.json({
        message:"POST bananas received!"
    });
})

const {router} = require("./controllers/pokemonController.js");
// localhost:3000/pokemon/
app.use("/pokemon", router);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening to localhost:${PORT}`);
});