import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { theme } from "./src/theme/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {Toast} from '@components';
//import {ToastProvider} from '@services';
import { Router } from "./src/routes/Routes";


function App(): JSX.Element{
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
      {/* Only use ToastProvider if it is using Context implementation.
          Zustand implementation doesn't need a provider */}
        {/* <ToastProvider> */}
        <Router />
        <Toast />
        {/* </ToastProvider> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;