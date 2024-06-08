import React from 'react'

import Layout from '@layout/Layout'
import Navbar from '@layout/Header/Navbar'
import FooterShort from '@layout/Footer/FooterShort'
import SingleServiceRegister from '@components/services/SingleServiceRegister'
import FooterTwo from '@layout/Footer/FooterTwo'

const RequestDemo = () => {
  return (
    <Layout title="Request Demo" desc="This is request demo page">
      <Navbar navDark />
      <SingleServiceRegister />

      <FooterTwo />
    </Layout>
  )
}

export default RequestDemo
