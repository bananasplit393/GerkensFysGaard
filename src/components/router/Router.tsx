import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, 
  useRoutes } from 'react-router-dom';
// import { RequireAuth } from '~/components/auth/AuthProvider';

import Loading from '~/components/layout/ui/Loading';
import { Homepage } from '~/components/pages/HomePage';
import BookTidPage from '~/components/pages/BookTidPage';

// Dropdown Pages
    // Om imports 
    import Alexander from '../pages/Om/AlexanderPage';
    import OmOsPage from '../pages/Om/OmOsPage';

    // Konsultatoner og Behandlinger
    import AkupunkturPage from '../pages/KonsultationerOgBehandlinger/AkupunkturPage';
    import BindevaevsmassagePage from '../pages/KonsultationerOgBehandlinger/BindevaevsMasPage';
    import BioKranSakralTerapiPage from '../pages/KonsultationerOgBehandlinger/BioKranSakralTerapiPage';
    import DiabetesLivsstilsPage from '../pages/KonsultationerOgBehandlinger/DiabetesOgLivPage';
    import RenKostPage from '../pages/KonsultationerOgBehandlinger/RenKostPage';
    import TelefonkonsultationPage from '../pages/KonsultationerOgBehandlinger/TelefonkonsultationPage';
    import FysiurgiskMassagePage from '../pages/KonsultationerOgBehandlinger/FysiurgiskMasPage';

    // Symptomer imports
    import AngstPage from '../pages/Symptomer/AngstPage';
    import DepressionPage from '../pages/Symptomer/DepressionPage';
    import FysiskeSymptomerPage from '../pages/Symptomer/FysiskeSymptomerPage';
    import HovedpinePage from '../pages/Symptomer/HovedpinePage';
    import KaebesmerterPage from '../pages/Symptomer/KæbesmerterPage';
    import NakkesmerterPage from '../pages/Symptomer/NakkeSmerterPage';
    import PsykiskeSymptomerPage from '../pages/Symptomer/PsykiskeSymptomerPage';
    import RygsmerterPage from '../pages/Symptomer/RygsmerterPage';
    import StressPage from '../pages/Symptomer/StressPage';

    
// Lazy loaded pages
// const ProtectedScreen = lazy(() => import('~/components/pages/Protected'));
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
          path: '/book-tid',
          element: <BookTidPage />
        },
        
          // Om Pages
          { path: '/om-os', element: <OmOsPage /> },
          { path: '/alexander', element: <Alexander /> },

          // Konsultationer og Behandlinger
          { path: '/akupunktur', element: <AkupunkturPage /> },
          { path: '/bindevavs-massage', element: <BindevaevsmassagePage /> },
          { path: '/biodynamisk-kranio-sakral-terapi', element: <BioKranSakralTerapiPage /> },
          { path: '/diabetes-og-livsstil', element: <DiabetesLivsstilsPage /> },
          { path: 'fysiurgisk-massage', element: <FysiurgiskMassagePage /> },
          { path: '/ren-kost', element: <RenKostPage /> },
          { path: '/telefonkonsultation', element: <TelefonkonsultationPage /> },

          // Symptom Pages
          { path: '/angst', element: <AngstPage /> },
          { path: '/depression', element: <DepressionPage /> },
          { path: '/fysiske-symptomer', element: <FysiskeSymptomerPage /> },
          { path: '/hovedpine', element: <HovedpinePage /> },
          { path: '/kaebesmerter', element: <KaebesmerterPage /> },
          { path: '/nakkesmerter', element: <NakkesmerterPage /> },
          { path: '/psykiske-symptomer', element: <PsykiskeSymptomerPage /> },
          { path: '/rygsmerter', element: <RygsmerterPage /> },
          { path: '/stress', element: <StressPage /> },
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
