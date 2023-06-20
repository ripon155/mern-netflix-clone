const List = require("../models/List");

exports.createList = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const list = await List.create(req.body);
      res.status(201).json({
        message: "Successfully created",
        list,
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "Faild",
      error,
    });
  }
};

exports.deleteList = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const list = await List.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "list deleted",
        list,
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "Faild",
      error,
    });
  }
};

exports.getFilter = async (req, res, next) => {
  let list = [];
  const type = req.query.type;
  const genre = req.query.genre;
  try {
    if (type) {
      if (genre) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type, genre: genre } },
        ]);
        res.status(200).json({
          list,
        });
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type } },
        ]);
        res.status(200).json({
          list,
        });
      }
    } else {
      list = await List.aggregate([
        {
          $sample: { size: 10 },
        },
      ]);
      res.status(200).json({
        list,
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "faild",
      error,
    });
  }
};
