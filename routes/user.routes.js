import { Router } from "express";
import db from '../config/db';
import User from '../models/users';
const router = new Router();


router.get('/', async (req, res) => {
    let users = await User.fetchAll();
    res.status(200).json({users})
});

router.get('/:id', async (req, res) => {
    let users = await User.where('id', req.params.id).fetch();
    res.status(200).json({users})
});

router.post('/', async (req, res) => {
    let user = await new User(req.body.user).save(null, {method: 'insert'});
    res.status(200).json(user);
});

router.post('/:id', async (req, res) => {
    let user = await User.where('id', req.params.id).save(req.body.user, {method: "update"});
    res.status(200).json(user);
});

router.delete('/:id', async (req, res) => {
    let user = User.where('id', req.params.id).destroy();
    res.status(200).json("User Deleted succefully");
});

export default router;