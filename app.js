const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/post", (req, res) => {
  const { name, description } = req.body;

  res.json({
    firstName: name,
    data: description,
  });
});

app.get("/api/thing", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
