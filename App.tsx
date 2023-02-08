// App.tsx

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { TermsScreen } from "./src/screens/TermsScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Navigator} from './src/navigation/Navigator';
import { ScreenContainer } from './src/screens/ScreenContainer';
import { NetworkProvider } from "react-native-offline";


const queryClient = new QueryClient()


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <Navigator/>
      </NetworkProvider>
    </QueryClientProvider>
  );
};

export default App;