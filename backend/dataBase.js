const mongoose = require("mongoose");

const connectionMongo = async()=>{
     
    try{

      const connDB =   await mongoose.connect(process.env.MongoDB_URL , {
            
            useNewUrlParser : true,
            useUnifiedTopology : true, 

         }) ;
    
           console.log(`Connected to DB ${connDB.connection.host}`)
        }

        
        catch(error){

            console.log(`serve is not connected ${error}`)

            process.exit(1) ;
      }

     
}

module.exports = connectionMongo
