import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import { routes } from './routes';
import Loader from './components/Loader/Loader';
const { home, country, countryDetails } = routes;

const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={country} Country element={<SearchCountry />} />
          <Route path={countryDetails} element={<Country />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
