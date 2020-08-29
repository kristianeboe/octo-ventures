import 'fontsource-roboto';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { firestore } from '../config/firebase';
import { Layout } from "../layouts/Layout";
import '../style/layout.css';
import { UserProvider } from '../utils/UserProvider';
import { PhaseProvider } from '../utils/PhaseProvider';


function MyApp({ Component, router, pageProps }: AppProps) {
// const [phases, setPhases] = useState([])
// useEffect(() => {
//   firestore.collection('phases').get().then(snapshot => {
//     const p = []
//     snapshot.forEach(doc => {
//       p.push(doc.data())
//     })
//     setPhases(p)
//   })
// }, [])

    return (<UserProvider>
      {router.pathname.startsWith('/phase') ? 
            <Layout>
              <PhaseProvider>
                <Component {...pageProps} />
              </PhaseProvider>
            </Layout>
            :
            <Component {...pageProps} />
      }
      {/* <pre>
        {phases.sort((a,b) => a.order - b.order).map(phase => <div>
          <h2>{phase.name}</h2>
          {Object.values(phase.steps).sort((a,b) => a.order - b.order).map(step => <div><h4>{step.question}</h4></div>)}</div>)}
      </pre> */}
      </UserProvider>)


}

export default MyApp