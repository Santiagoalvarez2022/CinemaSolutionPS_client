import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Movie from './pages/Movie/Movie.jsx';

const quertClient = new QueryClient();

const  router = createBrowserRouter([
  {
    path:'/',
    element : <MainLayout />,
    children : [
      {
        index: true, 
        element: <Home />
      },
      {
        path :'movie/:idMovie',
        element : <Movie />,
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={quertClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
