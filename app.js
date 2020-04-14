const express = require('express');
const app = express();

app.use((req, resp, next) => {
    resp.status(200).json({
        message: 'My Demo api works!'
    });
});
module.exports = app;