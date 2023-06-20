const mongoose = require("mongoose");
const Movie = require("./Movie");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// embedding
listSchema.pre("save", async function (next) {
  const movie = this.content.map(async (id) => await Movie.findById(id));
  this.content = await Promise.all(movie);
  next();
});

const List = mongoose.model("List", listSchema);
module.exports = List;
