import React from 'react'

import ProfileCard from './ProfileCard'
import Blockquote from './Blockquote'

const BlogSingleFeature = () => {
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <p>
                  Canada is a top destination for tourists, family visits, and
                  business trips. Whether you are planning a short visit or an
                  extended stay to reconnect with family, obtaining the
                  appropriate visa is crucial. As immigration consultants, we
                  specialize in guiding applicants through the process of
                  securing Visitor Visas and Super Visas, ensuring a smooth and
                  hassle-free experience.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Understanding Visitor Visas</h3>
                  <p>
                    A Visitor Visa (also known as a Temporary Resident Visa) is
                    required for individuals who wish to enter Canada for
                    tourism, business, or visiting family and friends. This visa
                    allows for a stay of up to six months.
                  </p>
                  <h5 className="h5">When is a Visitor Visa Required?</h5>
                  <p>A Visitor Visa is typically required for:</p>
                  <ul className="content-list list-unstyled">
                    <li>
                      Tourism: Exploring Canada&apos;s natural beauty, cultural
                      landmarks, and vibrant cities.
                    </li>
                    <li>
                      Family Visits: Reuniting with family members residing in
                      Canada.
                    </li>
                    <li>
                      Business: Attending conferences, meetings, or training
                      sessions.
                    </li>
                  </ul>
                </div>
                <Blockquote />
                <div className="blog-details-info mt-5">
                  <h3 className="h4">Understanding Super Visas</h3>
                  <p>
                    A <b>Super Visa</b> is a special type of visa for parents
                    and grandparents of Canadian citizens or permanent
                    residents. It allows for multiple entries over a period of
                    up to 10 years, with each stay lasting up to two years
                    without the need for renewal.
                  </p>
                  <h5 className="h5">Key Features of the Super Visa</h5>
                  <p>A Visitor Visa is typically required for:</p>
                  <ul className="content-list list-unstyled">
                    <li>
                      Extended Stay: Allows for stays of up to two years per
                      visit.
                    </li>
                    <li>
                      Multiple Entries: Valid for up to 10 years, permitting
                      multiple entries into Canada.
                    </li>
                    <li>
                      Eligibility: Only parents and grandparents of Canadian
                      citizens or permanent residents are eligible.
                    </li>
                  </ul>
                </div>
                <div className="blog-details-info mt-5">
                  <h3 className="h4">How We Can Help</h3>
                  <p>
                    Navigating the Visitor Visa and Super Visa application
                    processes can be complex. Our expert team offers a range of
                    services to ensure a successful application:
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>
                      Consultation Services: We provide personalized
                      consultations to assess your eligibility and guide you
                      through the process.
                    </li>
                    <li>
                      Document Preparation: We assist in gathering and preparing
                      all necessary documentation, ensuring completeness and
                      accuracy.
                    </li>
                    <li>
                      Application Submission: We help complete and submit your
                      application, minimizing errors and delays.
                    </li>
                    <li>
                      Medical Examination Guidance: We provide information and
                      support for the medical examination process.
                    </li>
                    <li>
                      Biometrics Appointment: We assist in scheduling and
                      preparing for biometrics appointments.
                    </li>
                    <li>
                      Follow-Up and Updates: We monitor the status of your
                      application and provide regular updates.
                    </li>
                  </ul>
                </div>
                <p className="mt-5">
                  Whether you are planning a short visit to Canada or an
                  extended stay with family, contact us today to learn more
                  about how we can assist you with your Visitor Visa or Super
                  Visa application. Let us help you navigate the complexities of
                  the Canadian immigration system with confidence and ease.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSingleFeature
