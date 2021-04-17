const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { getConnection } = require('./database');

const Question = require('./repository/question');

const app = express();

app.use(cors());
app.use(parser.raw());
app.use(parser.json());

app.get(
    '/items',
    async (req, res) => {
        const questions = await Question.find({});

        res.send(questions);
    },
);

app.get(
    '/items/:id',
    async (req, res) => {
        const question = await Question.findOne({ _id: req.params.id })

        res.send(question);
    },
);

app.put(
    '/items',
    async (req, res) => {
        const question = await Question.findOne({ _id: req.body._id })

        question.name = req.body.name;
        question.description = req.body.description;
        question.questions = req.body.questions;

        question.save();

        res.send({status: 'OK'});
    },
);

app.post(
    '/items',
    async (req, res) => {

        console.log(req.body);

        res.send({status: 'OK'});
    },
);

app.get(
    '/votes',
    async (req, res) => {
        res.send(votes);
    },
);

(async () => {
    await getConnection();
    app.listen(3100);
})();
