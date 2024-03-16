'use client';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ExampleUsageInputs = () => {
  return (
    <>
      <fieldset>
        <Label htmlFor='name'>Label</Label>
        <Input id='name' placeholder='Ex: Nisal Renuja Palliyaguru' />
      </fieldset>
      <fieldset className='w-full max-w-xs'>
        <SelectGroup>
          <SelectLabel>Select Theme</SelectLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>
      </fieldset>
    </>
  );
};

export default ExampleUsageInputs;
