import 'fontsource-roboto';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { firestore } from '../config/firebase';
import { Layout } from "../layouts/Layout";
import '../style/layout.css';
import { UserProvider } from '../utils/UserProvider';
import { PhaseProvider } from '../utils/PhaseProvider';


function MyApp({ Component, router, pageProps }: AppProps) {

    return (
        <UserProvider>
            <Layout>
                {router.pathname.startsWith('/phase') ?
                    <PhaseProvider>
                        <Component {...pageProps} />
                    </PhaseProvider>
                    :
                    <Component {...pageProps} />
                }
            </Layout>
        </UserProvider>)
}

export default MyApp