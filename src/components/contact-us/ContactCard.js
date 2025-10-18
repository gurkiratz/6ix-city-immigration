import React from 'react'
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import contactInfo from '@config/contact'

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <FaWhatsapp />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Chat with us</h5>
                <p>
                  Our support will help you from{' '}
                  <strong> {contactInfo.hours.weekday}</strong>. Send a message
                  on
                  <strong> Whatsapp </strong>
                  and receive {contactInfo.response.whatsapp}.
                </p>
              </div>
              <a
                href={contactInfo.social.whatsapp}
                className="btn btn-link mt-auto"
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Simple drop us an email at{' '}
                  <strong>{contactInfo.email.display} </strong>
                  and you will receive a reply within{' '}
                  {contactInfo.response.email}
                </p>
              </div>
              <a
                href={`mailto:${contactInfo.email.primary}`}
                className="btn btn-primary mt-auto"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Give us a ring. Our Experts are standing by{' '}
                  <strong>{contactInfo.hours.availability}</strong> from
                  <strong> {contactInfo.hours.weekday}.</strong>
                </p>
              </div>
              <a
                href={`tel:${contactInfo.phone.tel}`}
                className="btn btn-link mt-auto"
              >
                {contactInfo.phone.display}
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <FaMapMarkerAlt />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Visit Our Office</h5>
                <p>
                  <strong>{contactInfo.address.short}</strong>
                </p>
                <p className="small mb-2">
                  <strong>{contactInfo.hours.availability}</strong>
                  <br />
                  {contactInfo.hours.weekday}
                </p>
                <p className="small">
                  Office: <strong>{contactInfo.office.display}</strong>
                </p>
              </div>
              <a
                href={contactInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
