import { Search, LayoutDashboard, Network, Users, Settings, HelpCircle } from 'lucide-react';

export function GlobalHeaderShell() {
  return (
    <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6" style={{ height: '500px' }}>
      <div className="border-2 border-dashed border-blue-300 rounded bg-white flex flex-col" style={{ height: 'calc(100% - 32px)' }}>
        {/* Top Global Header */}
        <div className="h-14 border-b-2 border-dashed border-blue-300 bg-white px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="text-xs font-['Geist_Mono'] text-gray-600">Header</div>
          </div>
          <div className="flex gap-3 items-center">
            {/* Global action icons */}
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            {/* User Profile */}
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Nav - Collapsed navigation */}
          <div className="w-[56px] border-r-2 border-dashed border-blue-300 bg-white py-4 relative flex flex-col items-center">
            {/* Nav items - icons only */}
            <nav className="space-y-3 flex-1">
              <button className="w-9 h-9 flex items-center justify-center rounded bg-gray-100 transition-colors">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </button>
            </nav>

            {/* Bottom section */}
            
          </div>

          {/* Left Pane */}
          <div className="w-[200px] border-r-2 border-dashed border-blue-300 bg-white p-4 relative flex flex-col">
            <div className="flex-1"></div>
            
            {/* Bottom label */}
            <div className="text-xs text-gray-500 font-['Geist_Mono'] text-center">Page-level Nav e.g. File Browser</div>
          </div>

          {/* Workspace - Main content area */}
          <div className="flex-1 bg-white p-6 relative flex flex-col">
            <div className="flex-1"></div>
            
            {/* Bottom label */}
            <div className="text-center text-xs text-gray-500 font-['Geist_Mono']">Map canvas / Content page / Dashboard</div>
          </div>

          {/* Right Pane - Detail/context panel */}
          <div className="w-[200px] border-l-2 border-dashed border-blue-300 bg-white p-4 relative flex flex-col">
            <div className="space-y-3 mt-8">
              {/* Title */}
              <div className="h-3 rounded w-1/2 bg-[#b6bbc1]"></div>
              {/* Content lines */}
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
            </div>

            <div className="text-xs text-gray-500 font-['Geist_Mono'] text-center mt-auto">
              AI Chat / Details Pane
            </div>
          </div>
        </div>
      </div>

      {/* Labels for components - positioned outside/below the skeleton */}
      <div className="flex items-start gap-2 mt-3">
        <div className="w-[56px] flex justify-center">
          <div className="text-xs font-['Geist_Mono'] text-gray-600">Nav</div>
        </div>
        <div className="w-[200px] flex justify-center">
          <div className="text-xs font-['Geist_Mono'] text-gray-600">Left Pane</div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-xs font-['Geist_Mono'] text-gray-600">Workspace</div>
        </div>
        <div className="w-[200px] flex justify-center">
          <div className="text-xs font-['Geist_Mono'] text-gray-600">Right Pane</div>
        </div>
      </div>
    </div>
  );
}