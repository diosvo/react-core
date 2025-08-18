import UiLayout from '@/components/ui-layout';
import { USERS } from '@/lib/data';
import DataTable from '.';

export default function TablePage() {
  return (
    <UiLayout
      title="Data Table"
      description={
        <ul>
          <li>· Pagination</li>
          <li>· Sorting</li>
        </ul>
      }
    >
      <DataTable users={USERS} />
    </UiLayout>
  );
}
