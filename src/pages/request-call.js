import React from 'react'

import Layout from '@layout/Layout'
import Navbar from '@layout/Header/Navbar'
import SingleServiceRegister from '@components/services/SingleServiceRegister'
import FooterTwo from '@layout/Footer/FooterTwo'
import ContactCard from '@components/contact-us/ContactCard'

const RequestCall = () => {
  return (
    <Layout title="Request Demo" desc="This is request demo page">
      <Navbar navDark />
      <SingleServiceRegister />
      <ContactCard />
      <FooterTwo />
    </Layout>
  )
}

export default RequestCall
