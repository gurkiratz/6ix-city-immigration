import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from 'react-icons/hi'
import { MdFamilyRestroom } from 'react-icons/md'
import { SiAircanada } from 'react-icons/si'
import { FaPassport } from 'react-icons/fa'
import { CgAirplane } from 'react-icons/cg'
import { HiAcademicCap } from 'react-icons/hi2'
import { GrUserWorker } from 'react-icons/gr'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { FaPersonCircleCheck } from 'react-icons/fa6'
import { FaGlobeAmericas } from 'react-icons/fa'

import { SiSimpleanalytics } from 'react-icons/si'
import { IoGitCompareOutline } from 'react-icons/io5'
import { FaCheckCircle } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

const servicesData = [
  {
    id: 1,
    serviceTitle: 'Express Entry',
    serviceDesc: 'CEC, FSW, FST, Occupational based draws',
    component: SiAircanada,
    color: 'danger',
  },
  {
    id: 2,
    serviceTitle: 'Family class sponsorship',
    serviceDesc: 'Parents Sponsorship | Spousal Sposorship',
    component: MdFamilyRestroom,
    color: 'success',
  },
  {
    id: 3,
    serviceTitle: 'Visitor / Super Visa',
    serviceDesc: 'Visitor / Super Visa',
    component: CgAirplane,
    color: 'info',
  },
  {
    id: 4,
    serviceTitle: 'LMIA',
    serviceDesc: 'PR Support & Dual Intent',
    component: FaPassport,
    color: 'warning',
  },
  {
    id: 5,
    serviceTitle: 'Study Permit',
    serviceDesc: 'Initial Permit or Permit Extension',
    component: HiAcademicCap,
    color: 'info',
  },
  {
    id: 6,
    serviceTitle: 'Work Permit',
    serviceDesc:
      'PGWP, Spousal Work Permit, Co-op Work Permit, BOWP, LMIA Based Work Permit',
    component: GrUserWorker,
    color: 'danger',
  },
  {
    id: 7,
    serviceTitle: 'TRV',
    serviceDesc: 'Study Visa | Work Visa | Visitor Record',
    component: HiBuildingOffice2,
    color: 'danger',
  },
  {
    id: 8,
    serviceTitle: 'Citizenship',
    serviceDesc: 'Canadian Citizenship',
    component: FaPersonCircleCheck,
    color: 'success',
  },
  {
    id: 9,
    serviceTitle: 'International',
    serviceDesc: 'USA / UK / India Visa',
    component: FaGlobeAmericas,
    color: 'info',
  },
]

const ServiceOne = ({ bgDark }) => {
  const renderedServices = servicesData.map((service) => {
    return (
      <div
        key={service.id}
        className={`feature-card shadow-sm rounded-custom p-5 ${
          bgDark
            ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
            : 'bg-white'
        }`}
      >
        <div
          className={`icon-box d-inline-block rounded-circle bg-${service.color}-soft mb-32`}
        >
          <span className="fal">
            <service.component className={`h3 text-${service.color}`} />
          </span>
        </div>
        <div className="feature-content">
          <h3 className="h5">{service.serviceTitle.toUpperCase()}</h3>
          <p className="mb-0">{service.serviceDesc}</p>
        </div>
        <Link href="/career-single">
          <a className="link-with-icon text-decoration-none mt-3">
            View Details{' '}
            <i className="far mb-1">
              <BsArrowRight />
            </i>
          </a>
        </Link>
      </div>
    )
  })

  return (
    <section
      id="services"
      className={`feature-section ptb-120 ${bgDark ? 'bg-dark' : 'bg-light'}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            <SectionTitle
              subtitle="Services"
              title="Services We Provide"
              centerAlign
              dark={bgDark}
            />

            <div className="feature-grid">
              {renderedServices}
              {/* <div
                className={`shadow-sm highlight-card rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <span className="fal">
                    <SiSimpleanalytics className="h4 text-primary" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Advanced analytics</h3>
                  <p>
                    Synergistically pursue accurate initiatives without
                    economically sound imperatives.
                  </p>
                  <p>
                    {" "}
                    Professionally architect unique process improvements via
                    optimal.
                  </p>
                  <h6 className="mt-4">Included with...</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      High-converting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Personal branding
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Modernized prospecting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Clean and modern
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Showcasing success
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Bootstrap latest version
                    </li>
                  </ul>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div> */}
              {/**
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Automated Reports</h3>
                  <p className="mb-0">
                    Synergistically pursue accurate initiatives without
                    economically imperatives.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">User Journey Flow</h3>
                  <p className="mb-0">
                    Quickly productize prospective value before collaborative
                    benefits.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Compare A/B Testing</h3>
                  <p className="mb-0">
                    Credibly disintermediate functional processes for team
                    driven action.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Easy Customization</h3>
                  <p className="mb-0">
                    Dynamically develop ubiquitous opportunities whereas
                    relationships.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Easy Customization</h3>
                  <p className="mb-0">
                    Dynamically develop ubiquitous opportunities whereas
                    relationships.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Easy Customization</h3>
                  <p className="mb-0">
                    Dynamically develop ubiquitous opportunities whereas
                    relationships.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceOne
