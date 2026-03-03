export function SplitLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
      <div className="lg:w-[280px] lg:shrink-0">{left}</div>
      <div className="min-w-0 flex-1">{right}</div>
    </div>
  );
}
