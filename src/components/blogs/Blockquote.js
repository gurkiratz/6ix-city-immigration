import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Blockquote = () => {
  return (
    <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
      <p className="text-muted">
        <i className="fas fa-quote-left me-2 text-primary"></i>{' '}
        <p className="h6 mb-3">How 6ix City Immigration Can Help You:</p>
        <ul className="content-list list-unstyled">
          <li>
            <b>Application Support:</b> We guide you through the application
            process, including medical exams and insurance documentation.
          </li>
          <li>
            <b>Document Preparation:</b> We help you gather and organize the
            necessary documents, such as proof of financial support and a letter
            of invitation (if applicable).
          </li>
          <li>
            <b>Interview Preparation:</b> If required, we prepare you for the
            visa interview process.
          </li>
        </ul>
        <i className="fas fa-quote-right ms-2 text-primary"></i>
      </p>
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
              <FaFacebookF />
            </i>
          </a>
        </li>
      </ul>
    </blockquote>
  )
}

export default Blockquote
