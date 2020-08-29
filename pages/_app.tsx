import { AppProps } from 'next/app'
import '../style/layout.css'
import 'fontsource-roboto';
import { Layout } from "../layouts/Layout";
import {useState} from 'react';
import { auth } from '../config/firebase';
import { UserProvider } from '../utils/UserProvider';


function MyApp({ Component, router, pageProps }: AppProps) {



    return (<UserProvider>
      {router.pathname.startsWith('/phase') ? 
            <Layout>
              <Component {...pageProps} />
            </Layout>
            :
            <Component {...pageProps} />
      }
      </UserProvider>)


}

export default MyApp