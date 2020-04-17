const baseService = require('./dbBase');
const profileService = {

    all: async () => {
        const q = 'Select * From Profiles';
        return await baseService.execute(q);
    },
    getById: async (id) => {
        if (id !== 0) {
            const q = 'Select * From Profiles Where Id = $1';
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    },
    create: async ({ fullname, email }) => {
        if (fullname != null) {
            const q = "INSERT INTO Profiles (FullName, Email, IsActive, CreatedOn) VALUES($1, $2, B'0', Now())";
            return await baseService.executeQuery(q, [fullname, email]);
        }
        else
            console.log(`Invalid input!`);
    },
    update: async ({ id, fullname, email, isactive }) => {
        if (id > 0) {
            const q = `UPDATE Profiles SET FullName ='${fullname}', Email = '${email}', IsActive=B'${isactive}', ModifiedOn=Now() WHERE Id = $1`;
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    },
    deleteById: async (id) => {
        if (id !== 0) {
            const q = 'DELETE FROM Profiles Where Id = $1';
            return await baseService.executeQuery(q, [id]);
        }
        else
            console.log(`Invalid input ${id}!`);
    }
}
module.exports = profileService;