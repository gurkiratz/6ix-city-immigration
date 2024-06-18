import { useForm, ValidationError } from '@formspree/react'
import { PiCheckCircleFill } from 'react-icons/pi'

const ServiceForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom mt-4">
          <h3 className="fw-medium">
            Fill out the form and we will be in touch as soon as possible.
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 register-form">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    aria-label="name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    aria-label="phone"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="col-12 ">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Tell us more about your inquiries or concerns"
                    style={{ height: '120px' }}
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary mt-4 d-block w-100"
                >
                  Submit
                </button>
                <ValidationError
                  className="text-danger fw-medium mt-3"
                  errors={state.errors}
                />
                {state.succeeded ? (
                  <p className="text-primary fw-medium mt-3">
                    Thanks for your message to 6ix City Immigration! We will get
                    back to you shortly <PiCheckCircleFill />
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ServiceForm
