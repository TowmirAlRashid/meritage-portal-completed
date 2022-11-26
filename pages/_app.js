
import '../styles/globals.css'
import { CacheProvider } from '@emotion/react';
import BlankLayout from "../layouts/BlankLayout/BlankLayout";
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../src/createEmotionCache'

import AppContext from '../AppContext';
import { useState } from 'react';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MeritagePortal({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {
  const [value, setValue] = useState("Record Details");

  return (
    <CacheProvider value={emotionCache}>
      <AppContext.Provider value={{value, setValue}}>
        <CssBaseline />
        <BlankLayout>
          <Component {...pageProps} />
        </BlankLayout>
      </AppContext.Provider>
    </CacheProvider>
  )
}

export default MeritagePortal
