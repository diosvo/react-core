'use client';

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get('query') as string;
    onSearch(query);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="query" placeholder="Search..." />
      <button type="submit">Go</button>
    </form>
  );
}

export default function HandlingEvents() {
  return <SearchBar onSearch={console.log} />;
}
