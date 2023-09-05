const Categorymodel = require("../models/category.model");

// Create Category function

exports.createCategory = async (req, res) => {
  try {
    const { category, isStatus } = req.body;

    if (!category && !isStatus) {
      res.status(400).json({ message: "Category data can not be empty!" });
    }

    const user = new Categorymodel({
      category: category,
      isStatus: isStatus
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "Category data created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "An error occurred while creating user category data",
    });
  }
};

// Find a Category function

exports.findCategory = async (req, res) => {
  try {
    const user = await Categorymodel.findById(req.params.id);
    res.status(200).json({ message: "find a category successfully" });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while finding a user data",
    });
  }
};

// Findall Category function test``

exports.findAllCategory = async (req, res) => {
    try {
      const user = await Categorymodel.find();
      res.status(200).json({ message: "find all category successfully" });
    } catch (error) {
      res.status(404).json({
        message: "An error occurred while finding all Category data",
      });
    }
  };

// Update Category function

exports.updateCategory = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "category Data to update can not be empty!",
    });
  }

  const { id, category, isStatus } = req.body;

  await Categorymodel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Category data not found.`,
        });
      } else {
        res.json({ message: "Category data updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while updating Category data",
      });
    });
};

// Delete Category function

exports.destroyCategory = async (req, res) => {
  const { id } = req.body;
  await Categorymodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Category data not found.`,
        });
      } else {
        res.json({
          message: "Category data deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while deleting Category data",
      });
    });
};
