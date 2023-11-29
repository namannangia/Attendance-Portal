class MailSender{
    nodemailer;
    gmail;
    mailfrom;
    tomail;
    sub;
    message;
    
    constructor(to, sub, msg){
        this.mailfrom = 'captureit@gmail.com';
        this.tomail = to;
        this.sub = sub;
        this.message = msg;
        this.nodemailer = require('nodemailer');
        this.gmail = this.nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nangia2002@gmail.com',
              pass: 'cxrknbvxmptiqevl'
            }
          });
        console.log('Mail obj created')
    }

    send(){
      console.log("sending mail")
      var mailOptions = {
        from: this.mailfrom,
        to: this.tomail,
        subject: this.sub,
        html: this.message,
        //html: "<b>From Check Mate 360</b>", // html body
      };
      this.gmail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  };

}

module.exports = MailSender;

