import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'
import { SessionProvider } from "next-auth/react"

export default function App({ session, Component,...pageProps }: any) {
  return (
  <SessionProvider session={pageProps.session}>
    {/* @ts-ignore */}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
  )
}
