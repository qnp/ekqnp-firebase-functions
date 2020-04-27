const functions = require("firebase-functions");

const debits = ["croches", "triolets", "quintolets", "septolets"];

exports.briseurDeGammes = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    const suiteLength = 2 + Math.floor(Math.random() * 3);
    const suite = [1];
    for (let i = 1; i < suiteLength; i++) {
      const number = 1 + Math.floor(Math.random() * 7);
      suite.push(number);
    }
    const debit = debits[Math.floor(Math.random() * 4)];
    const bonus =
      suite.length > 2 && suite.reduce((b, n) => b && n === 1, true);
    res.send(
      `🎶 ${suite.sort().join("  ")} en ${debit}${bonus ? " 😁" : ""} 🎶`
    );
  });
