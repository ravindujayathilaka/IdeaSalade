import ExampleUsageButtons from '../../../components/examples/buttons';
import { ExampleCalendar } from '../../../components/examples/calendar';
import ExampleDatePicker from '../../../components/examples/datepicker';
import ExampleUsageDialogs from '../../../components/examples/dialogs';
import ExampleUsageDropdowns from '../../../components/examples/dropdowns';
import ExampleUsageForms from '../../../components/examples/forms';
import ExampleUsageInputs from '../../../components/examples/inputs';
import ExampleUsagePopovers from '../../../components/examples/popovers';
import ExampleUsageToasts from '../../../components/examples/toasts';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { Skeleton } from '../../../components/ui/skeleton';

const ExamplePage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center space-y-3 p-24'>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Buttons =&gt;</h1>
        <ExampleUsageButtons />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Inputs =&gt;</h1>
        <ExampleUsageInputs />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Forms =&gt;</h1>
        <ExampleUsageForms />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Dialogs =&gt;</h1>
        <ExampleUsageDialogs />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Toasts =&gt;</h1>
        <ExampleUsageToasts />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Badges =&gt;</h1>
        <Badge variant='default'>Default</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='destructive'>Destructive</Badge>
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Avatar =&gt;</h1>
        <Avatar>
          <AvatarImage src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Popovers =&gt;</h1>
        <ExampleUsagePopovers />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Dropdowns =&gt;</h1>
        <ExampleUsageDropdowns />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Calendar =&gt;</h1>
        <ExampleCalendar />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Date picker =&gt;</h1>
        <ExampleDatePicker />
      </div>
      <div className='flex items-start space-x-3 w-full'>
        <h1 className='text-primary whitespace-nowrap'>Skeletons =&gt;</h1>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
