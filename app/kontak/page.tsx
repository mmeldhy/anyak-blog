export default function KontakPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="fw-bold text-center mb-5">Hubungi Kami</h1>

          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4">Kirim Pesan</h2>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nama
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Nama lengkap Anda" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="email@anda.com" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subjek
                      </label>
                      <input type="text" className="form-control" id="subject" placeholder="Subjek pesan Anda" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Pesan
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <div>
                  <h2 className="h4 fw-bold mb-4">Informasi Kontak</h2>

                  <p className="text-muted mb-5">
                    Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi kami melalui formulir di samping atau
                    menggunakan informasi kontak di bawah ini.
                  </p>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="contact-icon-wrapper me-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-1">Email</h3>
                        <p className="text-muted mb-0">
                          <a href="mailto:mmeldofficial@gmail.com" className="text-decoration-none text-muted">
                            mmeldofficial@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="contact-icon-wrapper me-3">
                        <i className="fab fa-instagram"></i>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-1">Instagram</h3>
                        <p className="text-muted mb-0">
                          <a href="https://instagram.com/anyak.space" className="text-decoration-none text-muted">
                            @anyak.space
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="contact-icon-wrapper me-3">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-1">WhatsApp</h3>
                        <p className="text-muted mb-0">08xx-xxxx-xxxx</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mt-auto">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-2">Jam Operasional</h3>
                    <p className="text-muted mb-0">
                      Kami biasanya merespon pesan dalam waktu 24 jam pada hari kerja (Senin-Jumat).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
