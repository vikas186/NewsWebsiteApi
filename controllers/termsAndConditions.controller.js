const TermsAndConditionsmodel = require("../models/termsAndConditions.model");

// Create TermsAndConditions function

exports.createTermsAndConditions = async (req, res) => {
  try {
    const { title, time, content } = req.body;

    if (!title && !content && !time) {
      res.status(400).json({ message: "Content can not be empty!" });
    }

    const user = new TermsAndConditionsmodel({
      title:title,
      time:time,
      content:content
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: " data created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "An error occurred while creating user data",
    });
  }
};

// Find a TermsAndConditions function

exports.findTermsAndConditions = async (req, res) => {
  try {
    const user = await TermsAndConditionsmodel.findById(req.params.id);
    res.status(200).json({ message: "find a successfully" });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while finding user data",
    });
  }
};

// Findall TermsAndConditions function

exports.findAllTermsAndConditions = async (req, res) => {
    try {
      const user = await TermsAndConditionsmodel.find();
      res.status(200).json({ message: "find all successfully" });
    } catch (error) {
      res.status(404).json({
        message: "An error occurred while finding all user data",
      });
    }
  };

// Update TermsAndConditions function

exports.updateTermsAndConditions = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Data to update can not be empty!",
    });
  }

  const { id, title, content, time } = req.body;

  await TermsAndConditionsmodel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: ` data not found for updation.`,
        });
      } else {
        res.json({ message: " data updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while updating user data",
      });
    });
};

// Delete TermsAndConditions function

exports.destroyTermsAndConditions = async (req, res) => {
  const { id } = req.body;
  await TermsAndConditionsmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: ` data not found.`,
        });
      } else {
        res.json({
          message: " data deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while deleting user data",
      });
    });
};
