const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");
const User = require("../models/userModel");
const Review = require("../models/reviewModel");
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
      trim: true,
      maxlength: [40, "A tour must have less or equal then 40 characters"],
      minlength: [10, "A tour name must have more or equal than 10 characters"],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, "Atour must have duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have group size"],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either easy,medium,hard",
      },
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
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
      },
      message: "Discount price ({VALUE}) should be below regular price",
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "A tour must have Description"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "Image is required"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    // reviews: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Review",
    //   },
    // ],
    startLocation: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    startDates: [Date],
    secreatTour: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: "2dsphere" });

tourSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "tour",
  localField: "_id",
});

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
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.pre(/^find/, function (next) {
  console.log("i reached", this.guides);
  this.populate({
    path: "guides",
    select: "-__v",
  });
  next();
});

tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds`);
  // console.log(docs);
  next();
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
