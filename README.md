**Persyaratan Sistem**
**Bahan yang Diperlukan:**

1. Python 3.8 atau lebih baru
2. Django 4.2 atau lebih baru
3. Git (untuk manajemen versi)
4. Web browser modern (Chrome/Firefox/Edge)

**Cara Instalasi Lingkungan Virtual**
Lingkungan Virtual digunakan untuk mengisolasi dependensi proyek. Berikut langkah-langkahnya:

1. **Buka Terminal/CMD:**
   
   # Buat folder proyek
    mkdir django_timer
    cd django_timer
   
2. **Buat Lingkungan Virtual:**
   python -m venv venv

3. **Aktifkan Lingkungan Virtual:**
   **Windows:**
   venv\Scripts\activate
   **Linux/macOS:**
   source venv/bin/activate

4. **Instal Dependensi:**
   pip install django==4.2


**Dokumentasi Program**
1. Pendahuluan
Aplikasi ini adalah timer berbasis web dengan antarmuka modern yang memiliki fitur:

Pengaturan durasi timer (10-60 menit)

Break timer otomatis (5-15 menit)

Animasi latar belakang gelombang (wave)

Notifikasi interaktif

2. **Struktur Berkas**

django_timer/
├── timer_project/       # Konfigurasi utama proyek
│   ├── settings.py      # Pengaturan aplikasi
│   └── urls.py         # Rute URL
│
├── timer_app/           # Aplikasi timer
│   ├── static/          # CSS, JS, dan gambar
│   ├── templates/       # File HTML
│   └── views.py        # Logika tampilan
│
├── manage.py            # Skrip pengelola Django
└── requirements.txt     # Daftar dependensi


3. **Cara Menjalankan Aplikasi**

   - Clone Repositori:
     git clone https://github.com/bittbugss/django-timer-app.git
   - Migrasi Basis Data:
     python manage.py migrate
   - Jalankan Server:
     python manage.py runserver
   - Akses di Browser:
     http://localhost:8000


4.** Penjelasan Antarmuka
Screenshot Antarmuka**

Display Timer: Menampilkan hitungan mundur dalam format MM:SS

Tombol Kontrol:

▶ Start: Memulai timer

⏸ Pause: Menjeda timer

⏹ Reset: Mengulang ke waktu awal

Preset Waktu: Tombol cepat untuk memilih durasi (10-60 menit)

Break Timer: Tombol untuk memilih durasi istirahat (5-15 menit)

5. Teknologi yang Digunakan
Frontend: HTML5, CSS3 (dengan animasi CSS), JavaScript

Backend: Django 4.2

Desain: Flat UI dengan gradien dinamis

6. FAQ (Pertanyaan Umum)
Q: Bagaimana cara mengganti warna tema?
A: Ubah nilai variabel CSS di style.css:

:root {
  --primary-color: #2a2a72; /* Warna utama */
  --secondary-color: #009ffd; /* Warna sekunder */
}

Q: Mengapa timer tidak berjalan?
A: Pastikan:

Server Django sedang berjalan

Tidak ada error di konsol browser

Tombol Start telah diklik

Q: Bagaimana cara menambahkan preset waktu baru?
A: Tambahkan tombol di index.html:

<button class="preset-btn" onclick="setTime(15)">15m</button>








IMG :
![image](https://github.com/user-attachments/assets/eae550dd-14fd-4104-86be-b0ce0c878489)
