import { Route, Routes,useRoutes } from "react-router-dom";
import routes from "./Routes";
import type { RouteObject } from "react-router-dom";

const Router = () => {
  let element = useRoutes(routes);

  const pageRoutes = routes.map(({ path, element }: RouteObject) => {

    return <Route  path={`/${path}`} element={element} />;
  });

  return <Routes >{pageRoutes}</Routes>;
};

export default Router;