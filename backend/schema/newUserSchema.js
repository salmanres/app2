const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    blacklisted:{
        type: Boolean,
        default: false
    }
})

const newUserData = new mongoose.model("newUser", newUserSchema);
module.exports = newUserData;