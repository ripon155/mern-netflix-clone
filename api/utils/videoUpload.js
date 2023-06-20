const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

exports.imageUpload = upload.any();

// const storage1 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/video");
//   },
//   filename: function (req, file, cb) {
//     log(req.files);
//     const uniqueSuffix =
//       Date.now() + "-" + Math.round(Math.random() * 1e9) + ".mp4";
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });
// const upload1 = multer({ storage: storage1 });
// exports.videoUpload = upload1.single("video");

// const imUrl = `http://127.0.0.1:100/public/image/users/${fileName}`;
// req.body.image = fileName;

// await fs.unlinkSync(`public/image/${deletePro.image}`);
