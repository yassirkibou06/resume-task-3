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

const puppeteer = require('puppeteer');

app.post('/create-pdf', async (req, res) => {
    const html = pdfPage(req.body);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({ path: 'Resume.pdf', format: 'A4' });
    await browser.close();

    res.status(200).send('PDF created successfully');
});



app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
})

app.use(express.static('../client/build'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

