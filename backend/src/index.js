const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { getConnection } = require('./database');

const Poll = require('./repository/poll');

const app = express();

app.use(cors());
app.use(parser.raw());
app.use(parser.json());

app.get(
    '/polls',
    async (req, res) => {
        const polls = await Poll.find({});

        res.send(polls);
    },
);

app.get(
    '/polls/:id',
    async (req, res) => {
        const poll = await Poll.findOne({ _id: req.params.id })

        res.send(poll);
    },
);

app.put(
    '/polls',
    async (req, res) => {
        const poll = await Poll.findOne({ _id: req.body._id })

        poll.name = req.body.name;
        poll.description = req.body.description;
        poll.questions = req.body.questions;

        poll.save();

        res.send({status: 'OK'});
    },
);

app.post(
    '/polls',
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
