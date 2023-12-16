const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const pdfPage = require('./pdf');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://resume-task-3-server.vercel.app',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-pdf', async (req, res) => {
    const html = pdfPage(req.body);
    pdf.create(html).toFile('Resume.pdf', (err) => {
        if (err) {
            console.error('Error creating PDF:', err);
            res.status(500).send(`Internal Server Error: ${err.message}`);
        } else {
            console.log('PDF created successfully');
            res.status(200).send('PDF created successfully');
        }
    });
});


app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
})

app.use(express.static('../client/build'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

