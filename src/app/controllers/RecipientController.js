import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async store(req, res) {
        const schemaValidation = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string()
                .string()
                .required(),
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
            where: { email: req.body.email }
        });

        if (userExists) {
            return res.status(400).json({ error: 'Recipient already exists' });
        }

        const { id, name, email, provider } = await Recipient.create(req.body);

        return res.json({
            id,
            name,
            email,
            provider
        });
    }
}

export default new RecipientController();
