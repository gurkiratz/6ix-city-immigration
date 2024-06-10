import React from 'react'
import Image from 'next/image'

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
                <h3 className="h4">Introduction</h3>
                <p>
                  Are you dreaming of making Canada your permanent home? The
                  Express Entry system is a streamlined, efficient pathway to
                  achieve that goal. At <b>6ix City Immigration Inc.</b>, we
                  specialize in guiding you through every step of the Express
                  Entry process, ensuring a smooth transition to your new life
                  in Canada.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">What is Express Entry?</h3>
                  <p>
                    Express Entry is an online immigration application system
                    introduced by the Government of Canada to manage
                    applications for permanent residence. It covers three main
                    economic immigration programs:
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>Federal Skilled Worker Program (FSWP)</li>
                    <li>Federal Skilled Trades Program (FSTP)</li>
                    <li>Canadian Experience Class (CEC)</li>
                  </ul>
                  <p>
                    Express Entry is designed to select skilled workers who are
                    most likely to succeed in Canada’s labor market.
                  </p>
                  <Blockquote />
                </div>
                {/* <Image
                  width={820}
                  height={351}
                  src="/tab-feature-img-4.png"
                  className="img-fluid mt-4 rounded-custom"
                  alt="apply"
                /> */}

                <div className="job-details-info mt-5">
                  <h3 className="h4 mb-3">How Does Express Entry Work?</h3>

                  <p className="h6">1. Creating an Online Profile</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      Candidates create an online profile where they provide
                      information about their skills, work experience, language
                      ability, education, and other personal details.
                    </li>
                    <li>
                      Profiles are ranked using the Comprehensive Ranking System
                      (CRS), which assigns points based on the provided
                      information.
                    </li>
                  </ul>

                  <p className="h6">2. Getting into the Pool</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      Candidates who meet the criteria of one of the three
                      federal immigration programs are placed into the Express
                      Entry pool.
                    </li>
                    <li>
                      While in the pool, candidates are ranked against each
                      other based on their CRS scores.
                    </li>
                  </ul>

                  <p className="h6">
                    3. Receiving an Invitation to Apply (ITA)
                  </p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      Periodically, Immigration, Refugees, and Citizenship
                      Canada (IRCC) conducts draws from the pool and invites the
                      highest-ranking candidates to apply for permanent
                      residence.
                    </li>
                    <li>
                      Once an ITA is received, candidates have 60 days to submit
                      a complete application for permanent residence.
                    </li>
                  </ul>
                  <p className="h6">4. Permanent Residence Application</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      After submitting the application, IRCC processes it,
                      typically within six months.
                    </li>
                    <li>
                      Successful applicants and their dependents receive
                      confirmation of permanent residence and can then move to
                      Canada.
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">How We Can Help</h3>
                  <p>
                    Navigating the Express Entry system can be complex and
                    time-consuming. At 6ix City Immigration Inc., we offer
                    comprehensive services to simplify the process:
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>
                      <span className="h6">
                        Profile Assessment and CRS Optimization
                      </span>
                      <ul className="list-unstyled p-2">
                        <li>
                          We assess your eligibility and advise on improving
                          your CRS score.
                        </li>
                        <li>
                          Our experts suggest steps to enhance your profile,
                          such as obtaining a higher language test score or
                          gaining additional work experience.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="h6">
                        Document Preparation and Submission
                      </span>
                      <ul className="list-unstyled p-2">
                        <li>
                          We assist in gathering and organizing required
                          documents, ensuring that everything is accurate and
                          complete.
                        </li>
                        <li>
                          Our team submits your profile and application on your
                          behalf, keeping you updated throughout the process.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="h6">
                        Personalized Guidance and Support
                      </span>
                      <ul className="list-unstyled p-2">
                        <li>
                          From profile creation to receiving your permanent
                          residence, we provide ongoing support and answer any
                          questions you may have.
                        </li>
                        <li>
                          We offer tailored advice based on your unique
                          situation to maximize your chances of success.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* <Image
                  width={820}
                  height={355}
                  src="/tab-feature-img-2.png"
                  className="img-fluid mt-5 rounded-custom"
                  alt="apply"
                /> */}
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
