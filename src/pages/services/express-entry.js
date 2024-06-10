import React from 'react'
import Layout from '@layout/Layout'
import FooterTwo from '@layout/Footer/FooterTwo'
import Navbar from '@layout/Header/Navbar'
import LatestBlog from '@components/blogs/LatestBlog'
import PageHeader from '@components/common/PageHeader'
import ExpressEntry from '@components/blogs/ExpressEntry'
import QuickSupport from '@components/support/QuickSupport'

const BlogSingle = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-dark" />
      <PageHeader title="Express Entry: Your Pathway to Permanent Residency in Canada" />
      <ExpressEntry />
      <LatestBlog />
      <QuickSupport />
      <FooterTwo />
    </Layout>
  )
}

export default BlogSingle
