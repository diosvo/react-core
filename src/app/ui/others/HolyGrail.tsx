export default function HolyGrail() {
  return (
    <>
      <header className="bg-amber-300 text-center p-2">Header</header>
      <div className="flex grow">
        <nav className="shrink-0 bg-blue-400 text-center p-2">Navigation</nav>
        <main className="grow bg-gray-300 text-center p-2">Main</main>
        <aside className="shrink-0 bg-green-400 text-center p-2">Sidebar</aside>
      </div>
      <footer className="bg-purple-300 text-center p-2">Footer</footer>
    </>
  );
}
