const Article = require('../models/article.js')

exports.getArticles = async (req, res, next) => {
    await Article.find()
    res.status(200)
    res.json({ Articles: result })
}
  

