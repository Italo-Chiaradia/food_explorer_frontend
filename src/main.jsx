import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import {Home} from "./pages/Home";
import dishes from "./pages/Home/dishes.json";
const user = {role: "admin"}
const dishesArray = dishes.DISHES;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </StrictMode>,
)
