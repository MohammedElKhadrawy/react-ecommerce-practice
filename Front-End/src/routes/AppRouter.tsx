import { createBrowserRouter, json, RouterProvider } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout/MainLayout';
import AboutUsPage from '@pages/AboutUsPage';
import CategoriesPage from '@pages/CategoriesPage';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import ProductsPage from '@pages/ProductsPage';
import RegisterPage from '@pages/RegisterPage';
import ErrorPage from '@pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'categories/products/:prefix',
        element: <ProductsPage />,
        loader: ({ params }) => {
          const { prefix } = params;
          if (
            typeof prefix !== 'string' ||
            // it has to be all alphabetic from start(^) to end($) of prefix
            !/^[a-z]+$/i.test(prefix)
          ) {
            throw json(
              { message: 'Bad request' },
              { statusText: 'Category not found', status: 400 }
            );
          }
          return true;
        },
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
