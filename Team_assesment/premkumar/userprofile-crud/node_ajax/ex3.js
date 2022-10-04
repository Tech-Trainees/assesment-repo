const express = require('express');
const app = express();
const fs = require('fs');
const bodyparser = require('body-parser');
var port = 8000;
const hostname = '127.0.0.1';
const path = require('path');
var cors =require('cors');
//import { readFile } from 'fs/promises';
// var json = JSON.parse(
//   await readFile(
//     new URL('./jsonFile.json',import.meta.url)
//   )
// );
console.log(json);
app.use(cors());
app.use(express.json());



app.get('/user',(req,res)=>{
	
  res.end(JSON.stringify(json));
});

app.post('/user', (req, res) => {
   
	json.push(req.body);
});


app.put('/user:id',(req,res)=>{
	
		for (var i = 0; i < json.length; i++) {
		  if (req.params.id == json[i].userId) {
			  json[i].statusMessage = req.body.statusMessage;
		  }
		}
});

app.put('/presence/user:id',(req,res)=>{
  console.log(req.body);
  console.log(json);
	
  for (var i = 0; i < json.length; i++) {
    if (req.params.id == json[i].userId) {
      json[i].presence = req.body.presence;
    }
  }
});

app.delete('/user:id',(req,res)=>{
  for (var i = 0; i < json.length; i++) {
    if (req.params.id == json[i].userId) {
      json.splice(i,1);
}
  }
});

 app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });

 var json=[{
  "userId" : "user001",
  "name"   : "Sukumar",
  "profilePicture" : "1.jpg",
  "statusMessage"  : "Work hard, travel harder.",
  "presence" : "1"
},
{
  "userId" :"user002",
  "name"   :"Kishore",
  "profilePicture" : "3.jpg",
  "statusMessage"  : "Live....Let Live.",
  "presence" : "2"
},
{
  "userId" :"user003",
  "name"   :"Mohan",
  "profilePicture" :"4.jpg",
  "statusMessage"  : "Love the life you live.",
  "presence" : "3"
},
{
  "userId" : "user004",
  "name"   : "Durga",
  "profilePicture" : "5.jpg",
  "statusMessage"  : "Ambition is the path to success",
  "presence" : "4"
},
{
  "userId" : "user005",
  "name"   : "Vishwas",
  "profilePicture" : "2.png",
  "statusMessage"  : "Life is a long lesson in humility",
  "presence" : "2"
}
];
 