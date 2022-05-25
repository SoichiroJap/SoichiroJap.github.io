function wynik() {
    let wynik = 0;
    if (document.getElementById('c1').checked) { wynik++; }
    if (document.getElementById('c2').checked) { wynik++; }
    if (document.getElementById('c3').checked) { wynik++; }
    if (document.getElementById('c4').checked) { wynik++; }
    if (document.getElementById('c5').checked) { wynik++; }
    if (document.getElementById('c6').checked) { wynik++; }
    if (document.getElementById('c7').checked) { wynik++; }
    if (document.getElementById('c8').checked) { wynik++; }
    if (document.getElementById('c9').checked) { wynik++; }
    if (document.getElementById('c10').checked) { wynik++; }
    alert("Twój wynik to: "+wynik);
}