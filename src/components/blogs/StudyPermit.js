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
                  Canada is a premier destination for international students,
                  offering world-class education and vibrant cultural
                  experiences. If you plan to pursue your studies in Canada,
                  obtaining a Study Permit is essential. As experienced
                  immigration consultants, we are here to guide you through the
                  process, ensuring a smooth and successful application.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Understanding the Study Permit</h3>
                  <p>
                    A Study Permit is a document issued by Immigration, Refugees
                    and Citizenship Canada (IRCC) that allows foreign nationals
                    to study at designated learning institutions (
                    <a
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DLIS
                    </a>
                    ) in Canada. It is not a visa, but it is often issued
                    alongside a visitor visa or an Electronic Travel
                    Authorization (eTA).
                  </p>
                </div>
                <Blockquote />
                <div className="blog-details-info mt-5">
                  <h3 className="h4">When is a Study Permit Required?</h3>
                  <p>A Study Permit is required if:</p>

                  <ul className="content-list list-unstyled">
                    <li>
                      <b>Your program of study lasts more than six months.</b>
                    </li>
                    <li>
                      <b>
                        You plan to study at a{' '}
                        <a
                          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          DLI
                        </a>{' '}
                        in Canada.
                      </b>
                    </li>
                  </ul>
                </div>
                <div className="blog-details-info mt-5">
                  <h3 className="h4">The Application Process</h3>
                  <ol className="ordered-list list-styled pl-2">
                    <li>
                      <b>Obtain a Letter of Acceptance:</b> Secure an acceptance
                      letter from a designated learning institution in Canada.
                    </li>
                    <li>
                      <b>Determine Eligibility:</b> Ensure you meet the
                      eligibility criteria, including proof of sufficient funds,
                      a clean criminal record, and a medical examination if
                      required.
                    </li>
                    <li>
                      <b>Gather Documentation:</b> Collect all necessary
                      documents, such as the acceptance letter, proof of funds,
                      passport, and any additional documents specified by IRCC.
                    </li>
                    <li>
                      <b>Submit Application:</b> Complete and submit the study
                      permit application online or through a Visa Application
                      Centre (VAC).
                    </li>
                    <li>
                      <b>Biometrics:</b> Provide biometrics (fingerprints and
                      photo) as part of the application process.
                    </li>
                    <li>
                      <b>Processing and Decision:</b> Wait for the application
                      to be processed and receive the decision. If approved, you
                      will receive a port of entry letter of introduction and,
                      if applicable, a visitor visa or eTA.
                    </li>
                  </ol>
                </div>
                <div className="blog-details-info mt-5">
                  <h3 className="h4">How We Can Help</h3>
                  <p>
                    Navigating the Study Permit application process can be
                    complex and time-consuming. Our expert team offers a range
                    of services to ensure a successful application:
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
                      Biometrics Appointment: We assist in scheduling and
                      preparing for biometrics appointments.
                    </li>
                    <li>
                      Follow-Up and Updates: We monitor the status of your
                      application and provide regular updates.
                    </li>
                    <li>
                      Post-Arrival Support: We offer guidance on next steps
                      after arrival, including obtaining a study permit at the
                      port of entry and adjusting to life in Canada.
                    </li>
                  </ul>
                </div>
                <p className="mt-5">
                  If you are planning to study in Canada, contact us today to
                  learn more about how we can assist you with your Study Permit
                  application. Let us help you navigate the complexities of the
                  Canadian immigration system with confidence and ease, ensuring
                  that your academic journey begins on the right path.
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
