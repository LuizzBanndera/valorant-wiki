import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import {NextIntlProvider} from 'next-intl'
import Header from './components/header'
import "animate.css"
import 'rsuite/styles/index.less'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
  <NextIntlProvider messages={pageProps.messages}>      
    <NextNProgress color='red' options={{ showSpinner: false }} />
     <Header/>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </NextIntlProvider>
  )
}
export default MyApp
