import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout/Layout';
import { AppContextProvider } from './components/Contexts/AppContext';
import { MainRoutes } from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { LoginProvider } from './components/Contexts/LoginContext';

export const App = () => {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <LoginProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </LoginProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
