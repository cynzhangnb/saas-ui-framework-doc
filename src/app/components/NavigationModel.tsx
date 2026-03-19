import { ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { DrilldownNavDemo } from './DrilldownNavDemo';
import { FloatPaneDemo } from './FloatPaneDemo';
import { ExpandableNavDemo } from './ExpandableNavDemo';

export function NavigationModel() {
  // State for tree expand/collapse
  const [expandedSections, setExpandedSections] = useState<number[]>([0, 1]);
  const [expandedHybridSections, setExpandedHybridSections] = useState<number[]>([0, 1]);
  
  // State for navigation states demo
  const [leftNavExpanded, setLeftNavExpanded] = useState(true);
  const [rightNavExpanded, setRightNavExpanded] = useState(false);

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
    <section id="navigation-model" className="mb-20 pt-14 border-t border-gray-200">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-900 m-[0px]">
          <span className="text-blue-600 font-['Geist_Mono'] mr-4">03</span>
          Navigation
        </h2>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-sm text-[#364153] mb-4">
          The navigation system supports a collapsible sidebar architecture designed for workspace-centric applications.
        </p>
        <p className="text-sm text-[#364153] mb-3">
          This model balances two competing needs:
        </p>
        <ul className="list-none space-y-2 mb-4 ml-0">
          <li className="text-sm text-[#364153] flex items-start">
            <span className="mr-2">•</span>
            <span>Information architecture clarity as the product grows</span>
          </li>
          <li className="text-sm text-[#364153] flex items-start">
            <span className="mr-2">•</span>
            <span>Maximum workspace area for map-driven workflows</span>
          </li>
        </ul>
        
      </div>

      {/* Expandable Navigation Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Expandable Navigation System</h3>
        <p className="text-sm text-[#364153] mb-6">The sidebar supports both expanded and collapsed states. Default state can be collapsed to preserve workspace area.</p>

        <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6 mb-3">
          <div className="mb-6">
            <ExpandableNavDemo />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Expand / Collapse Behavior</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>The sidebar expands or collapses via an explicit control.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>Hover-based expansion is intentionally avoided. Hover expansion conflicts with flyout navigation interactions, which also rely on hover behavior.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>The expanded sidebar supports manual resizing within a defined width range.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>When the sidebar is dragged below a collapse threshold, it automatically transitions to collapsed state.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>When expanded again, the sidebar restores the previous expanded width.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nav Pane States: Expanded vs Collapsed */}
      <div id="nav-states" className="m-[0px]">
        <h4 className="text-base font-semibold text-gray-900 mb-4">States</h4>
        
        {/* Main Description */}
        <p className="text-sm text-gray-700 mb-6">
          The sidebar supports <strong>two persistent states</strong>. State is <strong>user controlled</strong> and persisted across sessions.
        </p>

        {/* States Table */}
        <div className="mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 pr-8 text-sm font-semibold text-gray-900">State</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-900">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-8 text-sm text-gray-700">Expanded</td>
                <td className="py-4 text-sm text-gray-700">Reveals navigation hierarchy and improves discoverability</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 pr-8 text-sm text-gray-700">Collapsed</td>
                <td className="py-4 text-sm text-gray-700">Maximizes workspace area for map-centric workflows</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>

      {/* Nav Structure: Flat vs Hierarchical - Full App Shells */}
      <div id="nav-structure" className="mx-[0px] mt-[60px] mb-[48px]">
        <h3 className="text-xl font-semibold text-gray-900 mx-[0px] my-[24px]">Structure</h3>
        
        {/* Two Navigation Modes - Descriptive Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Navigation List */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Navigation List</h4>
            <p className="text-sm text-[#364153] mb-4">
              Single-level menu for simple workflows. Each item is a top-level destination.
            </p>
          </div>

          {/* Navigation Tree */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Navigation Tree</h4>
            <p className="text-sm text-[#364153] m-[0px]">
              Hierarchical menu for complex workflows. Items can be grouped into sections with expandable sub-items.
            </p>
          </div>

          {/* Hybrid Navigation */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Hybrid Navigation</h4>
            <p className="text-sm text-[#364153] m-[0px]">
              Combines both flat list and tree. Common items at top, grouped sections below with a divider.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-md border border-gray-200 overflow-hidden p-6 mx-[0px] mt-[-24px] mb-[12px]">
          <div className="grid grid-cols-3 gap-6" style={{ height: '500px' }}>
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
              <div className="w-[180px] border-r-2 border-dashed border-gray-300 bg-white pl-2 pr-4 py-4 relative">
                <div className="text-xs font-['Geist_Mono'] text-gray-500 ml-[10px] mr-[0px] mt-[0px] mb-[16px]">NAVIGATION TREE</div>

                <nav className="space-y-1">
                  {/* Section 1 */}
                  <div>
                    <div className="flex items-center gap-2 pl-0 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(0)}>
                      {expandedSections.includes(0) ? (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      )}
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 w-16 bg-gray-300 rounded"></div>
                    </div>
                    <div 
                      className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
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
                    <div className="flex items-center gap-2 pl-0 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(1)}>
                      {expandedSections.includes(1) ? (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      )}
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 w-14 bg-gray-300 rounded"></div>
                    </div>
                    <div 
                      className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
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
                    <div className="flex items-center gap-2 pl-0 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(2)}>
                      {expandedSections.includes(2) ? (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      )}
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 w-14 bg-gray-300 rounded"></div>
                    </div>
                    <div 
                      className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
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
                    <div className="flex items-center gap-2 pl-0 pr-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleSection(3)}>
                      {expandedSections.includes(3) ? (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                      )}
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="h-3 w-14 bg-gray-300 rounded"></div>
                    </div>
                    <div 
                      className="ml-[38px] overflow-hidden transition-all duration-300 ease-in-out"
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
              <div className="w-[180px] border-r-2 border-dashed border-gray-300 bg-white p-4 relative">
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
                      <div className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(0)}>
                        {expandedHybridSections.includes(0) ? (
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        )}
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-16 bg-gray-300 rounded"></div>
                      </div>
                      <div 
                        className="ml-[46px] overflow-hidden transition-all duration-300 ease-in-out"
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
                      <div className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(1)}>
                        {expandedHybridSections.includes(1) ? (
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        )}
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-14 bg-gray-300 rounded"></div>
                      </div>
                      <div 
                        className="ml-[46px] overflow-hidden transition-all duration-300 ease-in-out"
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
                      <div className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer" onClick={() => toggleHybridSection(2)}>
                        {expandedHybridSections.includes(2) ? (
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200" />
                        )}
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-16 bg-gray-300 rounded"></div>
                      </div>
                      <div 
                        className="ml-[46px] overflow-hidden transition-all duration-300 ease-in-out"
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

        {/* Labels outside the gray background */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center text-sm text-gray-600">
            Simple, single-level list
          </div>
          <div className="text-sm text-gray-600 text-center">
            Grouped with expandable sections
          </div>
          <div className="text-sm text-gray-600 text-center">
            Mixed flat list + tree sections
          </div>
        </div>
      </div>

      {/* Nav Interaction */}
      <div id="nav-interaction" className="mx-[0px] mt-[60px] mb-[0px]">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Interaction</h3>
        <p className="text-[#364153] text-sm mb-8">
          Triggered by clicking a primary navigation item. Two patterns depending on what the nav item represents.
        </p>

        {/* Interactive Demos - Side by Side */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="mb-3">
              <h4 className="text-base font-semibold text-gray-900 mb-2">Drilldown Nav</h4>
              <p className="text-sm text-[#364153] mb-4">
                When you click a nav item that has sub-categories, the Primary Nav pane replaces itself with the second-level items. Click back to return to main nav.
              </p>
            </div>
            <DrilldownNavDemo />
            
          </div>
          <div>
            <div className="mb-3">
              <h4 className="text-base font-semibold text-gray-900 mb-2">Flyout Pane — Landing Selector</h4>
              <p className="text-sm text-[#364153] mb-4">
                When you click a nav item that requires instance selection, a flyout panel appears next to the nav. User selects an instance, then the page loads.
              </p>
            </div>
            <FloatPaneDemo />
            <div className="space-y-1.5 text-sm mt-4">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Supports rich content (thumbnails, metadata, multi-col)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Workspace context preserved behind backdrop</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Dismissed automatically after selection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Nav pane must be stable - hover expand conflicts with flyout</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-gray-700">Temporarily obscures workspace content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${
        active
          ? 'bg-gray-100'
          : 'hover:bg-gray-50'
      }`}
    >
      <div className="w-4 h-4 bg-gray-300 rounded"></div>
      <div className={`h-3 rounded ${active ? 'w-12 bg-gray-500' : 'w-10 bg-gray-300'}`}></div>
    </button>
  );
}

function NavItemCollapsed({ active = false, tooltip }: { active?: boolean; tooltip?: string }) {
  return (
    <div className="relative group">
      <button
        className={`w-full flex items-center py-2 rounded transition-colors ${
          active
            ? 'bg-gray-100'
            : 'hover:bg-gray-50'
        }`}
        style={{ paddingLeft: '6px' }}
      >
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
      </button>
      {tooltip && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 px-3 py-1.5 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          {tooltip}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
        </div>
      )}
    </div>
  );
}

function FlatNavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 py-2 rounded transition-colors ${
        active
          ? 'bg-gray-100'
          : 'hover:bg-gray-50'
      }`}
      style={{ paddingLeft: '6px', paddingRight: '8px' }}
    >
      <div className="w-4 h-4 bg-gray-300 rounded"></div>
      <div className={`h-3 rounded ${active ? 'w-12 bg-gray-500' : 'w-10 bg-gray-300'}`}></div>
    </button>
  );
}

function AnimatedFlatNavItem({ label, expanded, tooltip }: { label: string; expanded: boolean; tooltip?: string }) {
  return (
    <div className="relative group">
      <button
        className="w-full flex items-center gap-3 py-2 rounded transition-colors hover:bg-gray-50 overflow-hidden"
        style={{ paddingLeft: '6px', paddingRight: '8px' }}
      >
        <div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0"></div>
        <div 
          className="h-3 bg-gray-300 rounded transition-all duration-300 ease-in-out flex-shrink-0"
          style={{ 
            width: expanded ? '40px' : '0px',
            opacity: expanded ? 1 : 0,
            transform: expanded ? 'translateX(0)' : 'translateX(-8px)'
          }}
        ></div>
      </button>
      {!expanded && tooltip && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 px-3 py-1.5 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          {tooltip}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
        </div>
      )}
    </div>
  );
}