const mongoose = require('mongoose');

module.exports = mongoose.model('Poll', new mongoose.Schema({
    name: String,
    description: String,
    questions: [
        {
            text: String,
            pro: String,
            con: String,
        }
    ],
}));
