const mongoose = require("mongoose")

const connection = async () => {
    try{
        await mongoose.connect("mongodb://alzfit-mongodb:odHh670QMowHD1LntmO3O5pvxoRWvIMt8NoohwvRvKnF79zmUlcKAfW0CyjCNBNzkuqBcP3kr1NpACDbrxd5hg==@alzfit-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alzfit-mongodb@");
        console.log("Conectados a MongoDB")
    }catch(error){
        console.log(error)
        throw new Error("Error al conectar a la base de datos MongoDB")
    }
}

module.exports = {
    connection
}