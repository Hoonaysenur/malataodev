window.onload = function() {
  gosterHakkimizda();
};


function gosterHakkimizda() {
  
  document.getElementById('icerik').innerHTML = `
    <h3>Hakkımızda</h3>
    <p>Merhaba, benim adım [İsminiz]. Kendimle alakalı bilgiler burada yer alacak.</p>
    <p>...</p>
  `;
}


document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault();
  gosterHakkimizda(); 
});


document.getElementById('iletisim').addEventListener('click', function(event) {
  event.preventDefault(); 
  gosterIletisim(); 
});


document.getElementById('sehrim').addEventListener('click', function(event) {
  event.preventDefault();
  gosterSehrim(); 
});


function gosterIletisim() {
  
  window.location.href = "iletisim.html";
}


function gosterSehrim() {
  
  window.location.href = "sehrim.html";
}


document.getElementById('hakkimizda').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = "anasayfa.html"; 
});


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
  const walk = (x - startX) * 3; 
  resimKonteyner.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function() {
  const basliklar = document.querySelectorAll('.miras-text h3');
  const menu = document.getElementById('miras-menu');

  basliklar.forEach(function(baslik, index) {
      const baslikId = 'baslik-' + index;
      const baslikAdi = baslik.textContent;

      const menuBaglanti = document.createElement('a');
      menuBaglanti.href = '#' + baslikId;
      menuBaglanti.textContent = baslikAdi;
      menu.appendChild(menuBaglanti);

      baslik.id = baslikId;

      menuBaglanti.addEventListener('click', function(event) {
          event.preventDefault();
          const hedefId = this.getAttribute('href').substring(1); 
          const hedef = document.getElementById(hedefId); 
          hedef.scrollIntoView({ behavior: 'smooth' }); 

          
          window.location.href = this.getAttribute('href');
      });
  });

  const menuBaglantilar = document.querySelectorAll('#miras-menu a');
  menuBaglantilar.forEach(function(baglanti) {
      baglanti.addEventListener('click', function(event) {
          event.preventDefault();
          const hedefId = this.getAttribute('href').substring(1); 
          const hedef = document.getElementById(hedefId); 
          hedef.scrollIntoView({ behavior: 'smooth' }); 

          
          window.location.href = this.getAttribute('href');
      });
  });
});




function buyukResmiGoster(resimURL) {
  
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  
  const modalImage = document.createElement('img');
  modalImage.src = resimURL;
  modalImage.alt = "Büyük Resim";
  modalImage.classList.add('modal-image');

  
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', function() {
    modalContainer.remove();
  });

  
  modalContainer.appendChild(modalImage);
  modalContainer.appendChild(closeButton);

  
  document.body.appendChild(modalContainer);
}

document.addEventListener("DOMContentLoaded", function() {
  
  const images = document.querySelectorAll('.miras-images img');

  
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      
      buyukResmiGoster(this.src);
    });
  });
});
