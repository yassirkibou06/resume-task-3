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

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

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

