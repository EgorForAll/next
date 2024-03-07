'use client';
import * as React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const Sidenav: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className='flex w-1/6'>
            <ul className='w-full flex justify-center flex-col'>
                <li><Link href='/dashboard'
                          className={clsx(
                              'flex h-[12px] grow items-center justify-center gap-2 p-3 ',
                              {
                                  'text-blue-600': pathname === '/dashboard',
                              },
                          )}>dashboard page</Link></li>
                <li><Link className={clsx(
                    'flex h-[12px] grow items-center justify-center gap-2 p-3 ',
                    {
                        'text-blue-600': pathname === '/dashboard/customers',
                    },
                )} href='/dashboard/customers'>customers page</Link></li>
                <li><Link className={clsx(
                    'flex h-[12px] grow items-center justify-center gap-2 p-3 ',
                    {
                        'text-blue-600': pathname === '/dashboard/invoices',
                    },
                )} href='/dashboard/invoices'>invoices page</Link></li>
            </ul>
        </div>
    );
};

export default Sidenav;