const express = require('express');
const app = express();
const port = 3000;

app.get('/credit-check', (req, res) => {
  res.json({ status: "Credit Score Approved" });
});

app.get('/loan-eligibility', (req, res) => {
  res.json({ status: "Loan Eligible" });
});

app.listen(port, () => {
  console.log(`Banking app running on port ${port}`);
});
