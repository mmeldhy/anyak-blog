"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Beranda", href: "/blog" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Kategori", href: "#" },
  { name: "Kontak", href: "/kontak" },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? "shadow-sm" : ""} bg-white sticky-top`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/blog" className="navbar-brand fw-bold fs-4 text-decoration-none">
            Anyak
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navigation.map((item) => (
                <li className="nav-item" key={item.name}>
                  <Link href={item.href} className={`nav-link px-3 ${pathname === item.href ? "active" : ""}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <button className="btn btn-outline-primary btn-sm mt-1 mt-lg-0">Cari</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
