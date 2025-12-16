let puan = prompt("Sınav Notunuzu Giriniz");

if (puan >= 90 && puan <= 100) {
  console.log(`Bravo! Pekiyi!`);
}
else if (puan >= 80 && puan <= 89) {
  console.log(`Tebrikler! İyi!`);
}
else if (puan >= 70 && puan <= 79) {
  console.log(`Daha İyisi Mümkün! Orta!`);
}
else if (puan >= 60 && puan <= 69) {
  console.log(`Daha Çok Çaba Gerek! Geçti!`);
}
else if (puan >= 50 && puan <= 59) {
  console.log(`Geçtin Ama Dikkat! Geçer!`);
}
else {
  console.log(`Maalesef Başarısız! Kaldı!`);
}
