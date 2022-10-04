const express = require('express');
const morgan = require('morgan')
const app = express();


const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

 //1.middleware ----------
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// 3rd party middleware
// app.use(morgan('dev'));
// app.use(morgan('tiny));

app.use(express.json());
app.use(express.static(`${__dirname}/public`))


app.use((req,res,next)=>{
    console.log("Hello...Its Middleware 1");
    next();
})
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
})


app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)

module.exports = app;
// app.listen(3000, () => {
//   console.log('App running on 3000');
// });

// app.get('/',(req,res)=>{
//     res
//     .status(200)
//     .json({name:"prem",  message:"hi"   })

// })

// app.post('/',(req,res)=>{ res.send("Post method")
//     // res
//     // .status(201)
//     // .json({name:"kum",  message:"hi"   })
//     // console.log(req.body);
// })



// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );




 // 2. route handlers ----------------

// const getALLTours = (req, res) => {
//     console.log(req.requestTime);

//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours: tours,
//       },
//     });
//   }

// const getTour =(req, res) => {
//     console.log(req.params);
//     const id = req.params.id * 1;
//     const tour = tours.find( item => item.id === id);
  
//     if (!tour) {
//       return res.status(404).json({
//         status: 'fail',
//         message: 'ID is invalid',
//       });
//     }
//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tour,
//       },
//     });
//   }
// const createTour =(req, res) => {
//     const newId = tours.length + 1;
//     const newTour = Object.assign({ id: newId }, req.body);
//     tours.push(newTour);
//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-simple.json`,
//       JSON.stringify(tours),
//       (err) => {
//         res.status(201).json({
//           status: 'Creation success',
//           data: {
//             tours: newTour,
//           },
//         });
//       }
//     );
//   }
// const updateTour =(req, res) => {
//     if (req.params.id * 1 > tours.length) {
//       return (res.status(404).json({
//         status: 'fail',
//         message: 'ID is invalid',
//       })
//       );
//     }
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour: '<update>',
//       },
//     });
//   }
// const deleteTour = (req, res) => {
//     if (req.params.id * 1 > tours.length) {
//       return (res.status(404).json({
//         status: 'fail',
//         message: 'ID is invalid',
//       })
//       );
//     }
//     res.status(204).json({
//       status: 'successfully deleted',
//       data:null
//     });
//   }

//   const getAllUsers= (req,res) =>{
//     res.status(500).json({
//         status:"error",
//         message:"There is no users"
//     })
//   }

//   const getUser= (req,res) =>{
//     res.status(500).json({
//         status:"error",
//         message:"There is no users"
//     })
//   }

//   const createUser= (req,res) =>{
//     res.status(500).json({
//         status:"error",
//         message:"There is no users"
//     })
//   }

//   const updateUser= (req,res) =>{
//     res.status(500).json({
//         status:"error",
//         message:"There is no users"
//     })
//   }

//   const deleteUser= (req,res) =>{
//     res.status(500).json({
//         status:"error",
//         message:"There is no users"
//     })
//   }

// app.get('/api/v1/tours', getALLTours);
// app.get('/api/v1/tours/:id',getTour );
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id',updateTour );
// app.delete('/api/v1/tours/:id',deleteTour);

//ROUTES===-------------------

// const tourRouter = express.Router();

//  tourRouter.route('/')
//     .get(getALLTours)
//     .post(createTour)
    
//  tourRouter.route('/:id')
//     .get(getTour)
//     .patch(updateTour)
//     .delete(deleteTour)   
 

// const userRouter = express.Router();

//  userRouter.route('/')
//     .get(getAllUsers)
//     .post(createUser)   

//  userRouter.route('/:id')
//     .get(getUser)
//     .patch(updateUser)
//     .delete(deleteUser)    



