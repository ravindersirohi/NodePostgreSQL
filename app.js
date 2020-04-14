const express = require('express');
const app = express();

const profileRoutes = require('./api/profile');

app.use('/profile', profileRoutes);

app.use((req, resp, next) => {
    resp.status(200).send('Welcome to Node with Postgres API');
});

module.exports = app;