const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const mongoose = require("mongoose")
const Question = require("./DBQuestions")
const Forum = require("./DBForum")


app.use(express.json())
app.use(cors());



app.post("/messages/question", (req,res) =>  {
const messages = req.body;

Question.create(messages,(err,data) => {
  if (err) {
    res.status(500).send(err)
  }
  else {
    res.status(200).send(data)
  }
})})


app.post("/messages/forum", (req,res) =>  {
  const messages = req.body;
  
  Forum.create(messages,(err,data) => {
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(200).send(data)
    }
  })})


app.get("/messages/question", (req,res) =>  {

  Question.find((err,data) => {
       if (err) {
           res.status(500).send(err)
       }
       else {
           res.status(200).send(data)
       }
  })
})

app.get("/messages/forum", (req,res) =>  {

  Forum.find((err,data) => {
       if (err) {
           res.status(500).send(err)
       }
       else {
           res.status(200).send(data)
       }
  })
})




app.put("/messages/question/:id/", async (req,res) => {

 Question.findByIdAndUpdate(req.params.id,{"likes":req.body.likes }, {new: true}, (err,data) => {
      if (err) return res.status(500).send(err);
      return res.send(data);
  })
})

app.put("/messages/question/:id/1", async (req,res) => {

  Question.findByIdAndUpdate(req.params.id,{"no":req.body.no }, {new: true}, (err,data) => {
       if (err) return res.status(500).send(err);
       return res.send(data);
   })
 })


 app.put("/messages/question/:id/2", async (req,res) => {

  Question.findByIdAndUpdate(req.params.id,{"yes":req.body.yes }, {new: true}, (err,data) => {
       if (err) return res.status(500).send(err);
       return res.send(data);
   })
 })
 
 








app.get('/messages/question/:id',async (req,res) => {    
  const data = await Question.find({_id : req.params.id});
     
         if (!data)  {
        res.status(404).send("error") }
        else {res.send(data)}})
       



app.listen(port,() => {
  console.log(  `${port} sta ascoltando` )
})


connectionURL = "mongodb+srv://admin:rkG6BQHQRAEdf9UB@cluster0.f2gsh.mongodb.net/Kyus?retryWrites=true&w=majority"
mongoose.connect(connectionURL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false}, () => {console.log("it connected to mongodb")})
