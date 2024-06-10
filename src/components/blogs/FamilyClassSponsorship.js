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
                <p>
                  Family is at the heart of every Canadian community. The Family
                  Class Sponsorship program allows Canadian citizens and
                  permanent residents to reunite with their loved ones by
                  sponsoring them to come to Canada as permanent residents. At
                  6ix City Immigration, we are committed to helping families
                  come together through this essential immigration pathway.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">What is Family Class Sponsorship?</h3>
                  <p>
                    The Family Class Sponsorship program is an immigration
                    initiative by the Government of Canada designed to keep
                    families together. It allows eligible sponsors to bring
                    their family members to Canada by supporting their
                    application for permanent residence. This program includes
                    several categories, each tailored to different family
                    relationships:
                  </p>

                  <ul className="content-list list-unstyled">
                    <li>Spouse or Common-Law Partner</li>
                    <li>Dependent Children</li>
                    <li>Parents and Grandparents</li>
                    <li>Other Eligible Relatives</li>
                  </ul>
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
                  <h3 className="h4">Eligibility Criteria for Sponsors</h3>

                  <p className="h6">1. Age and Status</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>You must be at least 18 years old.</li>
                    <li>
                      You must be a Canadian citizen, permanent resident, or a
                      person registered in Canada as an Indian under the
                      Canadian Indian Act.
                    </li>
                  </ul>
                  <p className="h6">2. Financial Requirements</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      You must demonstrate the financial ability to support your
                      sponsored family member.
                    </li>
                    <li>
                      In some cases, you must sign an undertaking agreeing to
                      provide financial support for the sponsored relative for a
                      specific period.
                    </li>
                  </ul>
                  <p className="h6">3. Additional Criteria</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      You must not be in prison, bankrupt, under a removal
                      order, or charged with a serious offense.
                    </li>
                    <li>
                      You must not have defaulted on a previous sponsorship
                      agreement, alimony, or child support payments.
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Who Can You Sponsor?</h3>
                  <p className="h6">
                    1. Spouse, Common-Law Partner, or Conjugal Partner
                  </p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      You can sponsor your spouse, common-law partner, or
                      conjugal partner to live with you in Canada.
                    </li>
                    <li>Proof of a genuine relationship is required.</li>
                  </ul>
                  <p className="h6">2. Dependent Children</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      You can sponsor your biological or adopted children who
                      are under 22 years old and unmarried.
                    </li>
                    <li>
                      Dependent children over 22 years old must meet specific
                      conditions to be eligible.
                    </li>
                  </ul>
                  <p className="h6">3. Parents and Grandparents</p>
                  <ul className="content-list list-unstyled p-2">
                    <li>
                      The Parents and Grandparents Program (PGP) allows you to
                      sponsor your parents and grandparents.
                    </li>
                    <li>
                      Due to high demand, this program operates on a lottery
                      system where potential sponsors express interest and are
                      randomly selected to apply.
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">How We Can Help</h3>
                  <p>
                    Navigating the Family Class Sponsorship process can be
                    complex and time-consuming. At 6ix City Immigration Inc., we
                    offer comprehensive services to simplify the process:
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
