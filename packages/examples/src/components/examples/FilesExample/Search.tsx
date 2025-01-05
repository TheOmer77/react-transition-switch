import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

export const Search = () => (
  <div className='flex h-16 w-full items-center justify-center px-4 md:start-80'>
    <div className='relative w-full md:max-w-sm'>
      <Input placeholder='Search files...' className='ps-10' />
      <SearchIcon className='pointer-events-none absolute inset-y-2.5 start-3.5 text-muted-foreground' />
    </div>
  </div>
);
