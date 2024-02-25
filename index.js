const express = require("express")
const app = express()
const path = require("path");//nodemon sb jagah use kr paen isiliye use hota path require krna

const port = 8080;
app.use(express.static("public"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))  //kisi bhi directory me nodemon se access ho jaega url

app.listen(port, () => {
    console.log("listening on port")
})



app.get("/", (req,res) => {
    res.render("home.ejs");
})

app.get("/explore/:username",(req,res) => {
    const instaData = require("./data.json");
    let {username} = req.params
    // console.log(instaData)

    
    res.render("explore.ejs", {data : instaData[username]})

})

app.get("/user/:username",(req,res) => {
    const instaData = require("./user.json");
    let {username} = req.params
    // console.log(instaData)

    
    res.render("user.ejs", {user : instaData[username]})

})