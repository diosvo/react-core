import { PropsWithChildren } from 'react';

import UiLayout from '@/components/ui-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import ContactForm from './ContactForm';
import FlightBookerPage from './FlightBooker';

const FormItems: Array<
  PropsWithChildren<{ title: string; description: string }>
> = [
  {
    title: 'Contact Form',
    description: 'A simple form.',
    children: <ContactForm />,
  },
  {
    title: 'Flight Booker',
    description: 'Book a one-way or round-trip flight.',
    children: <FlightBookerPage />,
  },
];
export default function FormsPage() {
  return (
    <UiLayout
      title="Forms"
      description={
        <ul>
          <li>· Click on the label will focus on the corresponding input.</li>
        </ul>
      }
      implementation={
        <ul>
          <li>· htmlFor (label) + id (input)</li>
        </ul>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {FormItems.map(({ title, description, children }, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        ))}
      </div>
    </UiLayout>
  );
}
