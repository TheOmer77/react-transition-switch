import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { FileList, type FileListItem } from './file-list';

const SHARED_FILES = [
  {
    name: 'Project Proposal.docx',
    type: 'document',
    size: '65 KB',
    modified: new Date('2024-01-15'),
    sharedBy: 'Alice Smith',
  },
  {
    name: 'TrainingMaterials.pdf',
    type: 'pdf',
    size: '3.7 MB',
    modified: new Date('2024-01-14'),
    sharedBy: 'John Doe',
  },
  {
    name: 'BusinessPlan.pptx',
    type: 'presentation',
    size: '5.2 MB',
    modified: new Date('2024-01-13'),
    sharedBy: 'Emily Johnson',
  },
  {
    name: 'SalesAnalysis.xlsx',
    type: 'spreadsheet',
    size: '800 KB',
    modified: new Date('2024-01-12'),
    sharedBy: 'Robert Brown',
  },
  {
    name: 'CustomerFeedback.pdf',
    type: 'pdf',
    size: '920 KB',
    modified: new Date('2024-01-11'),
    sharedBy: 'Sarah Williams',
  },
  {
    name: 'Presentation5.pptx',
    type: 'presentation',
    size: '4.1 MB',
    modified: new Date('2024-01-10'),
    sharedBy: 'Michael Davis',
  },
  {
    name: 'Report2.pdf',
    type: 'pdf',
    size: '1.3 MB',
    modified: new Date('2024-01-09'),
    sharedBy: 'David Jones',
  },
  {
    name: 'Image3.jpg',
    type: 'image',
    size: '1.8 MB',
    modified: new Date('2024-01-08'),
    sharedBy: 'Laura Miller',
  },
  {
    name: 'Spreadsheet2.xlsx',
    type: 'spreadsheet',
    size: '720 KB',
    modified: new Date('2024-01-07'),
    sharedBy: 'Daniel Wilson',
  },
  {
    name: 'Document1.docx',
    type: 'document',
    size: '75 KB',
    modified: new Date('2024-01-06'),
    sharedBy: 'Rachel Thompson',
  },
] satisfies FileListItem[];

export const SharedPage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ ...props }, ref) => (
  <main {...props} ref={ref}>
    <FileList data={SHARED_FILES} />
  </main>
));
SharedPage.displayName = 'SharedPage';
