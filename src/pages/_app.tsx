import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import {NextIntlProvider} from 'next-intl'
import Header from '../lib/components/header'
import 'rsuite/styles/index.less'
import '../styles/global.css'
import Footer from '@components/footer'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
  <NextIntlProvider messages={pageProps.messages}>      
    <NextNProgress color='red' options={{ showSpinner: false }} />
     <Header/>
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </NextIntlProvider>
  )
}
export default MyApp
