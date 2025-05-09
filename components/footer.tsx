import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5 col-md-6">
            <Link href="/blog" className="text-decoration-none">
              <h2 className="fw-bold mb-3 text-dark">Anyak</h2>
            </Link>
            <p className="text-muted mb-4">
              Sebuah suara hati yang mengalir bebas, tidak terikat aturan, sebagai bentuk ekspresi diri.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 offset-lg-1">
            <h5 className="fw-bold mb-3">Navigasi</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/blog" className="text-decoration-none text-muted hover-primary">
                  Beranda
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/tentang" className="text-decoration-none text-muted hover-primary">
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-muted hover-primary">
                  Kategori
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/kontak" className="text-decoration-none text-muted hover-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 offset-lg-1">
            <h5 className="fw-bold mb-3">Kontak</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">
                <span className="fw-medium">Nama:</span> mmeldhy
              </li>
              <li className="mb-2 text-muted">
                <span className="fw-medium">Email:</span>{" "}
                <a href="mailto:mmeldofficial@gmail.com" className="text-decoration-none text-muted hover-primary">
                  mmeldofficial@gmail.com
                </a>
              </li>
              <li className="mb-2 text-muted">
                <span className="fw-medium">Instagram:</span>{" "}
                <a href="https://instagram.com/anyak.space" className="text-decoration-none text-muted hover-primary">
                  @anyak.space
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top mt-5 pt-4 text-center text-muted small">
          <p>&copy; {new Date().getFullYear()} Anyak. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
