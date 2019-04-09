const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi! You found my API");
});

app.post("/api/contact", (req, res) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: process.env || 465,
    auth: {
      username: "salv.m.argent@gmail.com",
      password: ""
    }
  });

  const mailOptions = {
    from: data.email,
    to: "salv.m.argent@gmail.com",
    subject: "New contact has been submitted | PORTFOLIO",
    html: `<p>{data.firstName} {data.lastName} </p>
                <p>{data.email}</p>
                <p>{data.phoneNumber}</p>
                <p>{data.options}</p>
                <p>{data.comments}</p>`
  };

  smtpTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
