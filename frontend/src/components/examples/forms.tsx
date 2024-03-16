'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { values } from 'lodash';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { InferType, boolean, mixed, object, string } from 'yup';
import { cn } from '../../utils/tailwind-utils';
import { Button, buttonVariants } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

enum RadioGroupTypes {
  all = 'all',
  mentions = 'mentions',
  none = 'none',
}

// 1. Define your form schema using zod.
const formSchema = object({
  username: string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .required('Username is required.'),
  email: string()
    .email({
      message: 'Email must be a valid email.',
    })
    .required('Email is required.'),
  mobile: boolean().default(false).optional(),
  type: mixed<RadioGroupTypes>().oneOf(values(RadioGroupTypes)).required('Type is required.'),
});

const ExampleUsageForms = () => {
  // 2. Define your form.
  const form = useForm<InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      mobile: false,
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log('🚀 ~ file: forms.tsx:55 ~ onSubmit ~ values:', values);
  });
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className='space-y-4'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='mobile'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked as boolean)}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Use different settings for my mobile devices</FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{' '}
                  <Link
                    className={cn(buttonVariants({ variant: 'link', className: 'px-0' }))}
                    href='/'
                  >
                    mobile settings
                  </Link>{' '}
                  page.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => field.onChange(value as RadioGroupTypes)}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='all' />
                    </FormControl>
                    <FormLabel className='font-normal'>All new messages</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='mentions' />
                    </FormControl>
                    <FormLabel className='font-normal'>Direct messages and mentions</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='none' />
                    </FormControl>
                    <FormLabel className='font-normal'>Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default ExampleUsageForms;
