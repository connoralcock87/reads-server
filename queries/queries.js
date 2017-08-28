const knex = require('../node_modules/knex/knex');

module.exports = {
  getBooks() {
    return knex('*').from('book')
  },
  getAuthor() {
    return knex('*').from('author')
  },
  newAuthor(author) {
    return knex('author')
    .insert(author)
    .returning('*');
  },
  newBook(book) {
    return knex('book')
    .insert(book)
    .returning('*');
  },
};
