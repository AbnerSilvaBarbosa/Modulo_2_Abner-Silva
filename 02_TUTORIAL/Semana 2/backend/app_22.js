
const express = require('express'); 
const path = require("path");
const app = express();

const hostname = '127.0.0.1';
const port = 3022;

app.use("/",(req,res)=>{
  res.render(path.join(__dirname,"index"))
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});