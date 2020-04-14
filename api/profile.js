const express = require('express');
const profile = express.Router();

profile.get('/', (req, resp, next) => {
    resp.status(200).json({
        message: 'GET user profile!'
    });
});

profile.get('/:profileId', (req, resp, next) => {
    const id = req.params.profileId;
    resp.status(200).json({
        message: `GET ${id} profile!`
    });
});

profile.post('/', (req, resp, next) => {
    resp.status(200).json({
        message: 'POST user profile!'
    });
});

profile.put('/', (req, resp, next) => {
    resp.status(200).json({
        message: 'PUT user profile!'
    });
});

profile.delete('/:profileId', (req, resp, next) => {
    const id = req.params.profileId;
    resp.status(200).json({
        message: `Delete ${id} profile!`
    });
});
module.exports = profile;