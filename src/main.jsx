import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Route} from 'react-router-dom'
import { createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom';
import './index.css';

  // import { Home, Layout, About, Contact, Service} from 'lucide-react';
  import { Home } from './components/Home/Home';
  import { Layout } from './components/Layout';
  import { About } from './About';
  import { Contact } from './components/Contact/Contact';
  import { Service } from './components/Service/Service';

const root = document.getElementById('root');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
