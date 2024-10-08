import React from 'react'
import Head from 'next/head'

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? 'overflow-hidden' : ''
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `6ix City Immigration Inc. | ${title}`
            : '6ix City Immigration Inc.'}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  )
}

export default Layout
