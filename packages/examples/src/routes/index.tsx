import {
  createBrowserRouter,
  useLocation,
  type RouteObject,
} from 'react-router-dom';
import { TransitionSwitchItem } from '@theomer77/react-transition-switch';

import Root from './Root';
import FilesExample from './FilesExample';
import PhotosExample from './PhotosExample';
import SettingsExample from './SettingsExample';
import StepsExample from './StepsExample';
import ErrorPage from './Error';
import SharedAxis from '@/components/SharedAxis';

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
      className='min-h-dvh w-dvw overflow-hidden [&>*]:h-full [&>*]:w-full'
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
