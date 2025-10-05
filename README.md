# 🍽️ Analyze Food Photo & Transform Prompt Generator

**Analyze Food Photo & Transform Prompt Generator** adalah aplikasi web interaktif satu halaman untuk membantu fotografer makanan, kreator konten, dan pengguna AI Image Generator (seperti Midjourney, Leonardo, atau Suno) membuat *prompt* deskriptif yang realistis dan estetis secara otomatis.

Aplikasi ini menggunakan sistem **Prompt Skeleton System** yang menyusun kalimat berdasarkan struktur terarah seperti berikut:

[Objek Utama] [Aksi/Kondisi] di atas [Wadah/Sajian] dengan [Efek Dinamis],
diambil dari sudut [Sudut Kamera],
dihias dengan [Elemen Properti] di sekelilingnya,
menggunakan [Jenis Pencahayaan] dan [Tipe Latar Belakang],
dengan suasana [Gaya Suasana],
bertekstur sangat detail, hiper-realistis, 8K UHD, fokus tajam,
palet warna [Nuansa Warna],
gaya komposisi [Gaya Komposisi], kesan [Kata Kunci Emosi].
---
## ✨ **Fitur Utama**
✅ Dropdown interaktif untuk setiap elemen visual (Objek, Sudut, Pencahayaan, dll.)  
✅ Word bank terpisah untuk kemudahan pengembangan  
✅ Otomatis menghasilkan deskripsi *prompt* yang siap digunakan  
✅ Tombol “Copy to Clipboard”  
✅ Dibangun dengan HTML + JavaScript murni (tanpa framework)  
✅ Desain modern dengan TailwindCSS  

---

## 🧩 **Struktur Folder**
 /analyze-food-photo-prompt/
 - index.html # Tampilan utama
 - app.js # Logika utama (generate prompt, copy, event handling)
 - wordbank.js # Kumpulan kata / Word Bank untuk setiap slot


---

## 🚀 **Cara Menjalankan**
1. Download atau clone repository ini:
   ```bash
   git clone [https://github.com/ryfey/food_prompt_gen.git]
2. Buka file index.html langsung di browser (tidak butuh server).
3. gunakan langsung melalui : https://ryfey.github.io/food_prompt_gen/

Pilih nilai dari dropdown → klik Generate Prompt.

Salin hasil prompt menggunakan tombol Copy to Clipboard.

🧠 Contoh Hasil Prompt

Foto makanan chocolate lava cake dripping with sauce di atas ceramic plate dengan swirling steam, diambil dari sudut 45° angle, dihias dengan fresh herbs di sekelilingnya, menggunakan soft diffused side lighting dan dark textured backdrop, dengan suasana luxurious and elegant, bertekstur sangat detail, hiper-realistis, 8K UHD, fokus tajam, palet warna warm golden tones, gaya komposisi editorial flatlay, kesan indulgent.

🛠️ Teknologi yang Digunakan
- HTML5
- Vanilla JavaScript (ES6)
- TailwindCSS untuk styling responsif dan modern

📦 Lisensi
Proyek ini dirilis di bawah lisensi MIT License.
Silakan digunakan, dimodifikasi, dan dikembangkan lebih lanjut.

👨‍💻 Dibuat oleh
Rifai Syaban

✨ For creative AI food photography prompt exploration.
🌐 Rencana Pengembangan (Optional)
🌍 Multi-bahasa (Indonesia / English switcher)
💾 Simpan dan ekspor prompt ke file .txt
🧠 Tambah preset untuk jenis makanan tertentu (dessert, beverage, breakfast, dll.)
🎨 "Let your food photos tell stories — one prompt at a time."
