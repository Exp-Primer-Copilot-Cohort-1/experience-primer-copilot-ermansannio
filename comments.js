// Create web server
var express = require('express');
var router = express.Router();

// Import comments model
var Comments = require('../models/comments');

// GET ALL COMMENTS
router.get('/comments', function(req, res, next) {
    Comments.find(function(err, comments) {
        if(err) {
            res.send(err);
        }
        res.json(comments);
    });
});

// GET SINGLE COMMENT BY ID
router.get('/comment/:id', function(req, res, next) {
    Comments.findById(req.params.id, function(err, comment) {
        if(err) {
            res.send(err);
        }
        res.json(comment);
    });
});

// SAVE COMMENT
router.post('/comment', function(req, res, next) {
    var comment = new Comments(req.body);
    comment.save(function(err, comment) {
        if(err) {
            res.send(err);
        }
        res.json(comment);
    });
});

// UPDATE COMMENT
router.put('/comment/:id', function(req, res, next) {
    Comments.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
        if(err) {
            res.send(err);
        }
        res.json(comment);
    });
});

// DELETE COMMENT
router.delete('/comment/:id', function(req, res, next) {
    Comments.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
        if(err) {
            res.send(err);
        }
        res.json(comment);
    });
});

module.exports = router;