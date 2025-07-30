import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
// import { RequireAuth } from '~/components/auth/AuthProvider';

import Loading from '~/components/shared/Loading';
import { HomePage } from '../pages/HomePage';
const LoginScreen = lazy(() => import('~/components/pages/Login'));
const NotFoundScreen = lazy(() => import('~/components/pages/NotFound'));

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        // {
        //   path: '/protected',
        //   element: (
        //     <RequireAuth>
        //       <ProtectedScreen />
        //     </RequireAuth>
        //   ),
        // },
        {
          path: '/login',
          element: <LoginScreen />,
        },
        {
          path: '*',
          element: <NotFoundScreen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
