const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const pdfPage = require('./pdf');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-pdf', async (req, res) => {
    try {
        const html = pdfPage(req.body);
        pdf.create(html).toFile('Resume.pdf', (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to create PDF' });
            } else {
                console.log('PDF created successfully');
                res.status(200).json({ success: true });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

app.use(express.static('../client/build'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


/*
,
        {
            "src": "/(.*)",
            "methods": ["OPTIONS"],
            "dest": "index.js"
        },
        {
            "src": "/create-pdf",
            "methods": ["POST"],
            "dest": "index.js"
        },
        {
            "src": "/fetch-pdf",
            "methods": ["GET"],
            "dest": "index.js"
        }*/