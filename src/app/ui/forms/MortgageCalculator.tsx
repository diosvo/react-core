'use client';

import { FormEvent } from 'react';

import { DollarSign } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const commonProps = {
  type: 'number',
  required: true,
  className: 'w-full',
  min: 0,
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function MortgageCalculator() {
  function formatCurrency(value: number) {
    return currencyFormatter.format(value);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const loanAmount = Number(formData.get('loan-amount'));
    const loanTerm = Number(formData.get('loan-term'));
    const interestRate = Number(formData.get('interest-rate'));

    const monthlyInterestRate = interestRate / 100 / 12;
    const loanTermInMonths = loanTerm * 12;

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));
    const totalPayment = monthlyPayment * loanTermInMonths;
    const totalInterest = totalPayment - loanAmount;

    toast(() => <>Here is the information</>, {
      description: () => (
        <ul>
          <li>· Monthly Payment Amount: {formatCurrency(monthlyPayment)}</li>
          <li>· Total Payment Amount: {formatCurrency(totalPayment)}</li>
          <li>· Total Interest Paid: {formatCurrency(totalInterest)}</li>
        </ul>
      ),
      closeButton: true,
      duration: 10000,
    });
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      {[
        {
          id: 'loan-amount',
          label: 'Loan Amount',
          defaultValue: 100000,
        },
        {
          id: 'loan-term',
          label: 'Loan Term (years)',
          defaultValue: 30,
        },
        {
          id: 'interest-rate',
          label: 'Interest Rate (%)',
          defaultValue: 3,
        },
      ].map(({ id, label, defaultValue }) => (
        <div className="grid gap-2" key={id}>
          <Label htmlFor={id}>{label}</Label>
          <Input
            {...commonProps}
            id={id}
            name={id}
            aria-label={label}
            defaultValue={defaultValue}
          />
        </div>
      ))}
      <Button type="submit" className="w-full">
        <DollarSign /> Calculate
      </Button>
    </form>
  );
}
