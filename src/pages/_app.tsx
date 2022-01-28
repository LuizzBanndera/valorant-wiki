import type { AppProps } from 'next/app'
import "animate.css"
import NextNProgress from 'nextjs-progressbar'
import Header from './components/header'
import 'rsuite/styles/index.less'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <>
      <NextNProgress color='red' options={{ showSpinner: false }} />
      <Header/>
      <div className="content">
        <Component {...pageProps} />
      </div>
      {/* <Footer/> */}
    </>
  )
}
export default MyApp
