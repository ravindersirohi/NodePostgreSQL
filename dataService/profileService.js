const baseService = require('./dbBase');
const profileService = {

    all: async () => {
        const q = 'Select * From UserProfile';
        return await baseService.execute(q);
    },
    getById: async (id) => {
        if (id !== 0) {
            const q = 'Select * From UserProfile Where Id = $1';
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    },
    create: async ({ fullname, email }) => {
        console.log('Create Profile!');
        if (fullname != null) {
            const q = 'INSERT INTO UserProfile (FullName, Email, CreatedOn) VALUES($1, $2, Now())';
            return await baseService.executeQuery(q, [fullname, email]);
        }
        else
            console.log(`Invalid input!`);
    },
    update: async ({ id, fullname, email }) => {
        console.log('Update Profile!');
        if (id !== 0) {
            const q = `UPDATE UserProfile SET FullName ='${fullname}', Email = '${email}' WHERE Id = $1`;
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    },
    deleteById: async (id) => {
        if (id !== 0) {
            const q = 'Delete From UserProfile Where Id = $1';
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    }
}
module.exports = profileService;