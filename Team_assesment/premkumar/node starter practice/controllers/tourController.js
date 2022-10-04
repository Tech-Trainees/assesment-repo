const fs = require('fs')

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
exports.checkID = (req,res,next,val)=>{
  if(req.params.id*1>tours.length){
    return( res.status(404).json({
      status:'Failed',
      message:'ID is invalid'
    }));
  }
  next();
}

exports. checkBody = (req,res,next)=>{
  if(!req.body.name || !req.body.price){
    return res.status(400)
            .json({
                  status: 'fail',
                  message: 'Name or price is missing'
                  })
  }
  next()
}

exports. getALLTours = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  }

exports. getTour =(req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find( item => item.id === id);
  
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tour,
      },
    });
  }
exports. createTour =(req, res) => {
    const newId = tours.length + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        res.status(201).json({
          status: 'Creation success',
          data: {
            tours: newTour,
          },
        });
      }
    );
  }
exports. updateTour =(req, res) => {

    res.status(200).json({
      status: 'success',
      data: {
        tour: '<update>',
      },
    });
  }
exports. deleteTour = (req, res) => {
  
    res.status(204).json({
      status: 'successfully deleted',
      data:null
    });
  }