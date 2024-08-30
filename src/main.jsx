import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import {Create} from "./pages/Create";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Create/>
    </ThemeProvider>
  </StrictMode>,
)
