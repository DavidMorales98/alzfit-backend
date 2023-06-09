const mongoose = require("mongoose")

const connection = async () => {
    try{
        await mongoose.connect("mongodb://alzfit-mongodb:waFxcn27udGND76Ayr6Gzbwj3gmKU9Z3sVaaM2EGnquJglOqTYrJtFa0SimTQxIg068Z7EgiW2ioACDb0Y5QEg%3D%3D@alzfit-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alzfit-mongodb@");
        console.log("Conectados a MongoDB")
    }catch(error){
        console.log(error)
        throw new Error("Error al conectar a la base de datos MongoDB")
    }
}

module.exports = {
    connection
}