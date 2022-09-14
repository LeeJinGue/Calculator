// Create a client
// const queryClient = new QueryClient();

import { AppProps } from "next/app";
import store from "../../features/store";
import {Provider as RTKProvider} from "react-redux"
import { ChakraProvider  } from '@chakra-ui/react'
import theme from "../../../styles/theme/theme";

function withAppProvider(AppComponent: React.FC<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <RTKProvider store={store}>
        {/* <QueryClientProvider client={queryClient}>
          <ChakraProvider resetCSS theme={theme}>
          
            <Fonts /> */}
              <ChakraProvider theme={theme}>
                <AppComponent {...props} />
              </ChakraProvider>  
          {/* </ChakraProvider>
        </QueryClientProvider> */}
      </RTKProvider>
    );
  };
}

export default withAppProvider;
