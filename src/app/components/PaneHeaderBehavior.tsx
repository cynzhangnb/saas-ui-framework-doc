import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PaneHeaderBehavior() {
  const [floatingOpen, setFloatingOpen] = useState(false);
  const [pushedOpen, setPushedOpen] = useState(false);

  return (
    <section id="pane-header" className="mb-20 pt-20 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          <span className="text-blue-600 font-['Geist_Mono'] mr-4">03</span>
          Pane & Header Behavior
        </h2>
      </div>

      {/* Context Pane Behavior */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Right Pane Behavior</h3>
        <p className="text-[#364153] text-sm mb-6">
          Two interaction patterns for showing contextual details: floating overlay vs. pushed layout.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Floating Context Pane */}
          <div>
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Floating - Float over content</h4>
                  <p className="text-sm text-[#364153]">Overlays the workspace, preserving workspace dimensions</p>
                </div>
                <button
                  onClick={() => setFloatingOpen(!floatingOpen)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                >
                  {floatingOpen ? 'Close' : 'Open'}
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-4" style={{ height: '340px' }}>
              <div className="border-2 border-dashed border-blue-300 rounded bg-white h-full relative overflow-hidden">
                {/* Workspace (full width) with content silhouettes */}
                <div className="absolute inset-0 bg-white p-4">
                  <div className="text-[10px] font-['Geist_Mono'] text-gray-600 mb-3">Workspace</div>
                  {/* Content silhouettes */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-100 rounded"></div>
                      <div className="h-16 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Right Pane with prominent shadow */}
                <AnimatePresence>
                  {floatingOpen && (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      className="absolute right-0 top-0 bottom-0 w-[180px] bg-gray-50 border-l-2 border-dashed border-blue-300 p-3"
                      style={{ boxShadow: '-8px 0 24px rgba(0, 0, 0, 0.15)' }}
                    >
                      <div className="text-[10px] font-['Geist_Mono'] text-gray-600 mb-3">Right Pane</div>
                      <div className="space-y-2">
                        {/* Silhouette */}
                        <div className="space-y-1">
                          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Workspace maintains consistent layout</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Quick, temporary inspection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">May obscure important content</span>
              </div>
            </div>
          </div>

          {/* Pushed Context Pane */}
          <div>
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Docked - Pushes content</h4>
                  <p className="text-sm text-[#364153]">Pushes workspace aside, resizing both regions</p>
                </div>
                <button
                  onClick={() => setPushedOpen(!pushedOpen)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                >
                  {pushedOpen ? 'Close' : 'Open'}
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-4" style={{ height: '340px' }}>
              <div className="border-2 border-dashed border-blue-300 rounded bg-white h-full flex overflow-hidden">
                {/* Workspace (resizes when pane opens) with content silhouettes */}
                <div
                  className="bg-white p-4 relative overflow-hidden transition-all duration-300"
                  style={{ 
                    width: pushedOpen ? 'calc(100% - 180px)' : '100%',
                    borderRight: pushedOpen ? '2px dashed rgb(147, 197, 253)' : 'none'
                  }}
                >
                  <div className="text-[10px] font-['Geist_Mono'] text-gray-600 mb-3">Workspace</div>
                  {/* Content silhouettes that visibly compress */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded" style={{ width: pushedOpen ? '100%' : '66%' }}></div>
                    <div className="h-3 bg-gray-100 rounded w-full transition-all duration-300"></div>
                    <div className="h-3 bg-gray-100 rounded" style={{ width: pushedOpen ? '100%' : '85%' }}></div>
                    <div className="h-3 bg-gray-100 rounded" style={{ width: pushedOpen ? '95%' : '80%' }}></div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-100 rounded transition-all duration-300"></div>
                      <div className="h-16 bg-gray-100 rounded transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Pushed Right Pane - completely invisible when closed */}
                {pushedOpen && (
                  <div
                    className="bg-gray-50 p-3 transition-all duration-300"
                    style={{ 
                      width: '180px'
                    }}
                  >
                    <div className="text-[10px] font-['Geist_Mono'] text-gray-600 mb-3 whitespace-nowrap">Right Pane</div>
                    <div className="space-y-2">
                      {/* Silhouette */}
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">All content remains visible</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Better for persistent context</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">Workspace layout may reflow/adapt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}