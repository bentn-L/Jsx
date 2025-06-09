import "./App.css";

function App() {
  const isValid = true;

  const hasPromoCode = true;

  const isServerError = true;

  if (isServerError) {
    return (
      <>
        <p>Dogodio se error na serveru!</p>
      </>
    );
  }

  return (
    <>
      <h1>Rezultat kupnje</h1>
      <p>Vasa narudzba je</p>
      {isValid ? <p>USPJESNA</p> : <p>NEUSPJESNA</p>}
      {hasPromoCode && <p>Vas promo code je uspjesno iskoristen!</p>}
    </>
  );
}
export default App;
