// requires
const express = require(`express`);
const bodyParser =require(`body-parser`)
const app = express();

// middlewares

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))




app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact",(req,res)=>{
res.sendFile(__dirname + "/contact.html")
});
app.post("/contact",(req,res)=>{
console.log(req.body);
res.send(`welcome <b> ${req.body.email} </b> your form has been submitted successfully`)
});

app.listen(3000, () => {
  console.log("server started on port : 3000");
});
