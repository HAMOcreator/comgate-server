import { useState } from 'react';

export default function Home() {
  const [nickname, setNickname] = useState('');

  const handleSubmit = () => {
    if (!nickname) return;
    const url = `https://payments.comgate.cz/v1.0/create?label=${encodeURIComponent(nickname)}&price=100`;
    window.location.href = url;
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Zadej svou přezdívku</h1>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="např. partyboj21"
        style={{ padding: 10, fontSize: 16 }}
      />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: 10, fontSize: 16 }}>
        Zaplatit
      </button>
    </div>
  );
}
