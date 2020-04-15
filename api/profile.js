const express = require('express');
const profile = express.Router();
const profileService = require('../dataService/profileService');

profile.get('/', (req, resp, next) => {
    profileService.all().then(result => {
        resp.status(200).json({
            message: 'All Profiles',
            data: result
        });
    });
});

profile.get('/:profileId', (req, resp, next) => {
    const id = req.params.profileId;
    profileService.byId(id).then(result => {
        resp.status(200).json({
            message: `Profile ${id} result`,
            data: result
        })
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