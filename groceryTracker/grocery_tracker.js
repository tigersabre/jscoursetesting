function groceryTracker() {
    let g1 = parseFloat(document.getElementById('grocery-1').value);
    let g2 = parseFloat(document.getElementById('grocery-2').value);
    let g3 = parseFloat(document.getElementById('grocery-3').value);
    let total = g1 + g2 + g3;
    document.getElementById('result').innerHTML = `The total amount is: $${total}`;
}