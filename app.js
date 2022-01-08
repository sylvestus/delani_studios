const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app= express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.post('/subscribe', (req,res) => {
   // console.log('hey');
   const { name,email,message,js}= req.body;
   console.log(req.body);

   mcData={
       members:[
           {
               uname: name,
               email_adress: email,
               user_message: message,
               status: 'subscribed'
           }
       ]
   }
  const mcDataPost = JSON.stringify(mcData);

  const options={
      url:'https://us20.api.mailchimp.com/3.0/lists/8b6fa99e',
      method: 'POST',
      headers:{
          Authorization: 'auth 2b68aec7a78b41e0747a60b3dfa74a83-us20'
      },
      body: mcDataPost
  }
  if(name && email && message){
   request(options,(err,response, body) =>{
       if(err){
           res.json({error:err})
       }
       else{
           if(js){
               res.sendaStatus(200)
           }
           else{
               res.redirect('/success/html')
           }
       }
   })
  }
  else{
      res.status(404).send({message: 'failed!'})
  }


})
const PORT= process.env.PORT || 5000;

app.listen(PORT, console.log('server started!'));