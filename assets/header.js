const links = document.querySelector(".main_nav");
const navToggle = document.querySelector(".navbar_toggle");

function toggleNav() {
    links.classList.toggle("show_nav");
    // menambahkan sedikit animasi ketika icons hamburger di klik sebagai code berikut (navbar_toggle)
    links.classList.toggle("animate_nav");
}

navToggle.addEventListener('click', toggleNav);

// Menerapkan untuk menyesuaikan tampilan navbar_toggle sesuai dengan ukuran layar (responsive di berbagai ukuran)
function handleResize() {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block'; // Tampilkan tombol toggle saat tidak responsif
    } else {
        navToggle.style.display = 'none'; // Sembunyikan tombol toggle saat responsif
        //navigasi ditampilkan saat lebar layar lebih besar dari 768px
        if (!links.classList.contains("show_nav")) {
            links.classList.remove("show_nav");
        }
    }
}

// Panggil fungsi handleResize saat halaman dimuat dan saat jendela diubah ukurannya
window.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('resize', handleResize);


// Jalankan fungsi setelah halaman dimuat sepenuhnya
window.addEventListener('load', function() {
    // Dapatkan elemen <body>
    const body = document.querySelector('body');
    // Tambahkan kelas "loaded" setelah halaman dimuat sepenuhnya
    body.classList.add('loaded');
  });
  