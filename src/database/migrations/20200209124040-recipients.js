module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('recipients', {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false
            },
            street_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            additional_info: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            zip_code: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }),

    down: (queryInterface, Sequelize) => queryInterface.dropTable('recipients')
};
