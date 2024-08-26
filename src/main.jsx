import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import {App} from "./pages/App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </StrictMode>,
)
