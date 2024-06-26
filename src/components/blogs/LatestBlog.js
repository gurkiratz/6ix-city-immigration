/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SectionTitle from '../common/SectionTitle'
import { blogServicesData } from '../../utils/data'

const LatestBlog = () => {
  return (
    <section className="related-blog-list ptb-120 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-12">
            <SectionTitle
              subtitle="Services"
              title="Check Out Other Services We Provide"
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
              <Link href="/services">
                <a className="btn btn-primary"> View All Services</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogServicesData.slice(0, 3).map((blog, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom mb-4 mb-lg-0">
                <Link href={blog.href || '/'}>
                  <a className="article-img">
                    <Image
                      width={414}
                      height={224}
                      src={blog.image || '/blog-3.jpg'}
                      alt="article"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  <Link href="/blog-single">
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {blog.header}
                      </h2>
                    </a>
                  </Link>
                  <p className="limit-2-line-text">{blog.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlog
