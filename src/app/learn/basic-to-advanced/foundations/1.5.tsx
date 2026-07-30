import type { User } from '@/lib/models';

type UserPanelProps = {
  isLoading: boolean;
  error: boolean;
  users: Array<User>;
};

function UserPanel({ isLoading, error, users }: UserPanelProps) {
  if (isLoading) return 'Loading...';
  if (error) return error;
  if (users.length === 0) return 'No users found';

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function ConditionalRendering() {
  return <UserPanel isLoading error={false} users={[]} />;
}
