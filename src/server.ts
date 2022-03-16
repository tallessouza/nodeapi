import express from "express";

const app = express();

app.get('/test',(req,res) => {
  return res.send('Hi')
})

app.post('/teste',(req,res) => {
  return res.send('Hi')
})
app.listen(3333, () => console.log('Running'))