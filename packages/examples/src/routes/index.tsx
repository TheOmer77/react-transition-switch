import {
  createBrowserRouter,
  useLocation,
  type RouteObject,
} from 'react-router-dom';
import { TransitionSwitchItem } from '@theomer77/react-transition-switch';

import Root from './Root';
import SimpleExample from './SimpleExample';
import DirectionalExample from './DirectionalExample';
import SharedAxisExample from './SharedAxisExample';
import ErrorPage from './Error';
import SharedAxis from '@/components/SharedAxis';

const routes: RouteObject[] = [
  { index: true, element: <Root /> },
  { path: '/simple', element: <SimpleExample /> },
  // TODO: Advanced
  { path: '/directionalSimple', element: <DirectionalExample /> },
  { path: '/directionalAdvanced', element: <SharedAxisExample /> },
];

const RouterRoot = () => {
  const { pathname } = useLocation();

  return (
    <SharedAxis
      value={pathname}
      axis='z'
      className='overflow-hidden [&>*]:min-h-dvh [&>*]:w-dvw'
    >
      {routes.map(({ index, path, element }) => {
        const value = (index ? '/' : path) as string;
        return (
          <TransitionSwitchItem key={value} value={value}>
            {element}
          </TransitionSwitchItem>
        );
      })}
    </SharedAxis>
  );
};

const router = createBrowserRouter([
  { element: <RouterRoot />, errorElement: <ErrorPage />, children: routes },
]);

export default router;
