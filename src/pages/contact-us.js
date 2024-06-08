import React from 'react'
import Layout from '@layout/Layout'
import Footer from '@layout/Footer/Footer'
import Navbar from '@layout/Header/Navbar'
import PageHeader from '@components/common/PageHeader'
import ContactCard from '@components/contact-us/ContactCard'
import ContactForm from '@components/contact-us/ContactForm'
import FooterTwo from '@layout/Footer/FooterTwo'

const ContactUs = () => {
  return (
    <Layout title="Contact Us" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contact Us: Reach Your Immigration Goals"
        desc="We're here to help you navigate your immigration journey with confidence. Get in touch and let's discuss your specific needs."
      />
      <ContactCard />
      {/* <ContactForm /> */}
      <FooterTwo />
    </Layout>
  )
}

export default ContactUs
