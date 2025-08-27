import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
// import { RequireAuth } from '~/components/auth/AuthProvider';

import Loading from '~/components/ui/Loading';
// Update the import path to the correct location of Homepage
import { Homepage } from '~/components/pages/HomePage';
import Alexander from '../pages/Alexander';
import Louise from '../pages/Louise';
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
          element: <Homepage />,
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
          path: '/alexander',
          element: <Alexander />,
        },
        {
          path: '/louise',
          element: <Louise />,
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
