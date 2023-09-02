const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-email-password',  // Your Gmail password
  },
});

app.post('/send-feedback', async (req, res) => {
  const { name, email, feedback } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Your Gmail address
    to: 'saiitadikonda7@gmail.com', // Your Gmail address
    subject: 'Feedback Received',
    text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
