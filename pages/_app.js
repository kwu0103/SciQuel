<<<<<<< HEAD
import Head from "next/Head";
=======
import Head from "next/head";
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
