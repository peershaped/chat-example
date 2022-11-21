import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const ProtectedRoutes = () => {
  return (
    <Switch>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={path} key={path}>
          <Suspense fallback={<div>.. loading ..</div>}>
            <Component />   
          </Suspense>
        </Route>
      ))}
    </Switch>
  )
}
export default ProtectedRoutes;