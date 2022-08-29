const mongoose = require('mongoose')

//lleva 2 params= 1- link de conexión, 2- objeto con 2 propiedades en true
mongoose.connect(
    process.env.MONGO_DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
.then(()=>console.log('connected to database successfully'))
.catch(error=>console.log(error))