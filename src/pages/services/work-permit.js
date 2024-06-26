import React from 'react'
import Layout from '@layout/Layout'
import Navbar from '@layout/Header/Navbar'
import LatestBlog from '@components/blogs/LatestBlog'
import PageHeader from '@components/common/PageHeader'
import WorkPermit from '@components/blogs/WorkPermit'
import FooterTwo from '@layout/Footer/FooterTwo'
import QuickSupport from '@components/support/QuickSupport'

const BlogSingle = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-dark" />
      <PageHeader
        title="Your Guide to Obtaining a Work Permit: How We Can Assist You"
        image="/service/work.jpg"
      />
      <WorkPermit />
      <LatestBlog />
      <QuickSupport />
      <FooterTwo />
    </Layout>
  )
}

export default BlogSingle
