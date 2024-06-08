import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = '6ix City Immigration Inc.'
const APP_DESCRIPTION =
  '6ix City Immigration: Simplifying your Immigration Journey. We specialize in Express Entry, LMIA, PGWP, Permanent Residence, Work/Study Permit, and more.'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
