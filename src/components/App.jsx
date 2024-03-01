import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Suspense fallback={'loading'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
