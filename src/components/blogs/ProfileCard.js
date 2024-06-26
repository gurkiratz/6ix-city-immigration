import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const ProfileCard = () => {
  return (
    <div className="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
      <Image
        width={120}
        height={120}
        src="/team/harsh.jpg"
        alt="author"
        className="img-fluid shadow-sm rounded-circle"
      />
      <div className="author-info my-4">
        <h5 className="mb-0">Harshpreet Kaur</h5>
        <span className="small">RCIC Consultant</span>
      </div>
      <p>
        Experienced RCIC Consultant dedicated to making your Canadian
        immigration journey seamless and successful.
      </p>
      <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
        <li className="list-inline-item">
          <Link href="https://wa.me/16477060054" passHref>
            <a className="fab">
              <FaWhatsapp />
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="https://www.instagram.com/6ixcityimmigration/" passHref>
            <a className="fab">
              <FaInstagram />
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="https://www.facebook.com/6ixcityimmigration" passHref>
            <a className="fab">
              <FaFacebookF />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ProfileCard), { ssr: false })
