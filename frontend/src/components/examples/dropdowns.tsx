'use client';

import { CreditCardIcon, UserCog2 } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const ExampleUsageDropdowns = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open dropdown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserCog2 className='w-4 h-4 mr-3 flex-shrink-0' />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon className='w-4 h-4 mr-3 flex-shrink-0' />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExampleUsageDropdowns;
