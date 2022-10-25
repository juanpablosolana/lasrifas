import { SessionProvider } from "next-auth/react"
import MainLayout from '@components/MainLayout'
import '@styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  )
}

export default MyApp
