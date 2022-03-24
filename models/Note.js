import mongoose, { Schema } from 'mongoose';


const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title must be less than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [200, 'Description must be less than 200 characters'],
    },
}, {
    timestamps: true
});

module.exports =  mongoose.models.Note || mongoose.model('Note', NoteSchema);