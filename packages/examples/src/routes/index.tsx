import {
  createBrowserRouter,
  type RouteObject,
  useLocation,
} from 'react-router-dom';
import { TransitionSwitchItem } from 'react-transition-switch';

import { SharedAxis } from '@/components/transitions/shared-axis';

import ErrorPage from './error';
import FilesExample from './files-example';
import PhotosExample from './photos-example';
import Root from './root';
import SettingsExample from './settings-example';
import StepsExample from './steps-example';

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
