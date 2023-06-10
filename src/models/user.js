const {Schema, model, default: mongoose} = require("mongoose")

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    licence:{
        type: String,
        default: "Free"
    }
});
UserSchema.set('timestamps',true)

module.exports = mongoose.model('user',UserSchema,"users")