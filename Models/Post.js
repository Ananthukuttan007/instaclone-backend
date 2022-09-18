const mongooose = require('mongoose');

const postSchema = new mongooose.Schema({
    // Your code goes here
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    PostImage: {
        data: Buffer,
        contentType: String
    },
    date: {
        type: String,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Post = mongooose.model('posts', postSchema);

module.exports = Post;