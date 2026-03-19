export function PagePatterns() {
  return (
    <section id="page-patterns" className="mb-20 pt-20 border-t border-gray-200">
      <div className="flex items-baseline gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">07</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Page Patterns
          </h2>

          <div className="w-[70%]">
            <p className="text-sm text-gray-500 m-0">
              Content TBD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatternCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4">
      {children}
      <div className="mt-4">
        <div className="font-semibold text-gray-900 text-sm">{title}</div>
      </div>
    </div>
  );
}