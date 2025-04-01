async function calculateDivider() {
  const vin = parseFloat(document.getElementById('vin').value);
  const r1 = parseFloat(document.getElementById('r1').value);
  const r2 = parseFloat(document.getElementById('r2').value);

  const response = await fetch('https://hwexpert-api.onrender.com/voltage-divider', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vin, r1, r2 })
  });

  const data = await response.json();
  document.getElementById('result').innerText = `Vout = ${data.vout} V`;
}
