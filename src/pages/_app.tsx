import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/header'
import theme from '../../styles/theme/theme'
import withAppProvider from '../contexts/app/app.provider'

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default withAppProvider(App)
