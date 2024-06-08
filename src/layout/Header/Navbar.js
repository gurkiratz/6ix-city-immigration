import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenu, HiOutlineX } from 'react-icons/hi'

import OffCanvasMenu from './OffCanvasMenu'
import dynamic from 'next/dynamic'

const Navbar = ({ navDark, insurance, classOption }) => {
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState(0)

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header')
    setHeaderTop(stickyheader.offsetTop)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <header
      className={`main-header ${
        navDark ? 'position-absolute' : ''
      } w-100 ${classOption} ${
        insurance && 'ins-header main-header w-100 z-10'
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/" passHref className="text-white text-2xl">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={175}
                  height={60}
                  // src="/logo-color.png"
                  src="/logo-light.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={175}
                  height={60}
                  // src="/logo-white.png"
                  src="/logo-dark.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </a>
          </Link>
          <button
            className="navbar-toggler position-absolute pr-3 right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>

              <li>
                <Link href="services">
                  <a className="nav-link">Services</a>
                </Link>
              </li>
              <li>
                <Link href="about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="contact-us">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="contact-us">
              <a
                className={
                  insurance ? 'ins-btn ins-primary-btn' : 'btn btn-info'
                }
              >
                Get in Touch
              </a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center justify-content-between mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={175}
                    height={60}
                    src="/logo-light.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
