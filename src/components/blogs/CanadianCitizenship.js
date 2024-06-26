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
                  Becoming a Canadian citizen is a significant milestone that
                  brings numerous benefits and opportunities. If you are a
                  permanent resident of Canada looking to take this important
                  step, our team of experienced immigration consultants is here
                  to guide you through the process, ensuring a smooth and
                  successful application.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Understanding Canadian Citizenship</h3>
                  <p>
                    Canadian citizenship grants you the right to live, work, and
                    study anywhere in Canada, as well as access to various
                    social benefits. It also allows you to vote and run for
                    political office, providing you with a greater voice in the
                    country&apos;s democratic processes.
                  </p>
                </div>
                <Blockquote />
                <div className="blog-details-info mt-5">
                  <h3 className="h4">Eligibility Requirements</h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      Permanent Resident Status: You must have permanent
                      resident status in Canada.
                    </li>
                    <li>
                      Physical Presence: You must have lived in Canada for at
                      least 1,095 days (three years) out of the five years
                      before applying.
                    </li>
                    <li>
                      Income Tax Filing: You must have filed taxes for at least
                      three years within the five-year period.
                    </li>
                    <li>
                      Language Skills: You must demonstrate proficiency in
                      English or French.
                    </li>
                    <li>
                      Knowledge of Canada: You must pass a citizenship test
                      covering Canadian history, values, institutions, and
                      symbols.
                    </li>
                    <li>
                      Good Character: You must not have a criminal record that
                      would prevent you from being granted citizenship.
                    </li>
                  </ul>
                </div>
                <div className="blog-details-info mt-5">
                  <h3 className="h4">The Application Process</h3>
                  <ol className="ordered-list list-styled pl-2">
                    <li>
                      Gather Documentation: Collect all necessary documents,
                      including proof of permanent resident status, income tax
                      filings, language proficiency, and identification
                      documents.
                    </li>
                    <li>
                      Complete Application: Fill out the citizenship application
                      form and ensure all required information is accurately
                      provided.
                    </li>
                    <li>
                      Submit Application: Submit your completed application
                      along with the required fees to Immigration, Refugees and
                      Citizenship Canada (IRCC).
                    </li>
                    <li>
                      Citizenship Test and Interview: If you are between 18 and
                      54 years old, you will need to take a citizenship test.
                      You may also be required to attend an interview.
                    </li>
                    <li>
                      Decision: Wait for IRCC to process your application and
                      notify you of the decision.
                    </li>
                    <li>
                      Citizenship Ceremony: If your application is approved,
                      attend the citizenship ceremony, where you will take the
                      Oath of Citizenship and receive your citizenship
                      certificate.
                    </li>
                  </ol>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">How We Can Help</h3>
                  <p>
                    Navigating the Canadian citizenship application process can
                    be complex. Our expert team offers a range of services to
                    ensure a successful application:
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
                      Citizenship Test Preparation: We offer resources and
                      guidance to help you prepare for the citizenship test.
                    </li>
                    <li>
                      Follow-Up and Updates: We monitor the status of your
                      application and provide regular updates.
                    </li>
                    <li>
                      Ceremony Assistance: We guide you through the final steps,
                      including attending the citizenship ceremony.
                    </li>
                  </ul>
                </div>
                <p className="mt-5">
                  If you are ready to take the next step towards becoming a
                  Canadian citizen, contact us today to learn more about how we
                  can assist you with your citizenship application. Let us help
                  you navigate the complexities of the Canadian immigration
                  system with confidence and ease, ensuring that your journey to
                  citizenship is a successful one.
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
