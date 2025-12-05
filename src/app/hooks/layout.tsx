export default function HookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
}
