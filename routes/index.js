const express = require('express');
const router = express.Router();
const queries = require('../queries/queries')
const bodyParser = require('body-parser')

/* GET home page. */
router.get('/', function(req, res) {
  queries.getBooks()
    .then(books => {
      res.json(books);
    });
});

router.get('/authors', function(req, res) {
  queries.getAuthors()
    .then(authors => {
      res.json(authors);
    });
});

router.post('/newauthor'), function(req, res) {
  queries.newAuthor()
    .then(author => {
      res.send(author)
    });
};

router.post('/newbook'), function(req, res) {
  queries.newBook()
    .then(book => {
      res.send(book)
    });
};

module.exports = router;
