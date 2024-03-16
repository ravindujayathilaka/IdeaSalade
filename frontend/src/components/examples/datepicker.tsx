'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { InferType, date, object } from 'yup';
import { cn } from '../../utils/tailwind-utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const formSchema = object({
  dob: date().required('Date of birth is required'),
});

type FormValues = InferType<typeof formSchema>;

const ExampleDatePicker = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const [date, setDate] = useState<DateRange | undefined>({ from: new Date(), to: new Date() });

  const onSubmit = form.handleSubmit((values) => {
    console.log('🚀 ~ file: datepicker.tsx:30 ~ onSubmit ~ values:', values);
  });
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className='space-y-8'>
        <FormField
          control={form.control}
          name='dob'
          render={() => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id='date'
                      variant={'outline'}
                      className={cn(
                        'w-[300px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                      )}
                    >
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                          </>
                        ) : (
                          format(date.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    initialFocus
                    mode='range'
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ExampleDatePicker;
