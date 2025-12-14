
javascript
// Variabel
let myName = "Gian Hestavianto";
const myAge = 17; // ganti dengan umur Anda

// Tampilkan di console
console.log("Nama:", myName);
console.log("Umur:", myAge);

// Ubah isi elemen HTML
document.getElementById("nama-saya").innerHTML = "Halo, Saya " + myName;
document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan suka belajar pemrograman.";

// Fungsi tombol
function showAlert() {
    alert("Anda telah mengklik tombol!");
}
