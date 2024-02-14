const {Schema, model} = require('../connections');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
});

module.exports = model('user', myschema );