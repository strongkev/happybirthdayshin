document.addEventListener("DOMContentLoaded", function() {
    // Tambahkan array background yang berisi path gambar latar belakang
    const backgrounds = [
        'background1.jpeg',
        'background2.jpg',
        'background3.jpg',
        // Tambahkan lebih banyak path gambar jika diperlukan
    ];

    // Fungsi untuk mendapatkan latar belakang acak dari array
    function getRandomBackground() {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        return backgrounds[randomIndex];
    }

    // Set latar belakang body dengan gambar acak
    document.body.style.backgroundImage = `url('${getRandomBackground()}')`;

    // Tambahkan event listener untuk navigasi smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tambahkan efek hover pada gambar
    const galleryImages = document.querySelectorAll('.character img, .weapon img, .artifact img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Tambahkan submit form handler
    const contactForm = document.querySelector('.contact-section form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Proses pengiriman formulir bisa ditambahkan di sini
        alert('Terima kasih! Pesan Anda telah terkirim.');
        // Atau kirim data formulir ke server dengan menggunakan Ajax atau metode lainnya.
    });
    
});
