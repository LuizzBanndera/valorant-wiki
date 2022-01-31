import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Header from './components/header'
import Context from '../context/state'
import {StoreProvider} from 'easy-peasy'
import {store} from '@redux/store'
import "animate.css"
import 'rsuite/styles/index.less'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <StoreProvider store={store}>
      <Context>
        <NextNProgress color='red' options={{ showSpinner: false }} />
        <Header/>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </Context>
    </StoreProvider>
  )
}
export default MyApp
