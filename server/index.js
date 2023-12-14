const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const pdfPage = require('./pdf');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

