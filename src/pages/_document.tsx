import Document, { Html, Head, Main, NextScript } from 'next/document'

import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

const Browser = styled(Html)`
  width: 100%;
  height: 100%;
  font-size: 62.5%;
  color: var(--light);
  font-family: 'Montserrat', sans-serif;
`

const Body = styled.body`
  width: 100%;
  height: 100%;
`

const reset = css`
  :root {
    --dark: #212121;
    --light: #E3e3e3;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
  }
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Browser>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=(Montserrat|Raleway)&display=swap" rel="stylesheet" /> 
        </Head>
        <Body>
          <Global styles={reset}/>
          <Main />
          <NextScript />
        </Body>
      </Browser>
    )
  }
}

export default MyDocument
