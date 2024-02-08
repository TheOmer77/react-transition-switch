import { HomeIcon, Share2Icon, StarIcon, type LucideIcon } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'favorites', label: 'Favorites', icon: StarIcon },
  { id: 'shared', label: 'Shared', icon: Share2Icon },
] as const satisfies {
  id: string;
  label: string;
  icon: LucideIcon;
}[];

export type NavItemId = (typeof navItems)[number]['id'];
