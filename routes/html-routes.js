const path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/center", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/center.html"));
  });
  app.get("/crystal", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/crystal.html"));
  });
  app.get("/rpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/rpg.html"));
  });
};
