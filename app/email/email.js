const nodemailer = require('nodemailer')
const fs = require('fs')

const newEmail = {
    clientContact: function(to) {
        fs.readFile("./app/email/public/email.html", "utf-8", function(err, HTMLContent){
            console.log(HTMLContent)
        })
    }
}