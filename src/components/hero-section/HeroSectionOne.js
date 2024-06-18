import Link from 'next/link'

const HeroSectionOne = () => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                6ix City Immigration: Simplifying Your{' '}
                <mark className="bg-transparent p-0 text-warning">
                  Immigration{' '}
                </mark>
                Journey
              </h1>
              <p className="lead">
                Streamlining your journey to a new home in Canada. We specialize
                in Express Entry, LMIA, PGWP, Permanent Residence, Work/Study
                Permit, and more.
              </p>
              <div className="action-btns mt-5 align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-call">
                  <a className="btn btn-primary me-3">Request a Free Call</a>
                </Link>
                <div onClick={() => scrolltoHash('services')}>
                  <a className="btn btn-light mt-2 mt-sm-0 me-3">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <img
                src="/hero-img-4.jpg"
                alt="hero img"
                className="img-fluid position-relative z-5 rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionOne
