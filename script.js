document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  if (username === 'b224400373@ogr.sakarya.edu.tr' && password === 'b224400373') {
    
    document.getElementById('message').innerText = 'Hoşgeldin' + "b224400373";
    
    setTimeout(function() {
      window.location.href = "anasayfa.html";
    }, 2000);
  } else {
    
    document.getElementById('message').innerText = 'Kullanıcı adı veya şifre yanlış!';
  }
});
