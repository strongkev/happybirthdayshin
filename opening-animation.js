document.addEventListener("DOMContentLoaded", function() {
    // Set timeout untuk menyembunyikan animasi pembukaan setelah beberapa detik
    setTimeout(function() {
        var openingAnimation = document.querySelector('.opening-animation');
        var content = document.getElementById('content');
        
        openingAnimation.style.display = 'none'; // Sembunyikan animasi pembukaan
        content.classList.remove('hidden'); // Tampilkan konten website

        // Tambahkan kelas animasi untuk konten website
        content.classList.add('fadeIn');
    }, 5000); // Ubah angka ini sesuai dengan durasi animasi pembukaan
});
