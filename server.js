// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "build-better-react/build")));
//   // Handle React routing, return all requests to React app
//   app.get("/*", function (req, res) {
//     res.sendFile(
//       path.join(__dirname, "build-better-react/build", "index.html")
//     );
//   });
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));

const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "build", "index.html");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("/*", (req, res) => {
  res.sendFile(publicPath);
});
app.listen(port, () => {
  console.log("Server is up!");
});
