import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import {NextIntlProvider} from 'next-intl'
import Header from '../lib/components/header'
import Footer from '@components/footer'
import '../styles/global.css'

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
