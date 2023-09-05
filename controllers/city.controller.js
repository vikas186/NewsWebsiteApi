const city = require("../models/city.model");
const Citymodel = require("../models/city.model");

// Create City function

exports.createCity = async (req, res) => {
    try {
      const { cityname, isStatus} = req.body;
  
      
      if (!cityname && !isStatus) {
        res.status(400).json({ message: "City data can not be empty!" });
      }
  
      const user = new Citymodel({
        cityname: cityname,
        isStatus: isStatus
      });
  
      const savedUser = await user.save();
  
      res.status(201).json({
        message: "city data created successfully!",
        user: savedUser,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || "An error occurred while creating user city data",
      });
    }
  };

  // Find a City function

  exports.findCity = async (req, res) => {
    try {
      const user = await Citymodel.findById(req.params.id);
      res.status(200).json({ message: "find a city successfully" });
    } catch (error) {
      res.status(404).json({
        message: "An error occurred while finding a city data",
      });
    }
  };


// Findall City function

exports.findAllCity = async (req, res) => {
  try {
    const user = await Citymodel.find();
    res.status(200).json({ message: "find all city successfully" });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while finding all city data",
    });
  }
};
  // Update City function

  exports.updateCity = async (req, res) => {
    if (!req.body) {
      res.status(400).json({
        message: " City Data to update can not be empty!",
      });
    }

    const { id, cityname, isStatus } = req.body;

  
    await Citymodel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `City data not found.`,
          });
        } else {
          res.json({ message: "City data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "An error occurred while updating city data",
        });
      });
  };

  // Delete city function
  
  exports.destroyCity = async (req, res) => {
    const { id} = req.body;
    await Citymodel.findByIdAndRemove(id, req.body)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `City data not found.`,
          });
        } else {
          res.json({
            message: "City data deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "An error occurred while deleting city data",
        });
      });
  };