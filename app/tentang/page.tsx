export default function TentangPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="fw-bold text-center mb-5">Tentang Anyak</h1>

          <div className="mb-5">
            <img
              src="/placeholder.svg?height=400&width=1000"
              alt="Anyak Banner"
              className="img-fluid rounded mb-4 w-100"
              style={{ height: "300px", objectFit: "cover" }}
            />

            <div className="article-content">
              <p className="lead mb-3">
                <em>Anyak</em> adalah ruang ekspresi bebas, tempat kami menulis, berbagi, dan merenung tanpa batas.
              </p>

              <p className="mb-3">
                Nama <em>Anyak</em> berasal dari filosofi: "Sebuah suara hati yang mengalir bebas, tidak terikat aturan,
                sebagai bentuk ekspresi diri."
              </p>

              <p className="mb-4">
                Di Anyak, kami percaya bahwa setiap orang memiliki cerita yang layak dibagikan. Kami menyediakan
                platform di mana penulis dapat mengekspresikan pemikiran, ide, dan pengalaman mereka tanpa batasan. Dari
                teknologi hingga gaya hidup, dari inspirasi hingga perjalanan, kami mencakup berbagai topik yang menarik
                dan relevan.
              </p>

              <p className="mb-4">
                Misi kami adalah menciptakan komunitas pembaca dan penulis yang saling menginspirasi, berbagi
                pengetahuan, dan tumbuh bersama. Kami berkomitmen untuk menyajikan konten berkualitas yang tidak hanya
                menghibur tetapi juga memberikan wawasan baru dan perspektif yang berbeda.
              </p>

              <p>
                Bergabunglah dengan kami dalam perjalanan eksplorasi tanpa batas ini. Baca, tulis, bagikan, dan jadilah
                bagian dari komunitas Anyak yang terus berkembang.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-4">Profil Pembuat</h2>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center mb-3 mb-md-0">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="mmeldhy"
                      className="rounded-circle img-fluid"
                      style={{ width: "96px", height: "96px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <h3 className="h5 fw-bold mb-1">mmeldhy</h3>
                    <p className="text-muted mb-3">Founder & Content Creator</p>

                    <p className="mb-3">
                      Seorang penulis dan kreator konten yang bersemangat untuk berbagi cerita dan wawasan. Dengan latar
                      belakang di bidang teknologi dan seni, mmeldhy menciptakan Anyak sebagai wadah untuk
                      mengekspresikan kreativitas dan menghubungkan orang-orang melalui tulisan.
                    </p>

                    <div className="text-muted">
                      <p className="mb-0">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:mmeldofficial@gmail.com" className="text-decoration-none">
                          mmeldofficial@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="fw-bold mb-4">Nilai-Nilai Kami</h2>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3">Kebebasan Berekspresi</h3>
                    <p className="text-muted mb-0">
                      Kami percaya setiap orang memiliki hak untuk mengekspresikan pemikiran dan ide mereka dengan
                      bebas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3">Kreativitas Tanpa Batas</h3>
                    <p className="text-muted mb-0">
                      Kami mendorong eksplorasi kreatif dan inovasi dalam setiap bentuk ekspresi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3">Komunitas Inklusif</h3>
                    <p className="text-muted mb-0">
                      Kami membangun ruang yang aman dan inklusif di mana semua suara dihargai dan didengar.
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
