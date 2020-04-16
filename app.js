const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const profileRoutes = require('./api/profile');

app.use('/profile', profileRoutes);

app.use((req, resp, next) => {
    resp.status(200).send('Welcome to Node with Postgres API');
});

module.exports = app;