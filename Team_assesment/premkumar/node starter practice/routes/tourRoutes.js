const express = require('express');
const tourController =require('./../controllers/tourController')
const {getALLTours,createTour,getTour,updateTour,deleteTour} =require('./../controllers/tourController')

const tourRouter = express.Router();
tourRouter.param('id', tourController.checkID)


// tourRouter.param('id',(req,res,next,val)=>{
//    console.log(`Tour id : ${val}`);
//    next();
// })

 tourRouter.route('/')
    .get(getALLTours)
    .post(tourController.checkBody, createTour)
    
 tourRouter.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)   

module.exports = tourRouter;    