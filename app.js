const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer");
const path = require("path");

require("dotenv").config();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

app.post('/', (req, res)=>{
  const message = req.body.message;
  const fullname = req.body.fullname;
  const now = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  res.render("response", { message : message, fullname : fullname, now : now, time : time })
  const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
      user : process.env.EML_USR,
      pass: process.env.EML_THIRDPART_PWD
    }
  })

const mailOptions = {
  from : req.body.email,
  to: process.env.EML_USR,
  subject : `[ ${req.body.fullname} ] manda messaggio con oggetto : " ${(req.body.subject).toUpperCase()} "`,
  text: `${req.body.message} \n Rispondi a ${(req.body.email).toLowerCase()}.`
}

transporter.sendMail(mailOptions, (error, response)=>{
    if (error){
      res.send(error.message)
    } else {
      console.log("Email sent")
    }
})
})











let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server avviato sulla porta ${port}`);
})