<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = $_POST['ad'];
    $soyad = $_POST['soyad'];
    $email = $_POST['email'];
    $cinsiyet = $_POST['cinsiyet'];
    $konu = $_POST['konu'];
    $mesaj = $_POST['mesaj'];
    
    $to = "alici@example.com";
    $subject = "İletişim Formu";
    $message = "Adı: $ad\nSoyadı: $soyad\nE-posta: $email\nCinsiyet: $cinsiyet\nKonu: $konu\nMesaj: $mesaj";
    
    if (mail($to, $subject, $message)) {
        echo "Form başarıyla gönderildi.";
    } else {
        echo "Form gönderilirken bir hata oluştu.";
    }
} else {
    echo "Geçersiz istek.";
}

