const {Schema, model, default: mongoose} = require("mongoose")

const ExternalUserSchema = Schema({
    id_user: {
        type: String,
        require: true
    },
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
ExternalUserSchema.set('timestamps',true)

module.exports = mongoose.model('external_user',ExternalUserSchema,"external_users")