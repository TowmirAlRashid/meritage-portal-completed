
import '../styles/globals.css'
import { CacheProvider } from '@emotion/react';
import BlankLayout from "../layouts/BlankLayout/BlankLayout";
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../src/createEmotionCache'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MeritagePortal({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <BlankLayout>
        <Component {...pageProps} />
      </BlankLayout>
    </CacheProvider>
  )
}

export default MeritagePortal
