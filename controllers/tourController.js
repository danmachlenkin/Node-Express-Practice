const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

//Handling Requests

exports.checkInputData = (req,res,next)=> {
      if(req.body === ' '){
        return res.status(401).json({
          message:'failed to add tour',
          reason: 'no data recived'
        })
      }
      next();
}

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`)
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'faild',
      error: 'Invalid ID',
    });
  }
  next();
};

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.addTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = { id: newID, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'succes',
        data: {
          addedTour: newTour,
        },
      });
    }
  );
};

exports.getSpecificTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    message: 'tour got updated...',
  });
};
