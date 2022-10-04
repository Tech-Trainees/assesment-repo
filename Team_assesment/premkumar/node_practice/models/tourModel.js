const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name:{
      type:String,
      unique:true,
      required:[true,'A Tour must have a name'],
      trim:true

    },
    duration:{
        type:Number,
        required:[true, 'A tour must have a duration']
    },
    maxGroupSize:{
        type:Number,
        required:[true,'A tour must have a group size']
    },
    difficulty :{
        type:String,
        required:[true,'A tour must have difficulty level']
    },
    age:{
      type:Number,
      default:2.7
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
      type:Number,
      required:[true,'A Tour must have a price']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },    
    imageCover:{
        type:String,
        required:[true,'A tour must have a description']
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now(),
        select :false   //to hide in db and using for security purpose
    },
    startDates:[Date]
    
  })
  
  const Tour = mongoose.model('Tour',tourSchema)
  
//   const testTour = new Tour({
//     name:'The Peterbarker',
//     age:25,
//     price:568
//   });
  
//   testTour.save().then(doc =>{
//     console.log(doc);
//   }).catch(err=>{
//     console.log('Error :' , err);
//   });

  module.exports =Tour;