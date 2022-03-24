import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'Name must be less than 40 characters']
    },
});

module.exports =  mongoose.models.Category || mongoose.model('Category', CategorySchema);