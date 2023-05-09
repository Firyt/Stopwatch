// Waktu yang diseting untuk Timer
var countDownDate = new Date("Mar 22, 2024 23:59:59").getTime();

// Update perhitungan mundur setiap 1 Detik
var x = setInterval(function() {

  // Untuk mendapatkan Informasi tentang: Tanggal, jam dan Menit hari Ini
  var now = new Date().getTime();
    
  // Mencari Informasi jarak antar Hari ini dan tanggal yang kita setting
  var distance = countDownDate - now;
    
  // Perhitungan untuk Hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output hasil didalam element id="coba dulu yekan"
  document.getElementById("coba dulu yekan").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Jika waktu habis, maka menulis suatu Teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Otanjoubi omedetou gozaimasu!";
  }
}, 1000);