import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from "./store/strore";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from './pages/NotFoundPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/detail/:country',
    element: <DetailPage />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
