const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// Import the TaxDetail model
const TaxDetail = require('./models/TaxDetail');  // Corrected the name here

// Initialize Express app
const app = express();

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/taxdb'; 

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected successfully.');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Set up body-parser and static files
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taxfiler24@gmail.com',  // Use environment variable for email in production
        pass: 'vemj boqq epye rcol'  // Use environment variable for password in production
    }
});

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-email', async (req, res) => {
    const { name, phone, email, salary, houseProperty, otherSources } = req.body;

    if (!name || !phone || !email || !salary || !houseProperty || !otherSources) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const totalIncome = salary + houseProperty + otherSources;
    let tax = calculateTax(totalIncome);

    // Save the details to the MongoDB database
    try {
        const taxDetail = new TaxDetail({  // Corrected "TaxDetail" here
            name,
            phone,
            email,
            salary,
            houseProperty,
            otherSources,
            totalIncome,
            taxPayable: tax
        });

        await taxDetail.save();  // Save the data to MongoDB

        console.log('Tax details saved to database.');

        const mailOptions = {
            from: 'taxfiler24@gmail.com',
            to: email,
            subject: 'Your Tax Calculation Summary',
            html: `
                <h1>Tax Calculation Summary</h1>
                <p>Dear ${name},</p>
                <p>Your calculated tax details are as follows:</p>
                <p><strong>Salary:</strong> ₹${salary.toFixed(2)}</p>
                <p><strong>House Property:</strong> ₹${houseProperty.toFixed(2)}</p>
                <p><strong>Other Sources:</strong> ₹${otherSources.toFixed(2)}</p>
                <p><strong>Total Income:</strong> ₹${totalIncome.toFixed(2)}</p>
                <h3><strong>Tax Payable:</strong> ₹${tax.toFixed(2)}</h3>
                <p>Thank you for using our service!</p>
            `
        };

        // Send email to the user
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ message: 'Email sent and details saved successfully!' });
            }
        });

    } catch (err) {
        console.error('Error saving tax details:', err);
        return res.status(500).json({ error: 'Failed to save tax details' });
    }
});

// Function to calculate tax
function calculateTax(income) {
    let tax = 0;
    if (income > 1500000) {
        tax = (income - 1500000) * 0.30 + 100000 * 0.20 + 300000 * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 1200000) {
        tax = (income - 1200000) * 0.20 + 300000 * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 900000) {
        tax = (income - 900000) * 0.15 + 300000 * 0.10 + 300000 * 0.05;
    } else if (income > 600000) {
        tax = (income - 600000) * 0.10 + 300000 * 0.05;
    } else if (income > 300000) {
        tax = (income - 300000) * 0.05;
    }
    return tax;
}

// Start server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
