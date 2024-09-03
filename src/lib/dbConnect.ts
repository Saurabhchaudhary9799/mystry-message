import mongoose  from "mongoose";

type ConnectionObject = {
    isConnected ?: number
}

const connection :ConnectionObject = {};

async function dbConnect(): Promise<void> {
   if(connection.isConnected){
     console.log('database is already connected');
     return
   }

   try {
    const db =  await mongoose.connect("mongodb://127.0.0.1:27017/mystryMessage" || "" , {});
    connection.isConnected = db.connections[0].readyState ;

    console.log('DB is connected');
   } catch (error) {
    console.log('Database connection failed', error)
    process.exit(0);
   }
}

export default dbConnect ;