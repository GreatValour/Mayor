const nodemailer = require('nodemailer');
const fs = require('fs');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'support@bancaloan.com', // Your email address
        pass: 'Hustle001@'   // Your email password
    }
});

// Read the content of the HTML file
fs.readFile('letter.html', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading file:', err);
    }

    // Setup email data with the content of the HTML file
    let mailOptions = {
        from: 'support@bancaloan.com', // Sender address
        to: 'michealhero37@gmail.com',  // Recipient address
        subject: 'ATO!00080001345678765456', // Subject line
        html: data // HTML content of the email
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error);
        }
        console.log('Email sent successfully:', info.response);
    });
});
