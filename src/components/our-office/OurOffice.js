import React from 'react';
import contactInfo from '@/config/contact';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const OurOffice = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Our Office</h4>
              <h2>Visit Us in Brampton</h2>
              <p>
                Located in the heart of Brampton, our office is ready to assist you with all your Canadian immigration needs. Walk-ins welcome during business hours.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 mt-4">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/6ix city office.png')no-repeat center center / cover",
                minHeight: '400px'
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Brampton Office</h5>
                  <address>
                    {contactInfo.address.street} <br />
                    {contactInfo.address.city}, {contactInfo.address.province}
                  </address>
                  <div className="text-white mt-3">
                    <p className="mb-2">
                      <FaPhone className="me-2" />
                      Office: {contactInfo.office.display}
                    </p>
                    <p className="mb-2">
                      <FaPhone className="me-2" />
                      Mobile: {contactInfo.phone.display}
                    </p>
                    <p className="mb-3 small">
                      <strong>{contactInfo.hours.availability}</strong>
                      <br />
                      {contactInfo.hours.weekday}
                    </p>
                    <a 
                      href={contactInfo.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm mt-2"
                    >
                      <FaMapMarkerAlt className="me-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
