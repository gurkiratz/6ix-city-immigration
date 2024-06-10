/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h4 className="h5 text-primary">Our Story</h4>
              <h2>Empowering Your Canadian Dreams</h2>
              <p>
                Founded in the heart of Toronto,{' '}
                <b>6ix City Immigration Inc.</b> was built on the principles of
                integrity, dedication, and excellence. We understand that the
                immigration process can be complex and daunting, and we are
                committed to providing personalized and professional guidance
                every step of the way.
              </p>
              <p>
                From securing student visas and work permits to achieving
                permanent residency, our comprehensive services are designed to
                meet the diverse needs of our clients. As we continue to grow
                and evolve, our focus remains on providing affordable, reliable,
                and high-quality immigration services.
              </p>
              <div className="mt-4">
                <h6 className="mb-3">Google Ratings</h6>
                <a
                  href="https://www.google.com/search?q=6ix+city+immigration+inc&oq=6ix+city&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyCQgCEEUYORiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPNIBCDE0OTdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x882b17a4cdb4016d:0xb87f25b9128b281,1,,,,"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline d-block"
                >
                  <u>We have a 5.0 rating on Google</u>
                </a>
                <a
                  href="https://g.page/r/CYGyKJFb8ocLEAI/review"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.we-chop.com/wp-content/uploads/2020/09/Google-review-button.png"
                    alt="Google review button"
                    className="img-fluid mt-3"
                    style={{ width: '35%', height: 'auto' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-success">95%</h3>
                  <h6 className="mb-0">Visas Approved</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary">30+</h3>
                  <h6 className="mb-0">Successful LMIA Applications</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-dark">90%</h3>
                  <h6 className="mb-0">Client Satisfaction Rate</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-warning">
                    5+ Years
                  </h3>
                  <h6 className="mb-0">In Business</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-danger">500+</h3>
                  <h6 className="mb-0">Clients Worldwide</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary">100+</h3>
                  <h6 className="mb-0">Permanent Residences Granted</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
