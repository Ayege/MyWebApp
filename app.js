const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Azure Pipelines!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
