import "fontsource-roboto";
import { AppProps } from "next/app";

import { useEffect, useState, useContext } from "react";
import { firestore } from "../config/firebase";
import { Layout } from "../layouts/Layout";
import "../style/layout.css";
import { UserProvider, UserContext } from "../utils/UserProvider";
import { PhaseProvider } from "../utils/PhaseProvider";
import Router from 'next/router';


function MyApp({ Component, router, pageProps }: AppProps) {



  return (
    <UserProvider>
      {router.pathname.startsWith("/phase") ? (
        <Layout>
          <PhaseProvider>
            <Component {...pageProps} />
          </PhaseProvider>
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
      {/* <pre>
        {phases.sort((a,b) => a.order - b.order).map(phase => <div>
          <h2>{phase.name}</h2>
          {Object.values(phase.steps).sort((a,b) => a.order - b.order).map(step => <div><h4>{step.question}</h4></div>)}</div>)}
      </pre> */}
    </UserProvider>
  );
}

export default MyApp;
