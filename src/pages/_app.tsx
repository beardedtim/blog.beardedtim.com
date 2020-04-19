import { AppProps } from 'next/app'
import 'highlight.js/styles/tomorrow-night-eighties.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp