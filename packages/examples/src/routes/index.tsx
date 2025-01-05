import {
  createBrowserRouter,
  type RouteObject,
  useLocation,
} from 'react-router-dom';
import { TransitionSwitchItem } from 'react-transition-switch';

import { SharedAxis } from '@/components/transitions/SharedAxis';

import ErrorPage from './Error';
import FilesExample from './FilesExample';
import PhotosExample from './PhotosExample';
import Root from './Root';
import SettingsExample from './SettingsExample';
import StepsExample from './StepsExample';

const routes: RouteObject[] = [
  { index: true, element: <Root /> },
  { path: '/settings', element: <SettingsExample /> },
  { path: '/files', element: <FilesExample /> },
  { path: '/photos', element: <PhotosExample /> },
  { path: '/steps', element: <StepsExample /> },
];

const RouterRoot = () => {
  const { pathname } = useLocation();

  return (
    <SharedAxis
      value={pathname}
      axis='z'
      className='min-h-dvh w-dvw overflow-hidden [&>*]:size-full'
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
