import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid/v1';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                street: Sequelize.STRING,
                street_number: Sequelize.STRING,
                additional_info: Sequelize.STRING,
                state: Sequelize.STRING,
                city: Sequelize.STRING,
                zip_code: Sequelize.STRING
            },
            { sequelize }
        );

        this.addHook('beforeCreate', async recipient => {
            recipient.id = uuid();
        });

        // this.addHook('beforeSave', async recipient => {

        // });

        return this;
    }
}

export default Recipient;
