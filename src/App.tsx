import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import {MainRoutes} from './routes/routes';
import { CartProvider } from './hooks/useCart';




export function App() {



return(
  <> 
  <CartProvider>
  <GlobalStyles/>
  <MainRoutes/>
  <ToastContainer autoClose={3000} />
  </CartProvider>
 </>
)
}
