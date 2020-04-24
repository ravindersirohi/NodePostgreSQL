const express = require('express');
const profile = express.Router();
const profileService = require('../dataService/profileService');

profile.get('/', (req, resp, next) => {
    profileService.all().then(result => {
        resp.status(200).json({
            data: result
        });
    });
});

profile.get('/:profileId', (req, resp, next) => {
    const id = req.params.profileId;
    profileService.getById(id).then(result => {
        resp.status(200).json({
            data: result
        })
    });
});

profile.post('/', (req, resp, next) => {
    const { id, fullname, address, email } = req.body;
    console.log(req.body);
    profileService.create({ fullname, email, address }).then(result => {
        resp.status(200).json({
            message: `${fullname} profile has been Created!`
        })
    });
});

profile.put('/', (req, resp, next) => {
    const { id, fullname, email, address, isactive } = req.body;
    console.log(req.body);
    profileService.update({ id, fullname, email, address, isactive }).then(result => {
        resp.status(201).json({
            message: `Profile ${id} has been updated!`
        })
    });
});

profile.delete('/:profileId', (req, resp, next) => {
    const id = req.params.profileId;
    profileService.deleteById(id).then(result => {
        resp.status(201).json({
            message: `Profile ${id} has been deleted!`
        })
    });
});
module.exports = profile;