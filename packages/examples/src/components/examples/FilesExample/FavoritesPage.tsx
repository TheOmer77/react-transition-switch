import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { FileList, type FileListItem } from './FileList';

// Favorites
const FAVORITE_FILES = [
  {
    name: 'ImportantNotes.txt',
    type: 'text',
    size: '15 KB',
    modified: new Date('2024-02-01'),
  },
  {
    name: 'Budget2024.xlsx',
    type: 'spreadsheet',
    size: '550 KB',
    modified: new Date('2024-01-30'),
  },
  {
    name: 'Presentation3.pptx',
    type: 'presentation',
    size: '3.2 MB',
    modified: new Date('2024-01-29'),
  },
  {
    name: 'LongFileNameForAnotherDocument.docx',
    type: 'document',
    size: '45 KB',
    modified: new Date('2024-01-28'),
  },
  {
    name: 'SalesReport.pdf',
    type: 'pdf',
    size: '750 KB',
    modified: new Date('2024-01-27'),
  },
  {
    name: 'Image1.jpg',
    type: 'image',
    size: '1.2 MB',
    modified: new Date('2024-01-26'),
  },
  {
    name: 'Expenses.xlsx',
    type: 'spreadsheet',
    size: '480 KB',
    modified: new Date('2024-01-25'),
  },
  {
    name: 'VideoTutorial.mp4',
    type: 'video',
    size: '25 MB',
    modified: new Date('2024-01-24'),
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

export const FavoritesPage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ ...props }, ref) => (
  <main {...props} ref={ref}>
    <FileList data={FAVORITE_FILES} />
  </main>
));
FavoritesPage.displayName = 'FavoritesPage';
