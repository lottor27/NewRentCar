import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Loading from './Loading/Loading';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));


export const App = () => {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
