import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import uuid from 'uuid/v1';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN
            },
            { sequelize }
        );

        this.addHook('beforeSave', async user => {
            user.id = uuid();

            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10);
            }
        });

        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
