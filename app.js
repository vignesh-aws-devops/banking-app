const express = require('express');
const app = express();
const port = 3000;

// Home UI
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Banking App v2</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            background-color: #f4f6f8;
          }
          h1 {
            color: #2c3e50;
          }
          button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
          }
          #result {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            color: green;
          }
        </style>
      </head>
      <body>
        <h1>Banking Application - Version 2 🚀</h1>
        <button onclick="checkCredit()">Credit Check</button>
        <button onclick="checkLoan()">Loan Eligibility</button>
        <div id="result"></div>

        <script>
          function checkCredit() {
            fetch('/credit-check')
              .then(res => res.json())
              .then(data => {
                document.getElementById('result').innerText = data.status;
              });
          }

          function checkLoan() {
            fetch('/loan-eligibility')
              .then(res => res.json())
              .then(data => {
                document.getElementById('result').innerText = data.status;
              });
          }
        </script>
      </body>
    </html>
  `);
});

app.get('/credit-check', (req, res) => {
  res.json({ status: "Credit Score Approved ✅ (v2)" });
});

app.get('/loan-eligibility', (req, res) => {
  res.json({ status: "Loan Eligible 💰 (v2)" });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Banking app v2 running on port ${port}`);
});
