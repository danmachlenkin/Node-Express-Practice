const fs = require('fs');
const Tour = require('../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

//Handling Requests

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'faild',
//       error: 'Invalid ID',
//     });
//   }
//   next();
// };

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: {
    //   tours,
    // },
  });
};

exports.addTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'Sucess',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.getSpecificTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    message: 'tour got updated...',
  });
};
