import {
  FileIcon,
  FileTextIcon,
  ImageIcon,
  PresentationIcon,
  Table2Icon,
  VideoIcon,
} from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import { Button } from '../ui/Button';

export type FileListItem = {
  name: string;
  type:
    | 'document'
    | 'spreadsheet'
    | 'presentation'
    | 'image'
    | 'pdf'
    | 'text'
    | 'video';
  size: `${number} ${'B' | 'KB' | 'MB' | 'GB'}`;
  modified: Date;
  sharedBy?: string;
};

const getFileTypeIcon = (type: FileListItem['type']) => {
  switch (type) {
    case 'document':
    case 'pdf':
      return FileTextIcon;
    case 'video':
      return VideoIcon;
    case 'image':
      return ImageIcon;
    case 'spreadsheet':
      return Table2Icon;
    case 'presentation':
      return PresentationIcon;
    case 'text':
    default:
      return FileIcon;
  }
};
const getFormattedDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export const FileList = ({ data = [] }: { data?: FileListItem[] }) => {
  const showSharedBy = data.some(item => typeof item.sharedBy === 'string');

  const listItems = data.map(
    ({ name, type, sharedBy, size, modified }, index) => {
      const Icon = getFileTypeIcon(type);
      const formattedModified = getFormattedDate(modified);

      return (
        <li key={index}>
          <Button
            variant='flat'
            className='-inset-x-2 flex h-auto w-[calc(100%+1rem)] flex-row
items-center justify-start gap-4 px-4 py-2 text-start [&>svg]:text-xl'
          >
            <Icon />
            <div className='flex flex-col'>
              <span className='text-base'>{name}</span>
              <span className='text-xs font-normal text-muted-foreground'>
                {`${
                  showSharedBy && sharedBy ? `Shared by ${sharedBy}` : size
                } • ${formattedModified}`}
              </span>
            </div>
          </Button>
        </li>
      );
    }
  );

  const tableRows = data.map(
    ({ name, type, sharedBy, size, modified }, index) => {
      const Icon = getFileTypeIcon(type);
      const formattedModified = getFormattedDate(modified);

      return (
        <TableRow key={index}>
          <TableCell className='flex flex-row items-center gap-4 font-medium'>
            <Icon className='text-xl' />
            {name}
          </TableCell>
          {showSharedBy && <TableCell>{sharedBy}</TableCell>}
          <TableCell>{size}</TableCell>
          <TableCell>{formattedModified}</TableCell>
        </TableRow>
      );
    }
  );

  return (
    <>
      <ul className='md:hidden'>{listItems}</ul>
      <Table className='hidden md:table'>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            {showSharedBy && <TableHead>Shared by</TableHead>}
            <TableHead>Size</TableHead>
            <TableHead>Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </>
  );
};
