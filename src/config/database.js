module.exports = {
    dialect: 'postgres',
    hostname: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
