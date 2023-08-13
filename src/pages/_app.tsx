import ButtomHeader from '@/components/header/ButtomHeader'
import Header from '@/components/header/Header'
import '@/styles/globals.css'
import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import {SessionProvider} from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
  
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={null}>
    <SessionProvider session={session}>
  <div className='font-bodyFont bg-gray-300 marker  overflow-hidden'>
    <Header/>
    <ButtomHeader />

    <Component {...pageProps} />
    
    <BackToTopButton />
    <Footer/>
  </div>
  </SessionProvider>
  </PersistGate>
  </Provider>
  )
}
