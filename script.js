document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Formun varsayılan davranışını engelle
  
  // Kullanıcı adı ve şifre al
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Kullanıcı adı ve şifrenin doğru olup olmadığını kontrol et
  if (username === 'ayse' && password === '123456') {
    // Doğruysa giriş başarılı mesajını göster
    document.getElementById('message').innerText = 'Hoşgeldiniz ' + username;
    // 2 saniye sonra anasayfaya yönlendir
    setTimeout(function() {
      window.location.href = "anasayfa.html";
    }, 2000);
  } else {
    // Değilse hata mesajı göster
    document.getElementById('message').innerText = 'Kullanıcı adı veya şifre yanlış!';
  }
});
