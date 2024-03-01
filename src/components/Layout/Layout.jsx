import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wraper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wraper>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Wraper>
  );
};
