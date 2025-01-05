import {
  FileIcon,
  ImageIcon,
  type LucideIcon,
  MusicIcon,
  VideoIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';

const CATEGORIES = [
  { id: 'documents', label: 'Documents', icon: FileIcon },
  { id: 'photos', label: 'Photos', icon: ImageIcon },
  { id: 'videos', label: 'Videos', icon: VideoIcon },
  { id: 'audio', label: 'Audio', icon: MusicIcon },
] as const satisfies { id: string; label: string; icon: LucideIcon }[];

export const CategoriesSection = () => (
  <div className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
    <h2 className='col-span-2 text-xl font-semibold tracking-tight lg:col-span-4'>
      Categories
    </h2>
    {CATEGORIES.map(({ id, label, icon: Icon }) => (
      <Button
        key={id}
        className='h-12 justify-start [&>svg]:me-3 [&>svg]:text-xl'
      >
        <Icon />
        {label}
      </Button>
    ))}
  </div>
);
