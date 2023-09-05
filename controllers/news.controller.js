const Newsmodel = require("../models/news.model");
const ObjectId = require("mongoose").Types.ObjectId

// Create news function

exports.createNews = async (req, res) => {
  try {
    const file = req.file;
    // console.log(file);
    const { title, content, userID, categoryID, tags } = req.body;
    // console.log(typeof tags);

    if (!categoryID && !title && !content && !userID  && !tags ) {
      res.status(400).json({ message: " News Data can not be empty!" });
    }

    const user = new Newsmodel({
      userID: userID,
      categoryID: categoryID,
      image: file.filename,
      title: title,
      content: content,
      tags: tags.split(',')
    });
    

    const savedUser = await user.save();

    res.status(201).json({
      message: "News data created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "An error occurred while creating news data",
    });
  }
};

// Find a news function

exports.findNews = async (req, res) => {
  try {
    const user = await Newsmodel.findById(req.params.id);
    res.status(200).json({ message: "find a news successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//  Get all news function

exports.findAllNews = async (req, res) => {
    try {
      const user = await Newsmodel.find().populate("categoryID").populate("userID");
      res.status(200).json({ message: "find all news successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

// Update news function

exports.updateNews = async (req, res) => {
  const {id, title, content, isStatus,categoryID, tags } = req.body;
  const file = req.file;
  console.log(file);
  const user = await Newsmodel.findOne({_id:id});

  if (!user) {
    res.status(400).json({
      message: "News Data to update can not be empty!",
    });
  }
  if (file) {
    await Newsmodel.findByIdAndUpdate(id, {
      image: file.filename,
      title: title,
      categoryID: categoryID,
      content: content,
      isStatus: isStatus,
      tags: tags.split(',')
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `News data not found.`,
          });
        } else {
          res.json({ message: "News data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  } else {
    await Newsmodel.findByIdAndUpdate(id, {
      title: title,
      content: content,
      categoryID:categoryID,
      isStatus: isStatus,
      tags: tags.split(',')
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: `News data not found.`,
          });
        } else {
          res.json({ message: "News data updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "An error occurred while updating news data",
        });
      });
  }
};

// Delete news function

exports.destroyNews = async (req, res) => {
  const { id } = req.body;
  await Newsmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `News data not found.`,
        });
      } else {
        res.json({
          message: "News data deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred while deleting news data",
      });
    });
};


// like news function

exports.likeNews = async (req, res) => {
  try {
    const user = await Newsmodel.findById(req.body.id);
    const countlike = user.like

    user.like = countlike + 1
    user.save()
    res.status(200).json({ message: "likes updated successfully." });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while updating likes",
    });
  }
};

// share news function

exports.shareNews = async (req, res) => {
  try {
    const user = await Newsmodel.findById(req.body.id);
    const countshare = user.share
    user.share = countshare + 1
    user.save()
    res.status(200).json({ message: "shares updated successfully." });
  } catch (error) {
    res.status(404).json({
      message: "An error occurred while updating shares",
    });
  }
};

