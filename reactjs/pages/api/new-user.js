import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const top = req.body.password;
    const saltPass = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, saltPass)
    const data = ({
      uname:req.body.uname,
      email:req.body.email,
      password:secPass,
    })

    const client = await MongoClient.connect(
      "mongodb+srv://dbEducko:Rs5ZnltffS0Bh22L@educko.h5stn.mongodb.net/Educko?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("Users");

    const result = await meetupsCollection.insertOne(data);
    bcrypt.compare(top,data.password,(err,res) => {
      if (err) {
        console.error(err)
    
        return
      }
      console.log(res)
    })
    console.log(result);

    client.close();

    res.status(201).json({ message: "User inserted!" });

  }
}

export default handler;

