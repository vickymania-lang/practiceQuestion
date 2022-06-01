// const nodemailer = require('nodemailer')
// const mailGun = require('nodemailer-mailgun-transport')


// const auth = {
//     auth: {
//         api_keys: '243e7f1278549c3d62d64c0bef18df86-c250c684-0569e881',
//         domian: 'sandboxfc33074a3b224eecaf6e25c4e2808fc3.mailgun.org'
//     }
// }

// const transporter = nodemailer.createTransport(mailGun(auth))

// const mailOptions = {
//     from: 'ogungbuyivictor@gmail.com',
//     to: 'ogungbuyivictor1@gmail.com',
//     subject: 'Testing',
//     text: 'i will like to get in touch with you'
// }

// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log('error occurs')
//     }else {
//         console.log('message sent !!!')
//     }
// })