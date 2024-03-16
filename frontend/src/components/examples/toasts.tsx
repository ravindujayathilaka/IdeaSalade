'use client';

import { useToast } from '../../hooks/use-toast';
import { Button } from '../ui/button';

const ExampleUsageToasts = () => {
  const { toast } = useToast();
  return (
    <div className='flex space-x-3'>
      <Button
        onClick={() =>
          toast({
            title: 'Toast title',
            description: 'Toast description',
          })
        }
      >
        Toast action
      </Button>
      <Button
        variant={'destructive'}
        onClick={() =>
          toast({
            variant: 'destructive',
            title: 'error Toast title',
            description: 'error Toast description',
          })
        }
      >
        error toast action
      </Button>
    </div>
  );
};

export default ExampleUsageToasts;
