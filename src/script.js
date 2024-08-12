document.getElementById('priceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const price = parseFloat(document.getElementById('price').value);
    const volume = parseFloat(document.getElementById('volume').value);

    if (!isNaN(price) && !isNaN(volume) && volume > 0) {
        const pricePerLiter = (price / volume) * 1000;
        document.getElementById('result').textContent = `Preço por Litro: R$ ${pricePerLiter.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = "Por favor, insira valores válidos.";
    }
});
