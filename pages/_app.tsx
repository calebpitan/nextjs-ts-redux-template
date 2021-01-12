import { RootState, wrapper } from '@redux/store'
import type { AppProps } from 'next/app'
import { Provider, useStore } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore<RootState>()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
