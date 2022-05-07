const Contact = require('../models/contact.js');
const createError = require('http-errors')
const mailHandler = require('../utils/mailHandler.js')

exports.sendFeedback = async (req, res, next) => {
    const feedback = new Contact(req.body)
    if (!feedback instanceof Contact) {
        return next(
            new createError.BadRequest( 'Name, Mail, Message are the only allowed')
        )
    }
    await feedback.save()
    await mailHandler.sendFeedbackMail(feedback)
    res.sendStatus(202)
}
