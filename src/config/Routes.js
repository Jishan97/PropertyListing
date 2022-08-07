import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
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

const UserProtectedroutes = ({ ...rest }) => {
  return localStorage.getItem("role") === "user" ? (
    <Route {...rest} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: rest.location },
      }}
    />
  );
};

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
    {
      path: "/",
      navbar: () => <NavbarComponent />,
      footer: () => <FooterComponent />,
      main: ({ subRoutes }) => (
        <React.Fragment>
          <Switch>
            {subRoutes.map((subRoute, index) => (
              <UserProtectedroutes
                key={index}
                path={subRoute.path}
                exact={subRoute.exact}
                children={(props) => (
                  <subRoute.main {...props} />
                )}
              />
            ))}
          </Switch>
        </React.Fragment>
      ),
      routes: [
        {
          path: "/list-property",
          exact: true,
          navbar: () => <NavbarComponent />,
          footer: () => <FooterComponent />,
          main: (props) => <ListPage {...props} />,
        },
      ],
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
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={(props) => <route.navbar {...props} />}
            />
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={(props) => (
                <route.main subRoutes={route.routes} {...props} />
              )}
            />
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={(props) => <route.footer {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default routesView;
