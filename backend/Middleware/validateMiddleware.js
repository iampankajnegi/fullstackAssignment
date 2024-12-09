const useragent = require('express-useragent')

const validateRequest = (req, res, next) => {
    const { firstName, lastName, phoneNumber, email, dateOfBirth } = req.body;

    if ( !firstName || !lastName || !dateOfBirth||!phoneNumber || !email) {
        return res.status(400).json({ message: 'All fields are mandatory.' });
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ message: 'Invalid phone number.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    const agent = useragent.parse(req.headers['user-agent']);
    req.deviceInfo = {
        ipAddress: req.ip || req.connection.remoteAddress,
        deviceType: req.headers['user-agent'].includes('Mobile') ? 'Mobile' : 'Desktop',
        browser:  req.headers['user-agent'].split(' ')[0],
        userAgent: req.headers['user-agent']
    };

    next();
};

module.exports = { validateRequest };
