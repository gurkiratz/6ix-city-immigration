import React from 'react'
import Image from 'next/image'

import ProfileCard from './ProfileCard'

const BlogSingleFeature = () => {
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <p>
                  The Canada Express Entry Program is a focuses based migration
                  program for experts hoping to get comfortable in Canada. It
                  grants focus to experts dependent on abilities, experience,
                  Canadian work status and common/regional assignment. The
                  higher your focuses, the more prominent your odds of accepting
                  an encouragement to Apply (ITA) for Permanent Residency in
                  Canada. Normally PR applications submitted through this course
                  are prepared in 6 a year or less. Take advantage of this
                  rewarding project with us. We are renowned experts on Canadian
                  movement and can help you plan each progression of your
                  migration interaction.
                </p>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">
                    Here are a few details about the program:
                  </h3>
                  <p>
                    The Express Entry program has smoothed out migration for
                    experts and made the interaction more straightforward.
                  </p>
                  <p className="h6">Key subtleties of the program are:</p>
                  <ul className="content-list list-unstyled">
                    <li>
                      This is an online program which has no cap on candidates
                      and is open consistently
                    </li>
                    <li>
                      The program applies just to Federal Skilled Worker
                      Program, Federal Skilled Trades Program, and Canadian
                      Experience Class Immigration Program
                    </li>
                    <li>
                      You should present an Expression of Interest and apply as
                      a candidate under a task referenced in Skill Types 0, An
                      and B
                    </li>
                    <li>
                      Your profile will be assessed dependent on focuses and
                      will be set in the candidate pool
                    </li>
                    <li>
                      Canadian regions and bosses will get to this pool and
                      discover ability to address their issues
                    </li>
                    <li>
                      The most noteworthy focuses holders are sent an Invitation
                      to Apply for PR
                    </li>
                  </ul>
                  <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                    <p className="text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>{' '}
                      Globally network long-term high-impact schemas vis-a-vis
                      distinctive e-commerce cross-media infrastructures rather
                      than ethical. Credibly visualize distinctive testing
                      procedures without end-to-end ROI. Seamlessly brand
                      cross-platform communities with backend markets.
                      Assertively utilize business services through robust
                      solutions. Rapidiously deliver cross-unit infrastructures
                      rather than accurate metrics.
                      <i className="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                </div>
                {/* <Image
                  width={820}
                  height={351}
                  src="/tab-feature-img-4.png"
                  className="img-fluid mt-4 rounded-custom"
                  alt="apply"
                /> */}

                <div className="job-details-info mt-5">
                  <h3 className="h4">
                    What is the eligibility criteria for the Express visa?
                  </h3>
                  <p>
                    The Canada Express Entry Program depends on a focuses based
                    framework to assess candidates. The fundamental goal of this
                    framework is to recognize candidates who have the most
                    elevated possibility of prevailing after they relocate to
                    Canada. The focuses scale has a greatest score of 1200 and
                    assesses you and your spouse (assuming any) on your:
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>Age</li>
                    <li>The most significant level of higher education</li>
                    <li>Online enlistment CAD: 300 non-refundable (a month)</li>
                    <li>Language abilities</li>
                    <li>Canadian work insight</li>
                    <li>Other work insight</li>
                    <li>Ability adaptability</li>
                    <li>Different components</li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">
                    Advantages of the Express Entry System:
                  </h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      One benefit of this migration program is its
                      straightforwardness. Candidates will realize the CRS
                      focuses they should score to be qualified for the
                      Invitation to Apply (ITA) for lasting home.
                    </li>
                    <li>
                      Applicants will know about the middle score they ought to
                      acquire to meet all requirements for the ITA, in the event
                      that they don&apos;t make the imprint, they can generally
                      put forth attempts to improve their CRS score or think
                      about different CRS choices.
                    </li>
                    <li>
                      They can take a gander at improving their language test
                      results, or on acquiring extra work insight, see choices
                      to concentrate in Canada or go after a common designation.
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
