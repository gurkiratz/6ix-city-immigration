import React from 'react'
import Layout from '@layout/Layout'
import Navbar from '@layout/Header/Navbar'
import LatestBlog from '@components/blogs/LatestBlog'
import PageHeader from '@components/common/PageHeader'
import CanadianCitizenship from '@components/blogs/CanadianCitizenship'
import FooterTwo from '@layout/Footer/FooterTwo'
import QuickSupport from '@components/support/QuickSupport'

const BlogSingle = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-dark" />
      <PageHeader
        title="Your Path to Canadian Citizenship: Expert Guidance and Support"
        image="/service/canada-citizen.jpg"
      />
      <CanadianCitizenship />
      <LatestBlog />
      <QuickSupport />
      <FooterTwo />
    </Layout>
  )
}

export default BlogSingle
