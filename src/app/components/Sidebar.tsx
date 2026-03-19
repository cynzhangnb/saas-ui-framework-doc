export function Sidebar() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'application-shell', label: 'Application Shell' },
    { id: 'product-ia', label: 'Product IA' },
    { id: 'navigation-system', label: 'Navigation' },
    { id: 'pane-behavior', label: 'Pane' },
    { id: 'ai', label: 'AI Interaction Model' },
    { id: 'header-behavior', label: 'Header' },
    { id: 'page-patterns', label: 'Page Patterns' },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed top-0 left-0 w-[240px] h-screen bg-white border-r border-gray-200 px-6 py-12">
      <div className="text-xs font-['Geist_Mono'] text-gray-500 mb-6 tracking-wider">
        UI Framework
      </div>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <div key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className="w-full text-left px-3 py-2 rounded text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <span className="text-blue-600 font-['Geist_Mono'] mr-2">
                {String(index).padStart(2, '0')}
              </span>
              {section.label}
            </button>
          </div>
        ))}
      </nav>
    </aside>
  );
}