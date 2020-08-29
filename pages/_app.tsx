import { AppProps } from 'next/app'
import '../style/layout.css'
import 'fontsource-roboto';
import { Layout } from "../layouts/Layout";
import {useState} from 'react';
import { auth } from '../config/firebase';
import { UserProvider } from '../utils/UserProvider';


function MyApp({ Component, router, pageProps }: AppProps) {

  if(router.pathname.startsWith('/phase')) {

    return (<UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </UserProvider>)
  }
  return <Component {...pageProps} />
}

export default MyApp