import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { Navigation } from './components/Navigation';
import Products from './pages/Products';
import About from './pages/About';
import { MantineProvider } from '@mantine/core';
import { BASKET_CONTEXT } from './global_contexts';
import { useEffect, useState } from 'react';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='about' element={<About />} />
    </Route>
  )
);

function App() {
  const [basket, updateBasketData] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <BASKET_CONTEXT.Provider value={{ basket, updateBasketData }}>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </BASKET_CONTEXT.Provider>
  )
}

export default App
