import React from 'react'

import ProfileCard from './ProfileCard'
import Blockquote from './Blockquote'
import Image from 'next/image'

const BlogSingleFeature = () => {
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <p>
                  <b>Labour Market Impact Assessment (LMIA)</b> is a crucial
                  process for Canadian employers looking to hire foreign
                  workers. It ensures that hiring a foreign worker will not
                  negatively affect the Canadian labour market. As an
                  immigration consultant, we specialize in navigating the
                  complexities of LMIA applications, providing comprehensive
                  support to both employers and prospective employees.
                </p>
                <Image
                  width={500}
                  height={350}
                  src="/service/lmia.jpg"
                  className="img-fluid mt-4 rounded-custom"
                  alt="apply"
                />

                <div className="blog-details-info mt-5">
                  <h3 className="h4">What is LMIA?</h3>
                  <p>
                    The Labour Market Impact Assessment (LMIA) is a document
                    issued by Employment and Social Development Canada (ESDC).
                    It assesses the impact of hiring a foreign worker on the
                    Canadian job market. A positive LMIA indicates that there is
                    a need for a foreign worker to fill the job and that no
                    Canadian worker is available to do the job. Conversely, a
                    negative LMIA suggests that the position can be filled by a
                    Canadian citizen or permanent resident.
                  </p>
                </div>
                <Blockquote />
                <div className="blog-details-info mt-5">
                  <h3 className="h4">When is an LMIA Required?</h3>
                  <p>An LMIA is typically required when:</p>
                  <ul className="content-list list-unstyled">
                    <li>Employers want to hire a temporary foreign worker.</li>
                    <li>
                      Employers want to support a foreign worker’s application
                      for permanent residency.
                    </li>
                  </ul>
                  <p>
                    Certain work permits do not require an LMIA, such as those
                    issued under international agreements like the North
                    American Free Trade Agreement (NAFTA).
                  </p>
                </div>

                <div className="job-details-info mt-5">
                  <h3 className="h4">The LMIA Application Process</h3>

                  <ol className="ordered-list list-styled pl-2">
                    <li>
                      <b>Job Advertising:</b> Employers must advertise the job
                      to demonstrate efforts to hire a Canadian citizen or
                      permanent resident first.
                    </li>
                    <li>
                      <b>Application Submission:</b> Employers submit a detailed
                      application to ESDC, including information about the
                      business, job offer, and recruitment efforts.
                    </li>
                    <li>
                      <b>ESDC Assessment:</b> ESDC reviews the application,
                      considering factors such as the impact on the Canadian
                      labour market, the wages offered, and the working
                      conditions.
                    </li>
                    <li>
                      <b>LMIA Decision:</b> ESDC issues a decision, which can be
                      positive or negative.
                    </li>
                  </ol>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Benefits of a Positive LMIA</h3>
                  <p>
                    A positive LMIA can significantly benefit both employers and
                    foreign workers:
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>
                      <b>For Employers:</b> It allows them to hire skilled
                      foreign workers when Canadian workers are not available,
                      ensuring business continuity and growth.
                    </li>
                    <li>
                      <b>For Foreign Workers:</b> It opens pathways to work in
                      Canada and can support applications for permanent
                      residency, providing long-term stability and
                      opportunities.
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h4">Why Choose Us?</h3>
                  <p>
                    Our team of experienced immigration consultants is dedicated
                    to providing exceptional service and support. We understand
                    the nuances of the LMIA process and are committed to helping
                    you achieve your goals with minimal stress and maximum
                    efficiency.
                  </p>
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
