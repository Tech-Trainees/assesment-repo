//const fs = require('fs')
const Tour = require('./../models/tourModel')





// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//   );


// exports.checkID = (req,res,next,val)=>{
//   if(req.params.id*1>tours.length){
//     return( res.status(404).json({
//       status:'Failed',
//       message:'ID is invalid'
//     }));
//   }
//   next();
// }

// exports. checkBody = (req,res,next)=>{
//   if(!req.body.name || !req.body.price){
//     return res.status(400)
//             .json({
//                   status: 'fail',
//                   message: 'Name or price is missing'
//                   })
//   }
//   next()
// }

exports. getALLTours = async (req, res) => {
  try{
    console.log(req.query);
// 1.FILTERING
  const queryObj = { ...req.query };   //destructuring
  const fields = ['page','sort','limit','fields'];
  fields.forEach(ele => delete queryObj[ele]);

  //2. ADVANCE FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=>`${match}`)
    console.log((JSON.parse(queryStr)));

    let query = Tour.find((JSON.parse(queryStr)))

   //3.SORTING
   if(req.query.sort){
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
   } else{
    query = query.sort('-createdAt');
   }

   //4.FIELD LIMITING
   if(req.query.fields){
    const fields = req.query.fields.split(',').join(' ');
    query=query.select(fields);
   }
   else{
    query=query.select('-__v');
   }


    const tours = await query;
    // const tours = await Tour.find().where('duration').equals(5).where('difficulty').equals('easy');
   
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  }catch (error) {
    res.status(404).json({
      status:"fail",
      message: {error}
    });
  }
  }

exports. getTour =async (req, res) => {
  try{
   const tour =  await Tour.findById(req.params.id);
  //Tour.findOne({_id:req.params.id})


    //console.log(req.params);
  //  const id = req.params.id * 1;
    // const tour = tours.find( item => item.id === id);
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  }catch (err) {
    res.status(404).json({
      status:"fail",
      message:err
    });
  }
  }
exports. createTour = async (req, res) => {
 try{   
  const newTour = await Tour.create(req.body)

    // const newId = tours.length + 1;
    // const newTour = Object.assign({ id: newId }, req.body);
    // tours.push(newTour);
    // fs.writeFile(
    //   `${__dirname}/dev-data/data/tours-simple.json`,
    //   JSON.stringify(tours),
    //   (err) => {
        res.status(201).json({
          status: 'Creation success',
          data: {
            tours: newTour,
          },
        });
       } catch(err){
          res.status(400).json({
            status:'failed',
            message:err
          })
       }
    // );
  }
exports. updateTour =async (req, res) => {
  try{
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators : true
    })
    res.status(200).json({
      status: 'success',
      data: {
        tour
      },
    });
  } catch (err) {
    res.status(400).json({
      status:'failed',
      message:err
    })
  }
  }
exports. deleteTour = async (req, res) => {
  try{
      await Tour.findByIdAndDelete(req.params.id);
  
    res.status(204).json({
      status: 'successfully deleted',
      data:null
    });
  } catch (err) {
    res.status(400).json({
      status:'failed',
      message:err
    })
  }
  }