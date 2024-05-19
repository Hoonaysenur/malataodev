// iletisim.js

function formDenetle() {
    var ad = document.getElementById('ad').value;
    var soyad = document.getElementById('soyad').value;
    var email = document.getElementById('email').value;
    var cinsiyetBay = document.getElementById('bay').checked;
    var cinsiyetBayan = document.getElementById('bayan').checked;
    var konu = document.getElementById('konu').value;
    var mesaj = document.getElementById('mesaj').value;

    if (ad === '' || soyad === '' || email === '' || (!cinsiyetBay && !cinsiyetBayan) || konu === '' || mesaj === '') {
        alert('Lütfen tüm alanları doldurun.');
        return false; 
    }

    return true; 
}

function hakkimizdaSayfasinaYonlendir() {
    window.location.href = "anasayfa.html";
}

document.getElementById('hakkimizda').addEventListener('click', function(event) {
    event.preventDefault();
    hakkimizdaSayfasinaYonlendir();
});

