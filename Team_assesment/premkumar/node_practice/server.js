const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path : './config.env'});

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)

mongoose
//.connect(process.env.DATABASE_LOCAL,{
 .connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  //useCreateIndex:true,
  // useFindAndModify:false  //these two r not supported in mongoose@6
}).then (con =>{
 // console.log(con.connections);
  console.log('DB connected successfully...');
})

app.listen(process.env.PORT, () => {
  console.log('App running on 3000');
});

// const tourSchema = new mongoose.Schema({
//   name:{
//     type:String,
//     unique:true,
//     required:[true,'A Tour must have a name']
//   },
//   age:{
//     type:Number,
//     default:24
//   },
//   price:{
//     type:Number,
//     required:[true,'A Tour must have a price']
//   }
// })

// const Tour = mongoose.model('Tour',tourSchema)

// const testTour = new Tour({
//   name:'The Peterbarker',
//   age:25,
//   price:568
// });

// testTour.save().then(doc =>{
//   console.log(doc);
// }).catch(err=>{
//   console.log('Error :' , err);
// });

