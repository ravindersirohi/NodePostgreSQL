const baseService = require('./dbBase');
const profileService = {

    all: async () => {
        const q = 'Select * From UserProfile';
        return await baseService.read(q);
    },
    byId: async (id) => {
        if (id !== 0) {
            const q = `Select * From UserProfile Where Id = ${id}`;
            return await baseService.read(q);
        }
        else
            console.log(`Invalid input ${id}!`);
    }
}
module.exports = profileService;