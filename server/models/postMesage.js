import Mongoose from 'mongoose'

const postSchema = Mongoose.Schema({
    title: String,
    author: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount : {
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default: new Date()
    },
});

const PostMessage = Mongoose.model('PostMesssage', postSchema);

export default PostMessage;