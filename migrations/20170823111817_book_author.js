
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_author', (table) => {
    table.increments()
    table.integer('book_id').unsigned().references('book.id').onDelete('cascade');
    table.integer('author_id').unsigned().references('author.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book_author')
};
