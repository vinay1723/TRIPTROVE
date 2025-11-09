const express = require("express");
const cors = require("cors");
const app = express();
const rateLimiter = require("express-rate-limit");
const tourRouter = require("./routers/tourRouter");
const userRouter = require("./routers/userRouter");
const reviewRouter = require("./routers/reviewRouter");
const bookingRouter = require("./routers/bookingRoutes");
const viewRouter = require("./routers/viewRouter");
const recomendRouter = require("./routers/recommendRouters");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const path = require("path");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const req = require("express/lib/request");
const res = require("express/lib/response");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "https://triptrove-ergy.onrender.com", // Update to match your React app's URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "data:", "blob:", "https:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "data:"],
        scriptSrc: [
          "'self'",
          "https:",
          "http:",
          "blob:",
          "https://*.mapbox.com",
          "https://js.stripe.com",
          "https://m.stripe.network",
          "https://*.cloudflare.com",
        ],
        frameSrc: ["'self'", "https://js.stripe.com"],
        objectSrc: ["'none'"],
        styleSrc: ["'self'", "https:", "'unsafe-inline'"],
        workerSrc: [
          "'self'",
          "data:",
          "blob:",
          "https://*.tiles.mapbox.com",
          "https://api.mapbox.com",
          "https://events.mapbox.com",
          "https://m.stripe.network",
        ],
        childSrc: ["'self'", "blob:"],
        imgSrc: ["'self'", "data:", "blob:"],
        formAction: ["'self'"],
        connectSrc: [
          "'self'",
          "'unsafe-inline'",
          "data:",
          "blob:",
          "https://*.stripe.com",
          "https://*.mapbox.com",
          "https://*.cloudflare.com/",
          "https://bundle.js:*",
          "ws://127.0.0.1:*/",
        ],
        upgradeInsecureRequests: [],
      },
    },
  })
);

app.use(express.json());
app.use(cookieParser());

app.options("*", cors()); // Preflight response for all routes

// app.use("/", (req, res, next) => {
//   res.status(200).json({
//     status: "success",
//     message: "request successfully received",
//   });
//   next();
// });
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use("/images", express.static(path.join(__dirname, "public/img/users")));
app.get("/api/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "public/img/users", imageName);

  res.status(200).sendFile(imagePath, (err) => {
    if (err) {
      console.error(err);
      res.status(200).send("Image found found");
    }
  });
});

app.use(express.json());
app.use("/", viewRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/recommend", recomendRouter);
app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Cant t find ${req.originalUrl} on this server!`,
  // });

  // const err = new Error(`can't find the ${req.originalUrl} on this server`);
  // err.statusCode = 400;
  // err.status = 'failed';
  next(new AppError(`Cant t find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
