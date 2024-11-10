// pages/index.js
import Head from "next/head";
// import "../styles/global.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sistem Informasi Mahasiswa</title>
        <meta
          name="description"
          content="Platform Sistem Informasi Mahasiswa yang lengkap dan mudah diakses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <header className="header">
          <h1>Sistem Informasi Mahasiswa</h1>
          <p>Portal informasi akademik untuk mahasiswa.</p>
          <a href="#fitur" className="button">
            Explore Features
          </a>
        </header>

        <section id="about" className="section">
          <h2>Tentang Sistem</h2>
          <p>
            Sistem Informasi Mahasiswa dirancang untuk memudahkan akses
            informasi akademik, jadwal kuliah, nilai, dan data pribadi mahasiswa
            dengan mudah dan cepat.
          </p>
        </section>

        <section id="fitur" className="section">
          <h2>Fitur Utama</h2>
          <div className="featuresContainer">
            <div className="featureCard">
              <h3>Jadwal Kuliah</h3>
              <p>
                Temukan jadwal kuliah dan perubahan jadwal secara real-time.
              </p>
            </div>
            <div className="featureCard">
              <h3>Transkrip Nilai</h3>
              <p>Akses nilai dan histori akademik Anda kapan saja.</p>
            </div>
            <div className="featureCard">
              <h3>Pengumuman Kampus</h3>
              <p>Selalu dapatkan informasi terbaru mengenai kegiatan kampus.</p>
            </div>
            <div className="featureCard">
              <h3>Informasi Dosen</h3>
              <p>Lihat profil dosen dan kontak mereka untuk konsultasi.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Kontak Kami</h2>
          <p>
            Untuk informasi lebih lanjut, hubungi admin di{" "}
            <a href="mailto:info@universitas.ac.id">info@universitas.ac.id</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Sistem Informasi Mahasiswa. All rights reserved.</p>
      </footer>
    </div>
  );
}
