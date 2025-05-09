import Link from "next/link"

export default function PostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the post data based on the ID
  const postId = Number.parseInt(params.id)

  const relatedPosts = [
    {
      id: 1,
      title: "Menemukan Inspirasi di Tengah Kesibukan Kota",
      category: "Inspirasi",
      date: "12 Mei 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 2,
      title: "Teknologi AI dan Dampaknya pada Industri Kreatif",
      category: "Teknologi",
      date: "10 Mei 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 3,
      title: "Minimalism: Hidup Lebih Baik dengan Lebih Sedikit",
      category: "Gaya Hidup",
      date: "5 Mei 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
  ]

  const comments = [
    {
      id: 1,
      name: "Budi Santoso",
      date: "14 Mei 2024",
      content:
        "Artikel yang sangat menarik dan informatif. Saya mendapatkan banyak wawasan baru dari tulisan ini. Terima kasih telah berbagi!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      date: "13 Mei 2024",
      content:
        "Saya setuju dengan poin-poin yang disampaikan dalam artikel ini. Sangat relevan dengan kondisi saat ini. Ditunggu artikel menarik lainnya.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header Image */}
          <div className="mb-4 rounded overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=1000"
              alt="Article Header"
              className="img-fluid w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Article Meta */}
          <div className="mb-4">
            <span className="badge badge-category mb-2">Teknologi</span>
            <h1 className="fw-bold mb-3">Teknologi AI dan Dampaknya pada Industri Kreatif</h1>
            <div className="d-flex align-items-center gap-3 text-muted">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/placeholder.svg?height=24&width=24"
                  alt="Author"
                  className="rounded-circle"
                  width="24"
                  height="24"
                />
                <span>mmeldhy</span>
              </div>
              <span>•</span>
              <span>10 Mei 2024</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content mb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <h2>Perkembangan AI dalam Industri Kreatif</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            <div className="my-4">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="AI in Creative Industry"
                className="img-fluid rounded w-100"
              />
              <p className="text-muted small mt-2 text-center">Ilustrasi penerapan AI dalam industri kreatif</p>
            </div>

            <h2>Dampak pada Kreativitas Manusia</h2>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit.
            </p>

            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi.
            </p>

            <h2>Masa Depan Kolaborasi Manusia dan AI</h2>

            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.
            </p>

            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="d-flex align-items-center gap-3 mb-5">
            <span className="fw-medium">Bagikan:</span>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mb-5">
            <Link href="/post/1" className="btn btn-outline-primary">
              <i className="fas fa-arrow-left me-2"></i> Artikel Sebelumnya
            </Link>
            <Link href="/post/3" className="btn btn-outline-primary">
              Artikel Selanjutnya <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mb-5">
            <h3 className="fw-bold mb-4">Artikel Terkait</h3>
            <div className="row g-4">
              {relatedPosts.map((post) => (
                <div className="col-md-4" key={post.id}>
                  <Link href={`/post/${post.id}`} className="text-decoration-none">
                    <div className="card h-100 border-0 shadow-sm">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="card-img-top"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <span className="badge badge-category mb-2">{post.category}</span>
                        <h4 className="card-title h6 fw-medium text-dark">{post.title}</h4>
                        <p className="card-text small text-muted">{post.date}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="fw-bold mb-4">Komentar ({comments.length})</h3>

            {/* Comment List */}
            <div className="mb-5">
              {comments.map((comment) => (
                <div className="d-flex gap-3 mb-4" key={comment.id}>
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt={comment.name}
                    className="rounded-circle"
                    width="48"
                    height="48"
                  />
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fw-medium">{comment.name}</span>
                      <small className="text-muted">{comment.date}</small>
                    </div>
                    <p className="text-muted">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div>
              <h4 className="fw-bold mb-3">Tinggalkan Komentar</h4>
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Nama
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="email@anda.com" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Komentar
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows={4}
                    placeholder="Tulis komentar Anda di sini..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Kirim Komentar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
