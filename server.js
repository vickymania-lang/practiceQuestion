const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require("nodemailer")


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/about.html')
})

app.get('/contact.html',  function(req, res) {
    res.sendFile(__dirname + '/contact.html')
})


app.post('/submit', function(req, res) {
    console.log('data:', req.body)
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'allenvickymania@gmail.com',
          pass: 'Vicky%12345'
        }
      });
        
      var mailOptions = {
         from: 'ogungbuyivictor@gmail.com',
         to: 'allenvickymania@gmail.com',
         subject: 'Sending Email using Node.js',
         html: ('data:', req.body)
      
        //  attachments: [{
        //      filename: 'text1.txt',
        //      content: 'hello world!'
        //  }
      }
        
      mail.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
      });
    
        
    res.json({message: 'message received'})
})


app.listen(5000, () => {
    console.log('app listening on 5000....')
})

