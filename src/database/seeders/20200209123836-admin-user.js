const bcrypt = require('bcryptjs');
const uuid = require('uuid/v1');

module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'users',
            [
                {
                    id: uuid(),
                    name: 'Distribuidora FastFeet',
                    email: 'admin@fastfeet.com',
                    password_hash: bcrypt.hashSync('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: () => {}
};
