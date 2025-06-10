# ComGate QR Payment Server

Tento projekt zajišťuje propojení mezi QR platbami a ComGate platební bránou. Používá Vercel pro hostování mezistránky a příjem ComGate notifikací.

## 🔗 Tok objednávky
1. Zákazník oskenuje QR kód → otevře stránku na Vercelu.
2. Zadá přezdívku → přesměrování na ComGate bránu.
3. Po zaplacení ComGate přesměruje zpět na děkovací stránku.
4. Server přijme notifikaci a zaznamená platbu.

## 📁 Struktura
- `/public` – statické soubory (logo, obrázky)
- `/pages/index.js` – mezistránka pro zadání přezdívky
- `/pages/thankyou.js` – děkovací stránka po platbě
- `/api/payment.js` – endpoint pro ComGate callback
- `paid.json` – seznam zaplacených přezdívek

## ⚙️ Nasazení
- Repo propojeno s Vercel.
- ENV proměnné (`COMGATE_SECRET`, `RETURN_URL`, atd.)

## 📌 Poznámky
- Platby se ověřují podle callbacku z ComGate.
- Uložené přezdívky jsou v `paid.json`.

