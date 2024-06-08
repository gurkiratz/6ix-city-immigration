/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ServiceForm from './ServiceForm'

const SingleServiceRegister = () => {
  return (
    <section
      className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-white">
                Contact Us: Reach Your Immigration Goals
              </h2>
              <p>
                We&apos;re here to help you navigate your immigration journey
                with confidence. Get in touch and let&apos;s discuss your
                specific needs.
              </p>
              <hr />
              <div
                className="tab-content testimonial-tab-content text-white-80 mt-4"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="testimonial-tab-1"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;The number one go to person for all your immigration
                      needs. Harsh treats all her cases as if they are her own.
                      With 6 consecutive 100% success rate cases for me
                      personally from work permit, PR, Parent&apos;s Super Visa,
                      Visitor, US Visa to Spousal PR visa. They treat their
                      clients as family. I highly recommend them as the most
                      dedicated immigration consultant in town. &quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Ravinder Pal Singh</span>
                    <span className="d-block small">
                      PR, Super Visa, US Visa & Spousal PR
                    </span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-2"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;My parents had 3 visitor visa refusals. I was
                      worried about their super visa application. Harshpreet is
                      a wonderful professional. She answers all your questions
                      and doubts in timely manner.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Jasmeen Sandhu</span>
                    <span className="d-block small">Super Visa</span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-3"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;Whoever is reading this review if you are thinking
                      about the services from 6ix city immigration its worth
                      your time and money. This review is long pending I got
                      into contact with Harsh through a friend. I got my work
                      permit extension by her, LMIA and now my PR. She always
                      adviced me in my favour. I&apos;m glad that i trusted her
                      and everything happened as she said.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Arshpreet Kaur</span>
                    <span className="d-block small">LMIA, PR</span>
                  </div>
                </div>
              </div>
              <ul
                className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-1"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/1.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-2"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/4.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-3"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/6.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ServiceForm />
        </div>
        {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
      </div>
    </section>
  )
}

export default SingleServiceRegister
