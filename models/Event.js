const { Schema, model, default: mongoose } = require("mongoose")


const EventSchema = Schema({

    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }


})


EventSchema.method('toJSON', function() {
    const { _id, __v, ...object } = this.toObject()

    object.id = _id
    return object

})

module.exports = model( 'Event', EventSchema )