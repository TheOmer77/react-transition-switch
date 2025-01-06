import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { HomeIcon, Share2Icon, StarIcon } from 'lucide-react';

import { FavoritesPage } from './favorites-page';
import { HomePage } from './home-page';
import { SharedPage } from './shared-page';

export const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, pageComponent: <HomePage /> },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: StarIcon,
    pageComponent: <FavoritesPage />,
  },
  {
    id: 'shared',
    label: 'Shared',
    icon: Share2Icon,
    pageComponent: <SharedPage />,
  },
] as const satisfies {
  id: string;
  label: string;
  icon: LucideIcon;
  pageComponent: ReactNode;
}[];

export type NavItemId = (typeof navItems)[number]['id'];
