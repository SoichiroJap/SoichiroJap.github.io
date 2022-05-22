const odliczanie = () => {
    const mundial = new Date("November 21, 2022 11:00:00").getTime();
    const data = new Date().getTime();
    const czas = mundial - data;

    const sek = 1000;
    const min = sek * 60;
    const godz = min * 60;
    const dni = godz * 24;

    const dni2 = Math.floor(czas / dni);
    const godz2 = Math.floor((czas % dni) / godz);
    const min2 = Math.floor((czas % godz) / min);
    const sek2 = Math.floor((czas % min) / sek);

    document.querySelector(".dni").innerHTML = "" + dni2 + ":";
    document.querySelector(".godziny").innerHTML = "" + godz2 + ":";
    document.querySelector(".minuty").innerHTML = "" + min2 + ":";
    document.querySelector(".sekundy").innerHTML = sek2;
}

setInterval(odliczanie, 1000);