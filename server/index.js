const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const pdfPage = require('./pdf');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-pdf', async (req, res) => {
    const html = pdfPage(req.body);
    pdf.create(html).toFile('Resume.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
            console.log(err);
        }
        res.send(Promise.resolve());
        console.log('PDF created');
    })
})

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
})

app.use(express.static('../client/build'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

