const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image : {
        type : Buffer 
        , required : true
    }
})

module.exports = mongoose.model('imageModel', imageSchema);