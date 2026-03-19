import { File, ChevronRight, Type, Square, Circle, Image, AlignLeft, X } from 'lucide-react';

export function DocumentCanvasShell() {
  return (
    <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6" style={{ height: '500px' }}>
      <div className="border-2 border-dashed border-blue-300 rounded bg-white h-full flex flex-col">
        {/* Top File Tabs Bar */}
        <div className="h-10 bg-gray-100 border-b-2 border-dashed border-blue-300 px-3 flex items-center gap-2">
          <div className="text-xs font-['Geist_Mono'] text-gray-600 mr-3">Tabs</div>
          <div className="h-7 w-32 bg-white border border-gray-300 rounded"></div>
          <div className="h-7 w-28 bg-gray-200 border border-gray-300 rounded"></div>
          <div className="h-7 w-24 bg-gray-200 border border-gray-300 rounded"></div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Minimal Sidebar */}
          <div className="w-[180px] border-r-2 border-dashed border-blue-300 bg-gray-50 p-4 relative">
            <div className="text-xs font-['Geist_Mono'] text-gray-600 mb-4">Navigation</div>
            
            <div className="space-y-2">
              <div className="h-7 bg-blue-100 border border-blue-300 rounded"></div>
              <div className="h-7 bg-white border border-gray-300 rounded"></div>
              <div className="h-7 bg-white border border-gray-300 rounded"></div>
              <div className="ml-4 space-y-1 mt-1">
                <div className="h-6 bg-white border border-gray-300 rounded"></div>
                <div className="h-6 bg-white border border-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Main Canvas Workspace */}
          <div className="flex-1 bg-gray-100 relative">
            <div className="absolute top-2 left-2 text-xs font-['Geist_Mono'] text-gray-600 z-10">Workspace</div>
            
            {/* Floating Toolbar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-10 w-56 bg-white border-2 border-gray-300 rounded-lg shadow-md z-10"></div>
            
            {/* Canvas */}
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg shadow-lg" style={{ width: '600px', height: '340px' }}>
                <div className="p-6 space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-16 bg-blue-50 border border-blue-200 rounded"></div>
                    <div className="h-16 bg-blue-50 border border-blue-200 rounded"></div>
                    <div className="h-16 bg-blue-50 border border-blue-200 rounded"></div>
                  </div>
                  <div className="h-24 bg-gray-100 rounded mt-3"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Properties Panel */}
          <div className="w-[240px] border-l-2 border-dashed border-blue-300 bg-gray-50 p-4 relative">
            <div className="text-xs font-['Geist_Mono'] text-gray-600 mb-4">Properties</div>
            
            <div className="space-y-3">
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-16 bg-white border border-gray-300 rounded"></div>
              <div className="h-20 bg-white border border-gray-300 rounded"></div>
              <div className="h-10 bg-white border border-gray-300 rounded"></div>
              <div className="h-14 bg-white border border-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}