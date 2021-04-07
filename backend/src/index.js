const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(parser.raw());
app.use(parser.json());
app.use((res, req, next) => setTimeout(next, 1000));

/**
 * @TODO: Determine list of endpoints
 *
 * GET /polls
 * GET /poll/:id
 * POST /poll/:id
 * PUT /poll/:id
 * DELETE /poll/:id
 *
 * GET /answers/:poll_id
 * POST /answers/:poll_id
 */

const items = [
    {
        id: 1,
        name: 'Web Team Healthcheck',
        description: 'Php Developers experience survey. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        questions: [
            {
                text: 'Easy to release',
                pro: 'Releasing is simple, safe, painless & mostly automated.',
                con: 'Releasing is risky, painful, lots of manual work, and takes forever.',
            },
            {
                text: 'Tech quality (code base health)',
                pro: 'We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage.',
                con: 'Our code is a pile of dung, and technical debt is raging out of control',
            },
        ],
    },
    {
        id: 2,
        name: 'Backend Team Healthcheck',
        description: 'C++ and Python Developers satisfaction poll. Donec sed sagittis tortor, eget aliquet velit.',
    },
    {
        id: 3,
        name: 'Front End Team Healthcheck',
        description: 'Front End Developers health measurement. Donec in dui eu justo tempor efficitur et porttitor lacus.',
    },
    {
        id: 4,
        name: 'Customer Satisfaction',
        description: 'Customer Satisfaction status. Donec in dui eu justo tempor efficitur et porttitor lacus.',
    },
];

const votes = [
    {
        id: 1,
        name: 'This is a first vote',
    },
];

app.get(
    '/items',
    async (req, res) => {
        res.send(items);
    },
);

app.get(
    '/items/:id',
    async (req, res) => {
        res.send(items.find((item) => item.id === parseInt(req.params.id, 10)));
    },
);

app.put(
    '/items',
    async (req, res) => {
        const updated = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            questions: req.body.questions,
        };

        const index = items.findIndex((item) => item.id === parseInt(updated.id, 10));

        items[index] = updated;

        res.send({status: 'OK'});
    },
);

app.post(
    '/items',
    async (req, res) => {
        const item = {
            id: items[items.length - 1].id + 1,
            name: req.body.name,
            description: req.body.description,
        };

        items.push(item);

        res.send({status: 'OK'});
    },
);

app.get(
    '/votes',
    async (req, res) => {
        res.send(votes);
    },
);

app.listen(
    3100,
);
