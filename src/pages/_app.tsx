import type { AppProps } from 'next/app'
import "animate.css"
import NextNProgress from 'nextjs-progressbar'
import Header from './components/header'
import 'rsuite/styles/index.less'
import '../styles/global.css'
import Context from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <Context>
      <NextNProgress color='red' options={{ showSpinner: false }} />
      <Header/>
      <div className="content">
        <Component {...pageProps} />
      </div>
      {/* <Footer/> */}
    </Context>
  )
}
export default MyApp
