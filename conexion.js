// Requerir moongose para comunicarnos con la base de datos
const mongoose = require('mongoose');

// Asigansmos a contante los valores de conexion
const URI = "mongodb+srv://dbUser:Suerte05@virtualgym.wxtmv.mongodb.net/<dbname>?retryWrites=true&w=majority";
//mongodb + srv: //dbUser:<password>@virtualgym.wxtmv.mongodb.net/<dbname>?retryWrites=true&w=majority

//Iniciamos la conexion
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Conectados a la base de datos...!!!")
}

// Exportamos el modulo
module.exports = connectDB;