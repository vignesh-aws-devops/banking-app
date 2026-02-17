const express = require('express');
const app = express();
const port = 3000;

app.get('/credit-check', (req, res) => {
  res.json({ status: "Credit Score Approved" });
});

app.get('/loan-eligibility', (req, res) => {
  res.json({ status: "Loan Eligible" });
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Banking app running on port ${port}`);
});
