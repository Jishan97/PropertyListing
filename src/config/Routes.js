import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

const NavbarComponent = lazy(() =>
  import("../components/navbar/NavbarComponent")
);
const FooterComponent = lazy(() =>
  import("../components/footer/FooterComponent")
);

const LoginPage = lazy(() => import("../pages/login/index"));
const RegisterPage = lazy(() => import("../pages/register/index"));
const HomePage = lazy(() => import("../pages/home/index"));
const ListPage = lazy(() => import("../pages/list/index"));

const routesView = (props) => {
  const routes = [
    {
      path: "/",
      exact: true,
      navbar: () => <NavbarComponent />,
      footer: () => <FooterComponent />,
      main: () => <HomePage {...props} />,
    },
    {
      path: "/login",
      exact: true,
      navbar: () => <></>,
      footer: () => <></>,
      main: () => <LoginPage {...props} />,
    },
    {
      path: "/register",
      exact: true,
      navbar: () => <></>,
      footer: () => <></>,
      main: () => <RegisterPage {...props} />,
    },
  ];

  return (
    <Suspense
      fallback={
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                color: "#24695c",
                fontFamily: "Montserrat-Bold",
              }}
            >
              {" "}
              Real Estate{" "}
            </h1>
            <span>&nbsp;</span>
            <h1
              style={{
                fontSize: "30px",
                color: "#24695c",
                fontFamily: "Montserrat-Bold",
              }}
            >
              Welcome...
            </h1>
          </div>
        </div>
      }
    >
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.navbar {...props} />}
            />
          ))}
        </Routes>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.main {...props} />}
            />
          ))}
        </Routes>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.footer {...props} />}
            />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default routesView;
