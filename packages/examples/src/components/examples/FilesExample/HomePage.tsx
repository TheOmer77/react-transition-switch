import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/lib/utils';

import { CategoriesSection } from './CategoriesSection';
import { FileList, type FileListItem } from './FileList';
import { UsedStorageCard } from './UsedStorageCard';

const RECENT_FILES = [
  {
    name: 'AnnualReport2023.docx',
    type: 'document',
    size: '60 KB',
    modified: new Date('2024-01-31'),
  },
  {
    name: 'VacationPhotos2024.jpg',
    type: 'image',
    size: '1.2 MB',
    modified: new Date('2024-01-30'),
  },
  {
    name: 'ProjectProposalPhase2.pdf',
    type: 'pdf',
    size: '750 KB',
    modified: new Date('2024-01-29'),
  },
  {
    name: 'BudgetPlan2024.xlsx',
    type: 'spreadsheet',
    size: '700 KB',
    modified: new Date('2024-01-28'),
  },
  {
    name: 'TeamMeetingMinutes.docx',
    type: 'document',
    size: '55 KB',
    modified: new Date('2024-01-27'),
  },
  {
    name: 'MeetingMinutes.docx',
    type: 'document',
    size: '35 KB',
    modified: new Date('2024-01-23'),
  },
  {
    name: 'MarketingPlan.pptx',
    type: 'presentation',
    size: '4.5 MB',
    modified: new Date('2024-01-22'),
  },
  {
    name: 'Report1.pdf',
    type: 'pdf',
    size: '1.1 MB',
    modified: new Date('2024-01-21'),
  },
  {
    name: 'TeamDirectory.docx',
    type: 'document',
    size: '55 KB',
    modified: new Date('2024-01-20'),
  },
  {
    name: 'Image2.jpg',
    type: 'image',
    size: '1.5 MB',
    modified: new Date('2024-01-19'),
  },
  {
    name: 'Spreadsheet1.xlsx',
    type: 'spreadsheet',
    size: '600 KB',
    modified: new Date('2024-01-18'),
  },
  {
    name: 'Presentation4.pptx',
    type: 'presentation',
    size: '3.8 MB',
    modified: new Date('2024-01-17'),
  },
] satisfies FileListItem[];

export const HomePage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ className, ...props }, ref) => (
  <main {...props} ref={ref} className={cn('flex flex-col gap-6', className)}>
    <UsedStorageCard />
    <CategoriesSection />
    <section className='space-y-2'>
      <h2 className='text-xl font-semibold tracking-tight'>Recent files</h2>
      <FileList data={RECENT_FILES} />
    </section>
  </main>
));
HomePage.displayName = 'HomePage';
