const User = require("../models/User");
const jwt = require("jsonwebtoken");

const tokenGen = (id) => {
  return jwt.sign({ id: id }, "secrete", {
    expiresIn: "100d",
  });
};

exports.registration = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    const token = tokenGen(user._id);

    res.status(201).json({
      msg: "user registration successfull",
      token: token,
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      messsage: error,
    });
  }
};

exports.protectRoute = async (req, res, next) => {
  let token = req.headers["authorization"];

  try {
    if (!req.headers["authorization"]) {
      res.status(400).json({
        message: "you are not authorized",
      });
    }
    token = token = token.slice(1, token.length - 1);

    if (!token) {
      res.status(401).json({
        message: "you are not authorized",
      });
    }

    const decode = await jwt.verify(token, "secrete");

    const fuser = await User.findById(decode.id);
    if (!fuser) {
      res.status(401).json({
        message: "you are not authorized",
      });
    }

    req.user = fuser;
    next();
  } catch (error) {}
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: req.body.email }).select(
      "-isAdmin"
    );
    const correct = user.checkPassword(password, user.password);

    if (!user || !correct) {
      res.status(401).json({
        message: "incorrect email or password",
      });
    }

    const token = tokenGen(user._id);

    res.status(200).json({
      token: token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error,
    });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      res.status(400).json({
        message: "No User Found",
      });
    }
    res.status(200).json({
      message: "OK",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (req.body && req.params.id) {
      req.body.isAdmin = false;
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        upsert: true,
        new: true,
      }).select("-__v -password");

      res.status(200).json({
        message: "data successfully updated",
        data: updateUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.params.id == req.user._id) {
      await User.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({
        message: "Document deleted successfully! ",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Faild",
      error,
    });
  }
};

exports.allUser = async (req, res, next) => {
  try {
    if (!req.user.isAdmin || req.user.isAdmin) {
      let query = User.find().sort("-createdAt");
      if (req.query.limit) {
        query = query.limit(req.query.limit);
      }
      const user = await query.select("-__v");

      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json({
      message: "faild",
      error: error,
    });
  }
};

exports.userStatus = async (req, res, next) => {
  try {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "faild",
      error: new Error(),
    });
  }
};

exports.restricTo = (...role) => {
  return (req, res, next) => {
    // if (!role.includes(req.user.isAdmin)) {
    //   res.status(401).json({
    //     message: "you have not permission to delete the data",
    //   });
    // }
    next();
  };
};
