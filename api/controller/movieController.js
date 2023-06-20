const Movie = require("../models/Movie");
const fs = require("fs");

exports.getAllMovie = async (req, res, next) => {
  const type = req.query.type;

  try {
    if (req.user.isAdmin) {
      if (type === "series") {
        let movie = await Movie.find({ isSeries: true });
        res.status(200).json({
          total: movie.length,
          data: movie,
        });
      } else {
        let movie = await Movie.find();
        res.status(200).json({
          total: movie.length,
          data: movie,
        });
      }
    } else {
      res.status(403).json({ message: "you are not allowed" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.createNewMovie = async (req, res, next) => {
  try {
    if (req.files) {
      const imgfilename = req.files[0].filename;
      const videofilename = req.files[1].filename;
      if (imgfilename) {
        req.body.img = `http://127.0.0.1:8800/public/img/${imgfilename}`;
      }
      if (videofilename) {
        req.body.video = `http://127.0.0.1:8800/public/img/${videofilename}`;
      }
    }

    if (req.user.isAdmin) {
      const movie = await Movie.create(req.body);

      res.status(201).json({ movie });
    } else {
      res.status(403).json({ message: "you are not allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.getMovieById = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movie = await Movie.findById(req.params.id);

      res.status(200).json({
        data: movie,
      });
    } else {
      res.status(403).json({ message: "you are not allowed" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        upsert: true,
        new: true,
      });
      res.status(200).json({ movie });
    }
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error,
    });
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const movie = await Movie.findByIdAndDelete(req.params.id);

      const video = movie.video.split("/").slice(-1);
      fs.unlinkSync(`public/img/${video}`);

      const img = movie.img.split("/").slice(-1);
      fs.unlinkSync(`public/img/${img}`);

      res.status(200).json({
        message: "Document Deleted Successfully !",
        data: movie,
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getRandomMovie = async (req, res, next) => {
  try {
    const type = req.query.type;
    let movie;
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json({
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error: error,
    });
  }
};

exports.newAndPopular = async (req, res, next) => {
  try {
    const newandpo = await Movie.aggregate([
      {
        $sort: { createdAt: -1 },
      },
      { $limit: 10 },
    ]);

    res.status(200).json({ data: newandpo });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.kids = async (req, res, next) => {
  try {
    const newandpo = await Movie.aggregate([
      {
        $match: { limit: { $lt: 15 } },
      },
      {
        $sort: { createdAt: -1 },
      },
      { $limit: 10 },
    ]);

    res.status(200).json({ data: newandpo });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
