export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const body = req.body;
  const fs = require('fs');
  const path = require('path');

  const nickname = body.refId || body.label || "neznamy";

  const paidFile = path.resolve('./paid.json');
  let data = [];

  if (fs.existsSync(paidFile)) {
    data = JSON.parse(fs.readFileSync(paidFile, 'utf8'));
  }

  if (!data.includes(nickname)) {
    data.push(nickname);
    fs.writeFileSync(paidFile, JSON.stringify(data, null, 2));
  }

  res.status(200).send('OK');
}
