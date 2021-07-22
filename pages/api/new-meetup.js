require('dotenv').config();
import { MongoClient } from "mongodb";

const handler=async(req, res)=>{
    if(req.method==='POST'){
        const data= req.body;
        const {title, image, adress, description}=data;
        const client= await MongoClient.connect(`${process.env.USER}`);
        const db= client.db()
        const meetupCollection= db.collection('meetups');
        const result= await meetupCollection.insertOne(data)
        client.close();
    }
}

export default handler;