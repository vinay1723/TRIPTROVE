const kmeans1 = require("ml-kmeans");
const { kmeans } = kmeans1;

// console.log(arr);

// Example tour data
const tours = [
  {
    _id: "5c88fa8cf4afda39709c2968",
    name: "The Beach Explorer",
    duration: 10,
    price: 1997,
    startLocation: {
      coordinates: [-123.456789, 36.778259],
    },
    ratingsAverage: 4.2,
    ratingsQuantity: 10,
  },
  {
    _id: "5c88fa8cf4afda39709c2966",
    name: "The Sports Lover",
    duration: 14,
    price: 2997,
    startLocation: {
      coordinates: [-118.803461, 34.006072],
    },
    ratingsAverage: 3.9,
    ratingsQuantity: 7,
  },
  {
    _id: "5c88fa8cf4afda39709c2955",
    name: "The Sea Explorer",
    duration: 7,
    price: 497,
    startLocation: {
      coordinates: [-80.185942, 25.774772],
    },
    ratingsAverage: 4.8,
    ratingsQuantity: 10,
  },
  {
    _id: "5c88fa8cf4afda39709c295b",
    name: "The Forest Hiker",
    duration: 5,
    price: 397,
    startLocation: {
      coordinates: [-105.252417, 39.7392],
    },
    ratingsAverage: 4.7,
    ratingsQuantity: 13,
  },
  {
    _id: "5c88fa8cf4afda39709c2967",
    name: "The Wine Taster",
    duration: 5,
    price: 1997,
    startLocation: {
      coordinates: [-122.4194, 37.7749],
    },
    ratingsAverage: 4.5,
    ratingsQuantity: 9,
  },
  {
    _id: "5c88fa8cf4afda39709c2968",
    name: "The City Wanderer",
    duration: 9,
    price: 1497,
    startLocation: {
      coordinates: [-74.005941, 40.712784],
    },
    ratingsAverage: 4.6,
    ratingsQuantity: 8,
  },
  {
    _id: "5c88fa8cf4afda39709c2969",
    name: "The Mountain Climber",
    duration: 11,
    price: 2997,
    startLocation: {
      coordinates: [-106.487202, 31.761878],
    },
    ratingsAverage: 4.9,
    ratingsQuantity: 6,
  },
  {
    _id: "5c88fa8cf4afda39709c296a",
    name: "The Snow Adventurer",
    duration: 8,
    price: 1997,
    startLocation: {
      coordinates: [-111.876183, 40.760779],
    },
    ratingsAverage: 4.8,
    ratingsQuantity: 5,
  },
  {
    _id: "5c88fa8cf4afda39709c296b",
    name: "The Desert Wanderer",
    duration: 10,
    price: 1997,
    startLocation: {
      coordinates: [-115.172813, 36.114647],
    },
    ratingsAverage: 4.2,
    ratingsQuantity: 7,
  },
  {
    _id: "5c88fa8cf4afda39709c296c",
    name: "The Coastal Explorer",
    duration: 7,
    price: 1197,
    startLocation: {
      coordinates: [-123.120738, 49.282729],
    },
    ratingsAverage: 4.6,
    ratingsQuantity: 11,
  },
];

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

// Extract features for clustering
const tourFeatures = normalizedTours.map((t) => [
  t.duration,
  t.price,
  t.startLocation.coordinates[0],
  t.startLocation.coordinates[1],
  t.ratingsAverage,
  t.ratingsQuantity,
]);

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
  const tour = tours.find((t) => t._id === tourId);
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
  "5c88fa8cf4afda39709c2966",
  normalizedTours
);
console.log("Recommended Tours:", JSON.stringify(recommendedTours, null, 2));
