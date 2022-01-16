const PORT = process.env.PORT || 3000;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// Express setting
app.set("view engine", "ejs");

// Static resource rooting
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
// __dirname: 現在のフォルダから。
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamic resource root
app.use("/", require("./routes/index.js"));

// Execute web application
app.listen(PORT, () => {
  console.log(`Application listening at :${PORT}`);
});
