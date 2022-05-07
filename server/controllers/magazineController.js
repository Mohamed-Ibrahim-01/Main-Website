const Magazine = require('../models/magazine.js');
const createError = require('http-errors')

exports.getAllMagazines = async (req, res, next) => {
    Magazine.find()
    res.status(200)
    res.json({ Magazines: result })
}

exports.getMagazine = async (req, res, next) => {

    const {id} = req.params
    magazine = await Magazine.findById(id)
      if (!contact instanceof Contact) {
        return next(
            new createError.BadRequest( 'Name, Mail, Message are the only allowed')
        )
    }

    if(!magazine){
        return next( new createError.NotFound())
    }

    res.status(200)
    res.json({ Magazines: result })
}
