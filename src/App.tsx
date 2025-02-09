import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import { Navigation } from './components/Navigation';
import Products from './pages/Products';
import About from './pages/About';
import { MantineProvider } from '@mantine/core';

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
  return (
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
  )
}

export default App
