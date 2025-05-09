import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Menemukan Inspirasi di Tengah Kesibukan Kota",
    category: "Inspirasi",
    date: "12 Mei 2024",
    summary: "Bagaimana cara menemukan inspirasi di tengah hiruk pikuk kehidupan kota yang sibuk dan penuh tekanan.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    title: "Teknologi AI dan Dampaknya pada Industri Kreatif",
    category: "Teknologi",
    date: "10 Mei 2024",
    summary:
      "Menelusuri bagaimana kecerdasan buatan mengubah cara kita berkreasi dan berinovasi dalam industri kreatif.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    title: "Minimalism: Hidup Lebih Baik dengan Lebih Sedikit",
    category: "Gaya Hidup",
    date: "5 Mei 2024",
    summary: "Mengurangi barang-barang tidak penting dan fokus pada apa yang benar-benar bermakna dalam hidup.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 4,
    title: "Perjalanan Digital Nomad di Asia Tenggara",
    category: "Perjalanan",
    date: "1 Mei 2024",
    summary: "Pengalaman bekerja sambil menjelajahi keindahan negara-negara di Asia Tenggara sebagai digital nomad.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 5,
    title: "Membangun Kebiasaan Membaca yang Konsisten",
    category: "Pengembangan Diri",
    date: "28 April 2024",
    summary: "Tips dan trik untuk membangun kebiasaan membaca yang konsisten di tengah kesibukan sehari-hari.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 6,
    title: "Kuliner Lokal yang Wajib Dicoba di Pulau Jawa",
    category: "Kuliner",
    date: "25 April 2024",
    summary:
      "Menjelajahi kekayaan kuliner lokal di berbagai kota di Pulau Jawa yang wajib dicoba para pecinta makanan.",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Cerita dan Artikel Terbaru dari Anyak</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Temukan inspirasi, wawasan, dan cerita menarik dari berbagai topik yang kami sajikan khusus untuk Anda.
        </p>
      </div>

      <div className="row g-4 mb-5">
        {blogPosts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={post.image || "/placeholder.svg"}
                className="card-img-top"
                alt={post.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge badge-category">{post.category}</span>
                  <small className="text-muted">{post.date}</small>
                </div>
                <h2 className="card-title h5 fw-bold">{post.title}</h2>
                <p
                  className="card-text text-muted mb-3"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.summary}
                </p>
                <Link href={`/post/${post.id}`} className="btn btn-read-more p-0 d-flex align-items-center gap-1">
                  Baca Selengkapnya <i className="fas fa-arrow-right small"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation" className="d-flex justify-content-center mb-5">
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              10
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
