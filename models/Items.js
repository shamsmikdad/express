const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        name: {
            type : String,
            required: true
        },
        date:{
            type: date,
            default: Date.now
        }

    }
);

Item = mongoose.model('item', ItemSchema);
module.exports = Item;