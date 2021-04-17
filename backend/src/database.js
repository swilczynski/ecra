const mongoose = require('mongoose');

mongoose.connection.on('open', (err) => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function getConnection() {
    return mongoose.connect("mongodb://root:example@database:27017/ecra?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = {
    getConnection,
};
