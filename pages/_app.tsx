import { AppProps } from 'next/app'
import '../style/layout.css'
import 'fontsource-roboto';
import { Layout } from "../layouts/Layout";

function MyApp({ Component, router, pageProps }: AppProps) {
  if(router.pathname.startsWith('/phase')) {
    return <Layout><Component {...pageProps} /></Layout>
  }
  return <Component {...pageProps} />
}

export default MyApp