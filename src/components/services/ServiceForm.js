import React from 'react'

const ServiceForm = () => {
  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom mt-4">
          <h3 className="fw-medium">
            Fill out the form and we will be in touch as soon as possible.
          </h3>

          <form action="#" className="mt-4 register-form">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    aria-label="phone"
                  />
                </div>
              </div>
              <div className="col-12 ">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Tell us more about your inquiries or concerns"
                    style={{ height: '120px' }}
                  ></textarea>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-primary mt-4 d-block w-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ServiceForm
