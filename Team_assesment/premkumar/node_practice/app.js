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