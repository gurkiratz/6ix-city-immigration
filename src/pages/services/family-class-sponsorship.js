import React from 'react'
import Layout from '@layout/Layout'
import Navbar from '@layout/Header/Navbar'
import LatestBlog from '@components/blogs/LatestBlog'
import PageHeader from '@components/common/PageHeader'
import FamilyClassSponsorship from '@components/blogs/FamilyClassSponsorship'
import FooterTwo from '@layout/Footer/FooterTwo'
import QuickSupport from '@components/support/QuickSupport'

const BlogSingle = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-dark" />
      <PageHeader
        title="Family Class Sponsorship: Reuniting Families in Canada
"
        image={'/service/family.jpg'}
      />
      <FamilyClassSponsorship />
      <LatestBlog />
      <QuickSupport />
      <FooterTwo />
    </Layout>
  )
}

export default BlogSingle
