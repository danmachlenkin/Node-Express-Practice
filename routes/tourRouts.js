const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

router.route('/').get(tourController.getTours).post(tourController.addTour);
router
  .route('/:id')
  .get(tourController.getSpecificTour)
  .patch(tourController.updateTour);

module.exports = router;
