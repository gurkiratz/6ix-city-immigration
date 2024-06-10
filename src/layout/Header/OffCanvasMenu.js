import React from 'react'
import Link from 'next/link'
import { servicesData } from '../../utils/data'

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-full">
              <div className="dropdown-grid-item">
                {servicesData.map((navLink, i) => (
                  <span key={i + 1}>
                    <Link href={navLink.href}>
                      <a
                        className="dropdown-link px-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="me-2">{navLink.icon}</span>
                        <span className="drop-title mb-0">
                          {navLink.title}{' '}
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/about-us">
            <a className="nav-link">About Us</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/contact-us">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/contact-us">
            <a className="btn btn-info">Get in Touch</a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default OffCanvasMenu
