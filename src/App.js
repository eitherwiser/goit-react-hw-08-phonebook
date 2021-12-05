import React, { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader.jsx';

import { getIsLoggedIn, getFetchCurrentUser } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import './App.css';
//

const LoginPage = lazy(() => import('views/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() =>
  import('views/RegistrationPage/RegistrationPage.jsx'),
);
const PhonebookPage = lazy(() =>
  import('views/PhonebookPage/PhonebookPage.jsx'),
);
const UnknownPage = lazy(() => import('views/UnknownPage'));

export default function App() {
  const isloggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getFetchCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <>
        <Routes>
          <Route
            path="/"
            element={
              !isloggedIn ? (
                <Navigate replace to="/login" />
              ) : (
                <Navigate replace to="/phonebook" />
              )
            }
          />

          <Route
            path="/login"
            element={
              !isloggedIn ? (
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              ) : (
                <Navigate replace to="/phonebook" />
              )
            }
          ></Route>
          <Route
            path="/registration"
            element={
              !isloggedIn ? (
                <Suspense fallback={<Loader />}>
                  <RegistrationPage />
                </Suspense>
              ) : (
                <Navigate replace to="/phonebook" />
              )
            }
          ></Route>
          <Route
            path="/phonebook/*"
            element={
              isloggedIn ? (
                <Suspense Suspense fallback={<Loader />}>
                  <PhonebookPage />
                </Suspense>
              ) : (
                <Navigate replace to="/login" />
              )
            }
          ></Route>
          <Route
            path="/*"
            element={
              isloggedIn ? (
                <Suspense fallback={<Loader />}>
                  <UnknownPage />
                </Suspense>
              ) : (
                <Navigate replace to="/login" />
              )
            }
          ></Route>
        </Routes>
      </>
    )
  );
}
