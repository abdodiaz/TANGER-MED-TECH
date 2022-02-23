const mongosse = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongosse.Schema({
    name: { type: String },
    email: {
        type: String,
        require: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, "Minimum password length is 6 characters"]
    }, nationality: { type: String },
    organisation: { type: String },
    role: { type: String },
   
});

const User = mongosse.model('user', userSchema);

module.exports = User;
