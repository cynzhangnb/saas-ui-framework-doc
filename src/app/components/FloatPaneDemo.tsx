import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type NavType = 'dashboard' | 'map' | 'network' | 'inventory' | 'reports' | 'ai' | 'assessment';

interface ListItem {
  id: string;
  label: string;
  width: string;
  isSubItem?: boolean;
}

export function FloatPaneDemo() {
  const [activeNav, setActiveNav] = useState<NavType | null>(null);
  const [floatPaneOpen, setFloatPaneOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('item-1');
  const [workspaceTitle, setWorkspaceTitle] = useState('Dashboard');
  const [workspaceSub, setWorkspaceSub] = useState('Click "Map" or "Reports" in the nav to open the flyout pane');
  const [paneTitle, setPaneTitle] = useState('Map browser');

  const navItems = [
    { id: 'dashboard', hasFlyout: false, tooltip: 'Dashboard' },
    { id: 'map', hasFlyout: true, tooltip: 'Map' },
    { id: 'network', hasFlyout: false, tooltip: 'Network' },
    { id: 'inventory', hasFlyout: false, tooltip: 'Inventory' },
    { id: 'reports', hasFlyout: false, tooltip: 'Reports' },
    { id: 'ai', hasFlyout: false, tooltip: 'AI Assist' },
    { id: 'assessment', hasFlyout: false, tooltip: 'Assessment' },
  ] as const;

  const listItems: ListItem[] = [
    { id: 'item-1', label: 'HQ Topology', width: 'w-20' },
    { id: 'item-2', label: 'Branch East', width: 'w-[68px]' },
    { id: 'item-3', label: 'WAN Overview', width: 'w-[75px]' },
    { id: 'item-4', label: 'DC Core', width: 'w-[55px]' },
    { id: 'item-5', label: 'DC Core · East', width: 'w-[62px]', isSubItem: true },
    { id: 'item-6', label: 'DC Core · West', width: 'w-[58px]', isSubItem: true },
    { id: 'item-7', label: 'Branch West', width: 'w-16' },
    { id: 'item-8', label: 'Branch West · A', width: 'w-[70px]', isSubItem: true },
    { id: 'item-9', label: 'MPLS Network', width: 'w-[72px]' },
    { id: 'item-10', label: 'Team Shared', width: 'w-[60px]' },
    { id: 'item-11', label: 'Shared WAN', width: 'w-[50px]' },
  ];

  const handleNavClick = (navId: NavType, hasFlyout: boolean) => {
    // Only handle click for the second item (map)
    if (navId !== 'map') return;
    
    // Toggle the pane if it's already open
    if (floatPaneOpen && activeNav === navId) {
      setFloatPaneOpen(false);
      setActiveNav(null);
      return;
    }
    
    setActiveNav(navId);
    
    if (hasFlyout) {
      const title = navId === 'map' ? 'Map browser' : 'Report browser';
      setPaneTitle(title);
      setFloatPaneOpen(true);
      setWorkspaceTitle(navId === 'map' ? 'Select a map' : 'Select a report');
      setWorkspaceSub('← Choose from the panel on the left');
    }
  };

  const handleItemClick = (item: ListItem) => {
    setActiveItem(item.id);
    // Removed auto-close behavior - pane stays open for demo purposes
  };

  return (
    <div className="w-full max-w-[520px]">
      <div className="flex h-[460px] border border-gray-300 rounded-lg overflow-hidden bg-white relative">
        {/* Nav Pane */}
        <div className="w-[52px] min-w-[52px] border-r border-gray-200 bg-gray-50 flex flex-col items-center py-3 gap-1 z-30">
          {navItems.map((nav, idx) => (
            <div key={nav.id}>
              {(idx === 3 || idx === 5) && (
                <div className="w-7 h-px bg-gray-200 my-1" />
              )}
              <div
                onClick={() => handleNavClick(nav.id as NavType, nav.hasFlyout)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  nav.id === 'map' ? 'cursor-pointer' : 'cursor-default'
                } transition-colors group relative ${
                  activeNav === nav.id ? 'bg-blue-100' : nav.id === 'map' ? 'hover:bg-white' : ''
                }`}
              >
                <div
                  className={`w-[15px] h-[15px] rounded ${
                    nav.id === 'map'
                      ? activeNav === nav.id
                        ? 'bg-blue-600'
                        : 'bg-blue-400'
                      : 'bg-gray-300'
                  }`}
                />
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                  {nav.tooltip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flyout Pane */}
        <AnimatePresence>
          {floatPaneOpen && (
            <motion.div
              initial={{ x: -180, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -180, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-0 bottom-0 left-[52px] w-[180px] bg-gray-50 border-r border-gray-300 flex flex-col z-20 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-3.5 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="h-2.5 rounded w-20 bg-gray-600 opacity-30" />
                <button
                  onClick={() => setFloatPaneOpen(false)}
                  className="w-[18px] h-[18px] rounded flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-colors text-xs"
                >
                  ✕
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto py-2">
                {/* Parent item 1 - collapsed */}
                <div
                  onClick={() => handleItemClick(listItems[0])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M2 1 L6 4 L2 7" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-20 bg-gray-600 opacity-30" />
                </div>

                {/* Parent item 2 - expanded with children */}
                <div
                  onClick={() => handleItemClick(listItems[3])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M1 2 L4 6 L7 2" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-[55px] bg-gray-600 opacity-30" />
                </div>
                
                {/* Child item 1 */}
                <div
                  onClick={() => handleItemClick(listItems[4])}
                  className="flex items-center gap-2 px-3 py-1.5 pl-7 cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-400 opacity-40" />
                  <div className="h-1 rounded w-20 bg-gray-600 opacity-25" />
                </div>

                {/* Child item 2 */}
                <div
                  onClick={() => handleItemClick(listItems[5])}
                  className="flex items-center gap-2 px-3 py-1.5 pl-7 cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-400 opacity-40" />
                  <div className="h-1 rounded w-20 bg-gray-600 opacity-25" />
                </div>

                {/* Child item 3 */}
                <div
                  onClick={() => handleItemClick(listItems[6])}
                  className="flex items-center gap-2 px-3 py-1.5 pl-7 cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-400 opacity-40" />
                  <div className="h-1 rounded w-16 bg-gray-600 opacity-25" />
                </div>

                {/* Parent item 3 - collapsed */}
                <div
                  onClick={() => handleItemClick(listItems[1])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M2 1 L6 4 L2 7" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-[68px] bg-gray-600 opacity-30" />
                </div>

                {/* Parent item 4 - collapsed */}
                <div
                  onClick={() => handleItemClick(listItems[2])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M2 1 L6 4 L2 7" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-[75px] bg-gray-600 opacity-30" />
                </div>

                {/* Parent item 5 - collapsed */}
                <div
                  onClick={() => handleItemClick(listItems[8])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M2 1 L6 4 L2 7" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-[72px] bg-gray-600 opacity-30" />
                </div>

                {/* Parent item 6 - collapsed */}
                <div
                  onClick={() => handleItemClick(listItems[9])}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-50">
                    <path d="M2 1 L6 4 L2 7" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-[5px] rounded w-[60px] bg-gray-600 opacity-30" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Workspace */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center p-6 gap-2">
          <div className="h-4 bg-gray-200 rounded w-32 mb-1" />
          <div className="h-2 bg-gray-200 rounded w-40" />
          <div className="mt-6 w-full max-w-[360px] flex flex-col gap-2.5">
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-4/5" />
            <div className="h-2 bg-gray-200 rounded w-[90%]\" />
            <div className="h-2 bg-gray-200 rounded w-3/5" />
          </div>
        </div>
      </div>

      {/* Legend */}
      
    </div>
  );
}