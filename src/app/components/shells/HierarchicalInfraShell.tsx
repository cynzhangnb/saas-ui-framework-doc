import { ChevronRight, ChevronDown, Server, Database, Activity, FileText, Settings, Network } from 'lucide-react';

export function HierarchicalInfraShell() {
  return (
    <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6" style={{ height: '500px' }}>
      <div className="border-2 border-dashed border-blue-300 rounded bg-white h-full flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Left Structured Sidebar */}
          <div className="w-[220px] border-r-2 border-dashed border-blue-300 bg-gray-50 p-4 relative">
            <div className="text-xs font-['Geist_Mono'] text-gray-600 mb-4">Navigation</div>
            
            <div className="space-y-2">
              {/* Expanded section */}
              <div className="space-y-1">
                <div className="h-7 bg-gray-200 rounded"></div>
                <div className="ml-4 space-y-1">
                  <div className="h-6 bg-blue-100 border border-blue-300 rounded"></div>
                  <div className="h-6 bg-white border border-gray-300 rounded"></div>
                  <div className="h-6 bg-white border border-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Expanded section */}
              <div className="space-y-1">
                <div className="h-7 bg-gray-200 rounded"></div>
                <div className="ml-4 space-y-1">
                  <div className="h-6 bg-white border border-gray-300 rounded"></div>
                  <div className="h-6 bg-white border border-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Collapsed sections */}
              <div className="h-7 bg-gray-200 rounded"></div>
              <div className="h-7 bg-gray-200 rounded"></div>
              <div className="h-7 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="flex-1 bg-white p-6 relative flex flex-col">
            <div className="text-xs font-['Geist_Mono'] text-gray-600 mb-4">Workspace</div>
            
            {/* Table */}
            <div className="border-2 border-dashed border-gray-300 rounded flex-1">
              <div className="h-8 bg-gray-100 border-b-2 border-dashed border-gray-300"></div>
              <div className="p-3 space-y-1">
                <div className="h-10 bg-gray-50 border border-gray-200 rounded"></div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded"></div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded"></div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded"></div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Inspector Panel */}
          <div className="w-[260px] border-l-2 border-dashed border-blue-300 bg-gray-50 p-4 relative">
            <div className="text-xs font-['Geist_Mono'] text-gray-600 mb-4">Inspector</div>
            
            <div className="space-y-3">
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-10 bg-white border border-gray-300 rounded"></div>
              <div className="h-16 bg-white border border-gray-300 rounded"></div>
              <div className="h-20 bg-white border border-gray-300 rounded"></div>
              <div className="h-10 bg-blue-100 border border-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Bottom Expandable Panel */}
        <div className="h-24 border-t-2 border-dashed border-blue-300 bg-gray-900 p-4 relative">
          <div className="text-xs font-['Geist_Mono'] text-gray-400 mb-2">Logs</div>
          <div className="space-y-1">
            <div className="h-3 bg-gray-800 rounded w-full"></div>
            <div className="h-3 bg-gray-800 rounded w-5/6"></div>
            <div className="h-3 bg-gray-800 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}