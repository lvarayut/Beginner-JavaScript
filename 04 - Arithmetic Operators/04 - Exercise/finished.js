function calculateChange(price) {
  const fiveCoins = Math.floor(price / 5);
  const oneCoins  = Math.floor(price % 5);
  console.log(`Five coins: ${fiveCoins}, one coins: ${oneCoins}`);
}