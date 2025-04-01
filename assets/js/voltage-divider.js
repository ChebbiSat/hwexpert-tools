function calculateDivider() {
  const vin = parseFloat(document.getElementById('vin').value);
  const r1 = parseFloat(document.getElementById('r1').value);
  const r2 = parseFloat(document.getElementById('r2').value);

  if (isNaN(vin) || isNaN(r1) || isNaN(r2) || r1 + r2 === 0) {
    document.getElementById('result').innerText = "Please enter valid values.";
    return;
  }

  const vout = vin * (r2 / (r1 + r2));
  document.getElementById('result').innerText = `Vout = ${vout.toFixed(2)} V`;
}
