// Anasayfa yüklendiğinde, Hakkımızda içeriği gösterilsin
window.onload = function() {
  gosterHakkimizda();
};

// Hakkımızda içeriğini gösteren fonksiyon
function gosterHakkimizda() {
  // Hakkımızda içeriğini göster
  document.getElementById('icerik').innerHTML = `
    <h3>Hakkımızda</h3>
    <p>Merhaba, benim adım [İsminiz]. Kendimle alakalı bilgiler burada yer alacak.</p>
    <p>...</p>
  `;
}

// Hakkımızda öğesine tıklandığında Hakkımızda içeriği gösterilsin
document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  gosterHakkimizda(); // Hakkımızda içeriğini göster
});

// İletişim öğesine tıklandığında İletişim içeriği gösterilsin
document.getElementById('iletisim').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  gosterIletisim(); // İletişim içeriğini göster
});

// Şehrim öğesine tıklandığında Şehrim içeriği gösterilsin
document.getElementById('sehrim').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  gosterSehrim(); // Şehrim içeriğini göster
});

// İletişim içeriğini gösteren fonksiyon
function gosterIletisim() {
  // İletişim içeriğini göstermek için direkt olarak "iletisim.html" dosyasını yükleyebiliriz
  window.location.href = "iletisim.html";
}

// Şehrim içeriğini gösteren fonksiyon
function gosterSehrim() {
  // Şehrim içeriğini göstermek için direkt olarak "sehrim.html" dosyasını yükleyebiliriz
  window.location.href = "sehrim.html";
}

// Hakkımızda sayfasına dönme işlevi
document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  window.location.href = "anasayfa.html"; // Hakkımızda sayfasına dön
});

// Resmi kaydırmak için gerekli kod
var resimKonteyner = document.getElementById('resimKonteyner');
var startX;
var scrollLeft;

resimKonteyner.addEventListener('mousedown', function(e) {
  startX = e.pageX - resimKonteyner.offsetLeft;
  scrollLeft = resimKonteyner.scrollLeft;
  resimKonteyner.style.cursor = 'grabbing';
});

resimKonteyner.addEventListener('mouseleave', function() {
  resimKonteyner.style.cursor = 'grab';
});

resimKonteyner.addEventListener('mouseup', function() {
  resimKonteyner.style.cursor = 'grab';
});

resimKonteyner.addEventListener('mousemove', function(e) {
  if (!startX) return;
  e.preventDefault();
  const x = e.pageX - resimKonteyner.offsetLeft;
  const walk = (x - startX) * 3; // Hızı ayarlamak için bir faktör
  resimKonteyner.scrollLeft = scrollLeft - walk;
});

// Resme tıklandığında büyük resmi gösterme fonksiyonu
function buyukResmiGoster(resimURL) {
  // Büyük resmin container'ını oluştur
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  // Büyük resmi oluştur
  const modalImage = document.createElement('img');
  modalImage.src = resimURL;
  modalImage.alt = "Büyük Resim";
  modalImage.classList.add('modal-image');

  // Resmin kapatma düğmesini oluştur
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', function() {
    modalContainer.remove();
  });

  // Büyük resmi container'a ekle
  modalContainer.appendChild(modalImage);
  modalContainer.appendChild(closeButton);

  // Büyük resmi sayfaya ekle
  document.body.appendChild(modalContainer);
}

document.addEventListener("DOMContentLoaded", function() {
  // Resimleri seç
  const images = document.querySelectorAll('.miras-images img');

  // Her resme tıklama olayı ekle
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      // Büyük resmi göster
      buyukResmiGoster(this.src);
    });
  });
});
