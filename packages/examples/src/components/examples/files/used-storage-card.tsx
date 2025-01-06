import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProgressCircle } from '@/components/ui/progress-circle';

// These are in GB
const MAX_STORAGE = 64,
  USED_STORAGE = 42.6;

export const UsedStorageCard = () => (
  <Card className='flex flex-row justify-between'>
    <CardHeader className='gap-0'>
      <CardTitle className='text-2xl'>{`${USED_STORAGE} GB used`}</CardTitle>
      <CardDescription>{`out of ${MAX_STORAGE} GB`}</CardDescription>
      <Button className='mt-auto justify-self-end'>See details</Button>
    </CardHeader>
    <CardContent className='relative pt-6'>
      <ProgressCircle
        value={USED_STORAGE}
        maxValue={MAX_STORAGE}
        className='text-8xl text-primary'
      />
      <span className='absolute top-6 inline-flex aspect-square w-24 items-center justify-center'>
        {`${((USED_STORAGE / MAX_STORAGE) * 100).toFixed()}%`}
      </span>
    </CardContent>
  </Card>
);
