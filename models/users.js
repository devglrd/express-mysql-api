import knex from "../config/db"
let bookshelf = require('bookshelf')(knex);

let User = bookshelf.Model.extend({
    tableName: 'user',
});

export default User;