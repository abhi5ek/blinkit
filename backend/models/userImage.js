const {Schema, model} = require('../connections');

const myschema = new Schema({
    image : String
});

module.exports = model('image', myschema );