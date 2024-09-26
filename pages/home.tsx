import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState('month');

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Pricing Plans</h1>
        <p className="text-xl text-center mt-2">Choose the plan that best fits your needs</p>
      </header>

      <div className="mx-auto max-w-7xl relative px-8 flex flex-col items-center justify-between">
        <div className="flex justify-center mb-8">
          <div className="inline-flex h-14 items-center gap-2 justify-center rounded-sm bg-background px-[6px] py-[6px] text-muted-foreground border-border border">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-xs h-11 px-5 py-[10px] text-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                billingPeriod === 'month' ? 'bg-[#182222] text-foreground shadow-sm' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-xs h-11 px-5 py-[10px] text-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                billingPeriod === 'year' ? 'bg-[#182222] text-foreground shadow-sm' : ''
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="isolate mx-auto grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="rounded-lg bg-secondary/70 backdrop-blur-[6px] overflow-hidden">
            <div className="flex gap-5 flex-col rounded-lg rounded-b-none pricing-card-border">
              <div className="flex justify-between items-center px-8 pt-8">
                <div className="flex items-center gap-[10px]">
                  <Image src="/assets/icons/price-tiers/free-icon.svg" alt="Starter" width={40} height={40} />
                  <p className="text-[20px] leading-[30px] font-semibold text-foreground">Starter</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col px-8">
                <div className="text-[80px] leading-[96px] tracking-[-1.6px] font-medium text-foreground">$0</div>
                <div className="font-medium text-[12px] text-muted-foreground">per user/month</div>
              </div>
              <div className="px-8">
                <div className="h-[1px] w-full bg-border"></div>
              </div>
              <div className="px-8 text-[16px] leading-[24px] text-foreground">
                Ideal for individuals who want to get started with simple design tasks.
              </div>
            </div>
            <div className="px-8 mt-8">
              <Link href="/checkout/pri_01hsxyh9txq4rzbrhbyngkhy46" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus:ring-ring focus:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative bg-primary text-primary-foreground secondary-button-animation disabled:bg-muted h-11 px-5 py-[10px] w-full">
                Get started
              </Link>
            </div>
            <ul className="p-8 flex flex-col gap-4">
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-6 w-6 text-muted-foreground">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="text-base text-foreground">1 workspace</span>
              </li>
              {/* Add more list items for features */}
            </ul>
          </div>

          {/* Pro Plan */}
          {/* ... (similar structure as Starter Plan, with different content) ... */}

          {/* Advanced Plan */}
          {/* ... (similar structure as Starter Plan, with different content) ... */}
        </div>
      </div>

      {/* ... (footer and other sections) ... */}
    </div>
  );
}
