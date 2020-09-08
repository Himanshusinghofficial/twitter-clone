const mongoose = require('mongoose');
const User = require('./user.model');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new Schema({
    body: {type: String, required: true},
    likes: [{type: ObjectId, ref:"User"}],
    comments: [{ text: String, postedBy: [{type: ObjectId, ref: "User"}] }],
    postedBy: {type: ObjectId, ref: User}
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;