import React from 'react'

import Layout from '@layout/Layout'
import Footer from '@layout/Footer/Footer'
import Navbar from '@layout/Header/Navbar'
import PageHeader from '@components/common/PageHeader'
import ServiceOne from '@components/services/ServiceOne'
import SupportOne from '@components/support/SupportOne'
import TestimonialTwo from '@components/testimonial/TestimonialTwo'
import FooterTwo from '@layout/Footer/FooterTwo'

const services = () => {
  return (
    <Layout title="Services" desc="this is services page  ">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="We are Immigration Experts"
        desc="Streamlining your journey to a a new home in Canada 🇨🇦. We specialize in Express Entry, LMIA, PGWP, Permanent Residence, Work/Study Permit, and more."
      />

      <ServiceOne />
      <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" />
      {/* <SupportOne className="true" /> */}
      <Footer />
    </Layout>
  )
}

export default services
