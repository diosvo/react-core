import UiLayout from '@/components/ui-layout';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FlightBookerPage from './FlightBooker';

const FormItems = [
  {
    title: 'Flight Booker',
    description: 'Book a one-way or round-trip flight.',
    component: FlightBookerPage,
  },
];

export default function FormsPage() {
  return (
    <UiLayout title="Forms">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {FormItems.map(
          ({ title, description, component: Component }, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Component />
              </CardContent>
            </Card>
          )
        )}
      </div>
    </UiLayout>
  );
}
