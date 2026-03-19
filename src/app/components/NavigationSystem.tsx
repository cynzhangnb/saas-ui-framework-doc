import { useState } from 'react';
import { SidebarOnlyNavDemo } from './demos/SidebarOnlyNavDemo';
import { HeaderSidebarNavDemo } from './demos/HeaderSidebarNavDemo';
import { GlobalHeaderDemo } from './demos/GlobalHeaderDemo';

export function NavigationSystem() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0, 1]);
  const [expandedHybridSections, setExpandedHybridSections] = useState<number[]>([0, 1]);

  const toggleSection = (sectionIndex: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionIndex) 
        ? prev.filter(i => i !== sectionIndex)
        : [...prev, sectionIndex]
    );
  };

  const toggleHybridSection = (sectionIndex: number) => {
    setExpandedHybridSections(prev => 
      prev.includes(sectionIndex) 
        ? prev.filter(i => i !== sectionIndex)
        : [...prev, sectionIndex]
    );
  };

  return (
    <section id="navigation-system" className="mb-20 pt-16 border-t border-gray-200">
      <div className="flex items-start gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">03</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Navigation
          </h2>

          <div className="w-[80%] space-y-6">
            <p className="text-sm text-gray-700 m-0">
              Navigation optimizes how users access product capabilities, and how features are grouped and discovered.
            </p>
          </div>

          {/* Navigation Structure - Full Width */}
          <div className="pt-8 w-full">
            <h3 className="font-semibold text-gray-900 mb-6 text-[20px] m-0 p-0">
              Navigation Structure
            </h3>

            {/* Three Navigation Modes - Descriptive Section */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {/* Navigation List */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 m-0 p-0 text-[15px]">Navigation List</h4>
                <p className="text-sm text-[#364153] mb-4">
                  Single-level menu for simple workflows. Each item is a top-level destination.
                </p>
              </div>

              {/* Navigation Tree */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 m-0 p-0 text-[15px]">Navigation Tree</h4>
                <p className="text-sm text-[#364153] m-[0px]">
                  Hierarchical menu for complex workflows. Items can be grouped into sections with expandable sub-items.
                </p>
              </div>

              {/* Hybrid Navigation */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 m-0 p-0 text-[14px]">Hybrid Navigation</h4>
                <p className="text-sm text-[#364153] m-[0px]">
                  Combines both flat list and tree. Common items at top, grouped sections below with a divider.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6 mx-[0px] mt-[-24px] mb-[12px]">
              <div className="grid grid-cols-3 gap-8" style={{ height: '500px' }}>
                {/* Navigation List */}
                <div className="border-2 border-dashed border-gray-300 rounded bg-white h-full flex">
                  {/* Left Sidebar Navigation - List */}
                  <div className="w-[180px] border-r-2 border-dashed border-gray-300 bg-white p-4 relative">
                    <div className="text-xs font-['Geist_Mono'] text-gray-500 mb-4">NAVIGATION LIST</div>

                    <nav className="space-y-1">
                      <FlatNavItem label="Page A" />
                      <FlatNavItem label="Page B" />
                      <FlatNavItem label="Page C" />
                      <FlatNavItem label="Page D" />
                    </nav>
                  </div>

                  {/* Workspace */}
                  <div className="flex-1 bg-gray-50 p-4">
                    <div className="text-xs font-['Geist_Mono'] text-gray-600">Workspace</div>
                  </div>
                </div>

                {/* Navigation Tree */}
                <div className="border-2 border-dashed border-gray-300 rounded bg-white h-full flex">
                  {/* Left Sidebar Navigation - Tree */}
                  <div className="w-[180px] border-r-2 border-dashed border-gray-300 bg-white pl-2 pr-4 py-4 relative overflow-y-auto">
                    <div className="text-xs font-['Geist_Mono'] text-gray-500 ml-[10px] mr-[0px] mt-[0px] mb-[16px]">Three Navigation Concepts</div>

                    <nav className="space-y-1">
                      {/* Section 1 */}
                      <div>
                        <div className="flex items-center justify-between gap-2 pl-2 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(0)}>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="h-3 w-16 bg-gray-300 rounded"></div>
                          </div>
                          {expandedSections.includes(0) ? (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          )}
                        </div>
                        <div 
                          className="ml-[30px] overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: expandedSections.includes(0) ? '200px' : '0px',
                            opacity: expandedSections.includes(0) ? 1 : 0
                          }}
                        >
                          <div className="mt-1 space-y-1">
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 2 */}
                      <div>
                        <div className="flex items-center justify-between gap-2 pl-2 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(1)}>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="h-3 w-14 bg-gray-300 rounded"></div>
                          </div>
                          {expandedSections.includes(1) ? (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          )}
                        </div>
                        <div 
                          className="ml-[30px] overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: expandedSections.includes(1) ? '200px' : '0px',
                            opacity: expandedSections.includes(1) ? 1 : 0
                          }}
                        >
                          <div className="mt-1 space-y-1">
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 3 */}
                      <div>
                        <div className="flex items-center justify-between gap-2 pl-2 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(2)}>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="h-3 w-14 bg-gray-300 rounded"></div>
                          </div>
                          {expandedSections.includes(2) ? (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          )}
                        </div>
                        <div 
                          className="ml-[30px] overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: expandedSections.includes(2) ? '200px' : '0px',
                            opacity: expandedSections.includes(2) ? 1 : 0
                          }}
                        >
                          <div className="mt-1 space-y-1">
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 4 */}
                      <div>
                        <div className="flex items-center justify-between gap-2 pl-2 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(3)}>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="h-3 w-14 bg-gray-300 rounded"></div>
                          </div>
                          {expandedSections.includes(3) ? (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                          )}
                        </div>
                        <div 
                          className="ml-[30px] overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: expandedSections.includes(3) ? '200px' : '0px',
                            opacity: expandedSections.includes(3) ? 1 : 0
                          }}
                        >
                          <div className="mt-1 space-y-1">
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                            <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* Workspace */}
                  <div className="flex-1 bg-gray-50 p-4">
                    <div className="text-xs font-['Geist_Mono'] text-gray-600">Workspace</div>
                  </div>
                </div>

                {/* Hybrid Navigation */}
                <div className="border-2 border-dashed border-gray-300 rounded bg-white h-full flex">
                  {/* Left Sidebar Navigation - Hybrid */}
                  <div className="w-[180px] border-r-2 border-dashed border-gray-300 bg-white p-4 relative overflow-y-auto">
                    <div className="text-xs font-['Geist_Mono'] text-gray-500 mb-4">HYBRID NAVIGATION</div>

                    <nav>
                      {/* Flat List Section */}
                      <div className="space-y-1 mb-4">
                        <FlatNavItem label="Dashboard" />
                        <FlatNavItem label="Overview" />
                        <FlatNavItem label="Analytics" />
                      </div>

                      {/* Horizontal Divider */}
                      <div className="border-t border-gray-300 my-4"></div>

                      {/* Tree Section */}
                      <div className="space-y-1">
                        {/* Section 1 */}
                        <div>
                          <div className="flex items-center justify-between gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(0)}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-gray-300 rounded"></div>
                              <div className="h-3 w-16 bg-gray-300 rounded"></div>
                            </div>
                            {expandedHybridSections.includes(0) ? (
                              <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            )}
                          </div>
                          <div 
                            className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                              maxHeight: expandedHybridSections.includes(0) ? '200px' : '0px',
                              opacity: expandedHybridSections.includes(0) ? 1 : 0
                            }}
                          >
                            <div className="mt-1 space-y-1">
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                          <div className="flex items-center justify-between gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(1)}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-gray-300 rounded"></div>
                              <div className="h-3 w-14 bg-gray-300 rounded"></div>
                            </div>
                            {expandedHybridSections.includes(1) ? (
                              <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            )}
                          </div>
                          <div 
                            className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                              maxHeight: expandedHybridSections.includes(1) ? '200px' : '0px',
                              opacity: expandedHybridSections.includes(1) ? 1 : 0
                            }}
                          >
                            <div className="mt-1 space-y-1">
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                          <div className="flex items-center justify-between gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(2)}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-gray-300 rounded"></div>
                              <div className="h-3 w-16 bg-gray-300 rounded"></div>
                            </div>
                            {expandedHybridSections.includes(2) ? (
                              <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                            )}
                          </div>
                          <div 
                            className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                              maxHeight: expandedHybridSections.includes(2) ? '200px' : '0px',
                              opacity: expandedHybridSections.includes(2) ? 1 : 0
                            }}
                          >
                            <div className="mt-1 space-y-1">
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                              <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                                <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  {/* Workspace */}
                  <div className="flex-1 bg-gray-50 p-4">
                    <div className="text-xs font-['Geist_Mono'] text-gray-600">Workspace</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Concepts Section */}
            <div className="mt-12">
              <h3 className="font-semibold text-gray-900 mb-8 text-[20px]">
                Three Navigation Concepts
              </h3>

              {/* Concept A: Sidebar-first Navigation */}
              <div className="mb-12">
                <h4 className="text-base font-semibold text-gray-900 mb-3">
                  Concept A: Sidebar Navigation
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
                  <li>No global header</li>
                  <li>Sidebar remains visible and supports 3 states: Expanded and Collapsed and Hidden (optional).</li>
                  <li>App-level controls and global actions are integrated into the sidebar</li>
                </ul>
                
                {/* Interactive Demo 1 - Sidebar-first Navigation */}
                <SidebarOnlyNavDemo />
              </div>

              {/* Concept C: Global Header Navigation */}
              <div className="mb-12">
                <h4 className="text-base font-semibold text-gray-900 mb-3">
                  Concept B: Header + Sidebar navigation
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
                  <li>Global header is present</li>
                  <li>App-level controls are in the header, navigation is in the sidebar</li>
                  <li>Hamburger icon toggles between collapsed and expanded states</li>
                </ul>
                
                {/* Interactive Demo 3 - Global Header Navigation */}
                <GlobalHeaderDemo />
              </div>

              {/* Concept B: Header + Sidebar Navigation */}
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">
                  Concept C: Global Header + Hidden Sidebar
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
                  <li>Maximize workspace by allowing the sidebar to be fully hidden</li>
                  <li>Sidebar can be triggered as overlay for temporary access</li>
                  <li>Sidebar can be docked on the left for persistent navigation</li>
                </ul>
                
                {/* Interactive Demo 2 - Header + Sidebar Navigation */}
                <HeaderSidebarNavDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for flat navigation items
function FlatNavItem({ label }: { label: string }) {
  return (
    <div className="px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
      <div className="h-2.5 w-14 bg-gray-300 rounded"></div>
    </div>
  );
}

// Chevron icons
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}