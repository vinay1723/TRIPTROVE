const Recommend = require("./../models/recomendModel");
const kmeans1 = require("ml-kmeans");
const { kmeans } = kmeans1;

exports.getRecommendedTours = async (req, res, next) => {
  console.log("before error");
  const tours = await Recommend.find();
  // const tours = JSON.parse(tours1);
  console.log(typeof tours);
  // const tour1 = await tours;
  console.log(typeof tours[0].startLocation.coordinates[0]);
  console.log(typeof tour1);
  console.log(tours[0].startLocation.coordinates[0]);
  function normalizeTours(tours) {
    const maxDuration = Math.max(...tours.map((t) => t.duration));
    const maxPrice = Math.max(...tours.map((t) => t.price));
    const maxRating = Math.max(...tours.map((t) => t.ratingsAverage));
    const maxNumReviews = Math.max(...tours.map((t) => t.ratingsQuantity));

    return tours.map((t) => ({
      ...t,
      duration: t.duration / maxDuration,
      price: t.price / maxPrice,
      ratingsAverage: t.ratingsAverage / maxRating,
      ratingsQuantity: t.ratingsQuantity / maxNumReviews,
    }));
  }

  const normalizedTours = normalizeTours(tours);

  console.log(normalizedTours[0]._doc.startLocation.coordinates);

  // Extract features for clustering
  const tourFeatures = normalizedTours.map((t) => [
    t._doc.duration,
    t._doc.price,
    t._doc.startLocation.coordinates[0],
    t._doc.startLocation.coordinates[1],
    t._doc.ratingsAverage,
    t._doc.ratingsQuantity,
  ]);
  console.log("tourFeatures:-", tourFeatures);
  // Number of clusters (k)
  const k = 3;

  // Perform K-means clustering
  const clusters = kmeans(tourFeatures, k);

  // Assign clusters to tours
  normalizedTours.forEach((tour, index) => {
    tour.cluster = clusters.clusters[index];
  });

  console.log("Clustered Tours:", JSON.stringify(normalizedTours, null, 2));

  function recommendTours(tourId, tours) {
    console.log("recommend function tours:-", tours);
    console.log(typeof tours[0]._doc._id);
    console.log("tourid:-", tours[0]._doc._id.toString());
    console.log(typeof tours[0]._doc._id.toString());
    const tour = tours.find((t) => t._doc._id.toString() === tourId);
    if (!tour) {
      console.error(`Tour with ID ${tourId} not found.`);
      return [];
    }

    console.log(`Tour with ID ${tourId} is in cluster ${tour.cluster}`);

    const recommended = tours.filter(
      (t) => t.cluster === tour.cluster && t._id !== tourId
    );
    console.log(
      `Tours in the same cluster:`,
      JSON.stringify(recommended, null, 2)
    );

    return recommended;
  }

  const recommendedTours = recommendTours(
    "5c88fa8cf4afda39709c295a",
    normalizedTours
  );
  console.log("absolute:-", recommendedTours);
  console.log("Recommended Tours:", JSON.stringify(recommendedTours, null, 2));
  // console.log(result);
  // console.log(typeof result);
  const result1 = recommendedTours.map((tour) => tour._doc._id);
  const result = JSON.stringify(result1);
  console.log(result);
  res.status(200).json({
    status: "success",
    data: result1,
  });
};
