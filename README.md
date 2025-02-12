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
     git clone https://github.com/username/repo.git




IMG :
![image](https://github.com/user-attachments/assets/eae550dd-14fd-4104-86be-b0ce0c878489)
