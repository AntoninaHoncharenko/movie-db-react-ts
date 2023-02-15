import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Navigation, NavItem } from './SharedLayout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Navigation>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
