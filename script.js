document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  if (username === 'aysenur.korkut1@ogr.sakarya.edu.tr' && password === 'b224400373') {
    
    document.getElementById('message').innerText = 'Hoşgeldin' + password;
    
    setTimeout(function() {
      window.location.href = "anasayfa.html";
    }, 2000);
  } else {
    
    document.getElementById('message').innerText = 'Kullanıcı adı veya şifre yanlış!';
  }
});
