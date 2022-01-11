import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "animate.css"
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <>
      <NextNProgress color='red' options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
