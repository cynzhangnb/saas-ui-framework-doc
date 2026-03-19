import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

type ScreenType = 'main' | 'map' | 'inventory' | 'alerts';

interface NavItem {
  id: string;
  width: string;
  drilldown?: ScreenType;
}

interface NavSection {
  hasLabel?: boolean;
  items: NavItem[];
}

export function DrilldownNavDemo() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('main');
  const [activeItem, setActiveItem] = useState<string>('item1');

  const mainMenuSections: NavSection[] = [
    {
      items: [
        { id: 'item1', width: 'w-16' },
        { id: 'item2', width: 'w-12', drilldown: 'map' },
        { id: 'item3', width: 'w-20' },
      ],
    },
    {
      hasLabel: true,
      items: [
        { id: 'item4', width: 'w-20', drilldown: 'inventory' },
        { id: 'item5', width: 'w-16' },
        { id: 'item6', width: 'w-14', drilldown: 'alerts' },
      ],
    },
    {
      hasLabel: true,
      items: [
        { id: 'item7', width: 'w-20' },
        { id: 'item8', width: 'w-16' },
      ],
    },
  ];

  const mapMenuSections: NavSection[] = [
    {
      hasLabel: true,
      items: [
        { id: 'map1', width: 'w-24' },
        { id: 'map2', width: 'w-20' },
        { id: 'map3', width: 'w-20' },
        { id: 'map4', width: 'w-16' },
        { id: 'map5', width: 'w-24' },
      ],
    },
    {
      hasLabel: true,
      items: [
        { id: 'map6', width: 'w-20' },
      ],
    },
  ];

  const inventoryMenuSections: NavSection[] = [
    {
      hasLabel: true,
      items: [
        { id: 'inv1', width: 'w-20' },
        { id: 'inv2', width: 'w-16' },
        { id: 'inv3', width: 'w-16' },
        { id: 'inv4', width: 'w-20' },
      ],
    },
    {
      items: [
        { id: 'inv5', width: 'w-14' },
        { id: 'inv6', width: 'w-16' },
      ],
    },
  ];

  const alertsMenuSections: NavSection[] = [
    {
      hasLabel: true,
      items: [
        { id: 'alert1', width: 'w-14' },
        { id: 'alert2', width: 'w-16' },
        { id: 'alert3', width: 'w-12' },
      ],
    },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.drilldown) {
      setCurrentScreen(item.drilldown);
      setActiveItem(item.id);
    } else {
      setActiveItem(item.id);
    }
  };

  const handleBackClick = () => {
    setCurrentScreen('main');
  };

  const renderNavSections = (sections: NavSection[]) => (
    <div className="flex-1 overflow-y-auto">
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          {section.hasLabel && sectionIdx > 0 && (
            <div className="px-3.5 pt-3.5 pb-1.5">
              <div className="h-2 bg-gray-300 rounded w-16" />
            </div>
          )}
          {section.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="flex items-center justify-between px-3.5 py-2 cursor-pointer transition-colors hover:bg-white first:mt-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <div className="h-2.5 rounded w-24 bg-gray-300" />
              </div>
              {item.drilldown && (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              )}
            </div>
          ))}
          {sectionIdx < sections.length - 1 && sections[sectionIdx + 1].hasLabel && (
            <div className="h-px bg-gray-200 my-1.5" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-[520px]">
      <div className="flex h-[460px] border border-gray-300 rounded-lg overflow-hidden bg-white">
        {/* Nav Pane */}
        <div className="w-[180px] min-w-[180px] border-r border-gray-200 bg-gray-50 relative overflow-hidden">
          <AnimatePresence initial={false}>
            {/* Main Screen */}
            {currentScreen === 'main' && (
              <motion.div
                key="main"
                initial={{ x: '-30%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-30%', opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="px-3 py-3 border-b border-gray-200 flex-shrink-0">
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
                {renderNavSections(mainMenuSections)}
              </motion.div>
            )}

            {/* Map Screen */}
            {currentScreen === 'map' && (
              <motion.div
                key="map"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col"
              >
                <button
                  onClick={handleBackClick}
                  className="flex items-center gap-1.5 px-3 py-2.5 border-b border-gray-200 hover:bg-white transition-colors flex-shrink-0 w-full text-left"
                >
                  <span className="text-gray-400 text-sm">‹</span>
                  <span className="text-[13px] text-gray-700 font-medium">Back</span>
                </button>
                {renderNavSections(mapMenuSections)}
              </motion.div>
            )}

            {/* Inventory Screen */}
            {currentScreen === 'inventory' && (
              <motion.div
                key="inventory"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col"
              >
                <button
                  onClick={handleBackClick}
                  className="flex items-center gap-1.5 px-3 py-2.5 border-b border-gray-200 hover:bg-white transition-colors flex-shrink-0 w-full text-left"
                >
                  <span className="text-gray-400 text-sm">‹</span>
                  <span className="text-[13px] text-gray-700 font-medium">Back</span>
                </button>
                {renderNavSections(inventoryMenuSections)}
              </motion.div>
            )}

            {/* Alerts Screen */}
            {currentScreen === 'alerts' && (
              <motion.div
                key="alerts"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col"
              >
                <button
                  onClick={handleBackClick}
                  className="flex items-center gap-1.5 px-3 py-2.5 border-b border-gray-200 hover:bg-white transition-colors flex-shrink-0 w-full text-left"
                >
                  <span className="text-gray-400 text-sm">‹</span>
                  <span className="text-[13px] text-gray-700 font-medium">Back</span>
                </button>
                {renderNavSections(alertsMenuSections)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Workspace */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center p-6 gap-2">
          <div className="h-4 bg-gray-200 rounded w-32 mb-1" />
          <div className="h-2 bg-gray-200 rounded w-40" />
          <div className="mt-6 w-full max-w-[360px] flex flex-col gap-2.5">
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-4/5" />
            <div className="h-2 bg-gray-200 rounded w-[90%]" />
            <div className="h-2 bg-gray-200 rounded w-3/5" />
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="mt-4 space-y-1.5 text-[13px]">
        <div className="flex items-start gap-2">
          <span className="text-green-600 mt-0.5">✓</span>
          <span className="text-gray-700">No layout change — workspace stays the same width</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-600 mt-0.5">✓</span>
          <span className="text-gray-700">Back button makes hierarchy explicit</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-600 mt-0.5">✓</span>
          <span className="text-gray-700">Consistent with nav interaction model</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-600 mt-0.5">✓</span>
          <span className="text-gray-700">Best for flat lists — max one level of children</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-red-600 mt-0.5">✗</span>
          <span className="text-gray-700">Nav width limits content richness — text and icons only.</span>
        </div>
      </div>
    </div>
  );
}