const Tagmodel = require("../models/tag.model");

// Create Tag function

exports.createtag = async (req, res) => {
  try {
    const { tag, isStatus } = req.body;

    if (!tag && !isStatus) {
      res.status(400).json({ message: "Tag can not be empty!" });
    }

    const user = new Tagmodel({
      tag: tag,
      isStatus: isStatus,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "Tag created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "An error occurred while creating user Tag",
    });
  }
};

// Find a tag function

exports.findTag = async (req, res) => {
  try {
    const user = await Tagmodel.findById(req.params.id);
    res.status(200).json({ message: "Find a tag successfully" });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while finding a tag",
    });
  }
};

// Findall tag function

exports.findAllTag = async (req, res) => {
    try {
      const user = await Tagmodel.find();
      res.status(200).json({ message: "Find all tag successfully" });
    } catch (error) {
      res.status(404).json({
        message: "An error occurred while finding all tag",
      });
    }
  };

// Update tag function

exports.updateTag = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Tag to update can not be empty!",
    });
  }

  const { id, tag, isStatus } = req.body;

  await Tagmodel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Tag data not found.`,
        });
      } else {
        res.json({ message: "Tag data updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while updating tag",
      });
    });
};

// Delete tag function

exports.destroyTag = async (req, res) => {
  const { id } = req.body;
  await Tagmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Tag data not found.`,
        });
      } else {
        res.json({
          message: "Tag data deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while deleting a tag",
      });
    });
};
