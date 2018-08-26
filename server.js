import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import knex from './config/db';
//route
import users from './routes/user.routes';
// import User from "./models/users";
let bookshelf = require('bookshelf')(knex);
bookshelf.plugin(require('bookshelf-eloquent'));

let app = express();
let port = 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => res.send("Hello world !"));
app.use('/api/users/', users);

// app.get('/api/users', async (req, res) => {
//     // let use = await User.get();
//     // let users = await knex.select().table('user');
//
// });



app.listen(port, () => console.log(`Hey from server, run on ${port}`));