const express = require('express');
const router = express.Router();
const Articles = require("../models/articles");
//request to get all articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
})//get article from mongodb

//to add new articles
router.post('/add', (req,res) => {
    const newArticle = new Articles({
        title : req.body.title,
        article : req.body.article,
        authorname : req.body.authorname

    })
    //saving to mongodb
    newArticle
    .save()
    .then(() => res.json("New article posted successfully"))
    .catch(err => res.status(400).json(`Error : ${err}`))
})

    // find article by id
    router.get('/:id', (req,res) => {
        Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error : ${err}`))
    })

    // find article by id and update it
    router.put('/update/:id', (req,res) => {
        Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title;
            article.article = req.body.article;
            article.authorname = req.body.authorname;
            //update ==>
            article
            .save()
            .then(() => res.json("Article UPDATED successfully!"))
            .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
    })

    //find article by id and delete it
    router.delete('/:id', (req,res) => {
        Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json("Article is deleted"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })

module.exports = router;