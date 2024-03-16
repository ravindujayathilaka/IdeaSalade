import { AlertCircle, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const ExampleUsageAlerts = () => {
  return (
    <>
      <Alert>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </>
  );
};

export default ExampleUsageAlerts;
