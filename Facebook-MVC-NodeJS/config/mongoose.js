const mongoose = require("mongoose");

const db = 'mongodb+srv://Farkad:Farkad@cluster0.flvrk.mongodb.net/demoChalleng?retryWrites=true&w=majority';
mongoose.set("useFindAndModify",false);

mongoose.connect(db , {useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connected to db"))
.catch(err=>console.log("error with db"))