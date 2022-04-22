const express = require("express");
const ethers = require("ethers");

const app = express();

app.use(express.json());

const buy = (contract, amount) => {
return something
}
app.post("/api/buy", (req, res) => {
  const { contract, amount } = req.body;

  buy(contract, amount);
  res.json({
    contract,
    amount,
  })
});

app.post("/api/sell", (req, res) => {
  const { contract, amount } = req.body;

  res.json({
    contract,
    amount,
  })
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
