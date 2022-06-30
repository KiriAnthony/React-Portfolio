const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const contentSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Name the title of this content'
        },
        image: {
            type: image,
            required: 'Enter a screenshot of the project'
        },
        description: {
            type: String,
            required: 'Enter a description for the image'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Content = model('Content', contentSchema);
model.exports = Content;