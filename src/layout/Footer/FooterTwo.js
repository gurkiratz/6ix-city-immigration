import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaFacebook,
  FaPhone,
} from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const FooterTwo = () => {
  return (
    <footer className="cyber-footer bg-gradient">
      <div className="cyber-footer-top ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div className="">
                <div className="footer-single-col mb-4">
                  <Image
                    src="/logo-white.png"
                    alt="logo"
                    width={113}
                    height={36}
                    className="img-fluid logo-white"
                  />
                </div>
                <p className="text-white">
                  Curious about the latest updates? follow us on social media.
                  Send a message on Whatsapp for a quick reply.
                </p>
                <ul className="list-unstyled list-inline cyber-footer-social-list mb-0">
                  <li className="list-inline-item">
                    <a href="https://wa.me/16477060054">
                      <i>
                        <FaWhatsapp />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/6ixcityimmigration/">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/6ixcityimmigration">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 mt-4 mt-md-0 mt-lg-0">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Our Services</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <a className="text-decoration-none">Express Entry</a>
                      </li>
                      <li>
                        <a className="text-decoration-none">
                          Family Class Sponsorship
                        </a>
                      </li>
                      <li>
                        <a className="text-decoration-none">
                          Visitor/Super Visa
                        </a>
                      </li>
                      <li>
                        <a className="text-decoration-none">LMIA</a>
                      </li>
                      <li>
                        <a className="text-decoration-none">Study Permit</a>
                      </li>
                      <li>
                        <a className="text-decoration-none">Work Permit</a>
                      </li>
                      <li>
                        <a className="text-decoration-none">Citizenship</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Quick Links</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link href="/">
                          <a className="text-decoration-none">Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <a className="text-decoration-none">Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                          <a className="text-decoration-none">About</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/blogs">
                          <a className="text-decoration-none">News</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-us">
                          <a className="text-decoration-none">Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Contact Info</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li className="fw-medium">
                        <FaPhone /> / <FaWhatsapp /> : +1 (647)-706-0054
                      </li>
                      <li className="fw-medium">
                        <IoMail /> : 6ixcityimmigration@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`footer-bottom bg-dark bg-gradient text-white py-4`}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="copyright-text">
                <p className="mb-lg-0 mb-md-0">
                  &copy; 2024 6ixCityImmigration, Inc., All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="footer-single-col text-start text-lg-end text-md-end">
                <ul className="list-unstyled list-inline footer-social-list mb-0">
                  <li className="list-inline-item">
                    <a href="https://wa.me/16477060054">
                      <i>
                        <FaWhatsapp />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/6ixcityimmigration/">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/6ixcityimmigration">
                      <i>
                        <FaFacebook />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterTwo
