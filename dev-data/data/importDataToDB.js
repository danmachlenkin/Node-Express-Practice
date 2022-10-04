const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB was successfully connected!'));

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/data/tours-simple.json`, 'utf-8', (err) =>
    console.log(`THIS IS NOT WORKING! ${err}`)
  )
);

const importData = async (req, res) => {
  try {
    await Tour.create(tours);
    console.log('Done uploading');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteAllDB = async (req, res) => {
  try {
    await Tour.deleteMany();
    console.log('Done deleting');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// deleteAllDB();
// importData();
