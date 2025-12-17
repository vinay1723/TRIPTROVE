const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
console.log("hello");
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception found");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("Database connected successfully");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
