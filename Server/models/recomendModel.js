const mongoose = require("mongoose");

const reccomendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A tour must have less or equal then 40 characters"],
    minlength: [10, "A tour name must have more or equal than 10 characters"],
  },
  duration: {
    type: Number,
    required: [true, "Atour must have duration"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1.0, "Rating must be above or equal to 1.0"],
    max: [5.0, "Rating must be below or equal to 5.0"],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a cost"],
  },
  startLocation: {
    coordinates: [Number],
  },
});

// tourSchema.index({ price: 1, ratingsAverage: -1 });
// tourSchema.index({ slug: 1 });
// tourSchema.index({ startLocation: "2dsphere" });

// tourSchema.virtual("reviews", {
//   ref: "Review",
//   foreignField: "tour",
//   localField: "_id",
// });

// {
//   "_id": "5c88fa8cf4afda39709c2966",
//   "name": "The Sports Lover",
//   "duration": 14,
//   "price": 2997,
//   "startLocation": {
//     "coordinates": [-118.803461, 34.006072]
//   },
//   "ratingsAverage": 3.9,
//   "ratingsQuantity": 7
// }

// tourSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "reviews",
//     select: "- _v",
//     foreignField: "tour",
//     localField: "_id",
//   });
//   next();
// });

// tourSchema.pre('save', function () {
//   console.log('data saved');
// });

//QUERY MIDDLEWARE
// tourSchema.pre(/^find/, function (next) {
//   this.find({ secretTour: { $ne: true } });
//   this.start = Date.now();
//   next();
// });

// tourSchema.pre(/^find/, function (next) {
//   console.log("i reached", this.guides);
//   this.populate({
//     path: "guides",
//     select: "-__v",
//   });
//   next();
// });

// tourSchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds`);
//   // console.log(docs);
//   next();
// });

const Recommend = mongoose.model("Recommend", reccomendSchema);

module.exports = Recommend;
