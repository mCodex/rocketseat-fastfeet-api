import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async store(req, res) {
        const schemaValidation = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            street_number: Yup.string().required(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            zip_code: Yup.string().required()
        });

        const isValidPayload = await schemaValidation.isValid(req.body);

        if (!isValidPayload) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const userExists = await Recipient.findOne({
            where: { name: req.body.name }
        });

        if (userExists) {
            return res.status(400).json({ error: 'Recipient already exists' });
        }

        const { id, name } = await Recipient.create(req.body);

        return res.json({
            id,
            name
        });
    }

    async update(req, res) {
        const schemaValidation = Yup.object().shape({
            id: Yup.string(),
            name: Yup.string(),
            street: Yup.string(),
            street_number: Yup.string(),
            state: Yup.string(),
            city: Yup.string(),
            zip_code: Yup.string()
        });

        const isValidPayload = await schemaValidation.isValid(req.body);

        if (!isValidPayload) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const recipient = await Recipient.findByPk(req.body.id);

        if (!recipient || recipient.length === 0) {
            return res.status(400).json({ error: 'Recipient not found' });
        }

        const { id, name } = await recipient.update(req.body);

        return res.json({
            id,
            name
        });
    }
}

export default new RecipientController();
