'use client';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { Calendar } from '../ui/calendar';

const ExampleCalendar = () => {
  const [date, setDate] = useState<DateRange | undefined>({ from: new Date(), to: new Date() });

  return (
    <Calendar
      initialFocus
      mode='range'
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
    />
  );
};

export { ExampleCalendar };
