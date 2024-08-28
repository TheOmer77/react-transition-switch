import { useMemo, useRef, useState } from 'react';
import { ImagePlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';

export const AvatarInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fileUrl = useMemo(() => file && URL.createObjectURL(file), [file]);

  return (
    <>
      <Button
        tabIndex={0}
        onClick={() => inputRef.current?.click?.()}
        className='h-32 w-32 self-center rounded-full border border-input p-0 after:z-10 [&>svg]:text-2xl'
      >
        {file && typeof fileUrl === 'string' ? (
          <img
            src={fileUrl}
            alt='Avatar'
            className='h-full w-full object-cover'
          />
        ) : (
          <ImagePlusIcon />
        )}
      </Button>
      <input
        ref={inputRef}
        type='file'
        name='avatar'
        id='fileinput-avatar'
        accept='image/png, image/jpeg'
        className='hidden'
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) setFile(file);
        }}
      />
    </>
  );
};
