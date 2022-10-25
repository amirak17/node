var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amir.aakhan@gmail.com',
    pass: 'sh10011975'
  }
});

var mailOptions = {
  from: 'amir.aakhan@gmail.com',
  to: 'amir17june@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});