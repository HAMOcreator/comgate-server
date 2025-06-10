export default async function handler(req, res) {
  const { nickname } = req.query;

  if (!nickname) {
    return res.status(400).send("Missing nickname");
  }

  const params = new URLSearchParams();
  params.append("merchant", "495742");
  params.append("secret", "kpdj7DaJ7v6SHSsazlFc0g2NHzL4T4WZ");
  params.append("price", "130");
  params.append("curr", "CZK");
  params.append("label", `Punch bowl 🍹 - ${nickname}`);
  params.append("refId", `PB-${Date.now()}`);
  params.append("method", "ALL");
  params.append("country", "CZ");
  params.append("lang", "cs");
  params.append("prepareOnly", "true");
  params.append("redirectURL", "https://comgate-server.vercel.app/thankyou");
  params.append("notificationURL", "https://comgate-server.vercel.app/api/payment");

  const response = await fetch("https://payments.comgate.cz/v1.0/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const text = await response.text();

  const result = Object.fromEntries(text.split("&").map(x => x.split("=")));

  if (result.code === "0") {
    return res.redirect(result.redirect);
  } else {
    return res.status(500).send(`Error: ${result.message || "Unknown error"}`);
  }
}
