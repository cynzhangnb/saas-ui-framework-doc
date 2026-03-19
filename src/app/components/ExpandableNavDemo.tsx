import { useState, useRef, useEffect } from 'react';

export function ExpandableNavDemo() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(180);
  const [snapped, setSnapped] = useState(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(180);

  const COLLAPSED_WIDTH = 44;
  const EXPANDED_WIDTH = 180;
  const SNAP_THRESHOLD = 120;

  const navItems = [
    { label: 'Page 1', maxWidth: '80px' },
    { label: 'Page 2', maxWidth: '64px' },
    { label: 'Page 3', maxWidth: '72px' },
  ];

  const navItemsBottom = [
    { label: 'Page 4', maxWidth: '56px' },
    { label: 'Page 5', maxWidth: '88px' },
    { label: 'Page 6', maxWidth: '68px' },
    { label: 'Assessment', maxWidth: '90px' },
  ];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setSidebarWidth(isExpanded ? COLLAPSED_WIDTH : EXPANDED_WIDTH);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    setSnapped(false);
    startXRef.current = e.clientX;
    startWidthRef.current = sidebarWidth;
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const dx = e.clientX - startXRef.current;
      const rawWidth = Math.max(COLLAPSED_WIDTH, Math.min(260, startWidthRef.current + dx));
      
      if (!snapped && rawWidth < SNAP_THRESHOLD && isExpanded) {
        setSnapped(true);
        setSidebarWidth(COLLAPSED_WIDTH);
        setIsExpanded(false);
        return;
      }
      
      if (!snapped && rawWidth >= SNAP_THRESHOLD && !isExpanded) {
        setSnapped(true);
        setSidebarWidth(EXPANDED_WIDTH);
        setIsExpanded(true);
        return;
      }
      
      if (!snapped) {
        setSidebarWidth(rawWidth);
      }
    };

    const handleMouseUp = () => {
      if (!isResizing) return;
      setIsResizing(false);
      setSnapped(false);
      setSidebarWidth(isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, isExpanded, snapped]);

  return (
    <div className="w-full max-w-[700px] mx-auto">
      <div 
        className="border border-gray-300 rounded-xl overflow-hidden flex flex-col bg-white select-none"
        style={{ 
          height: '400px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div 
            className="flex flex-col bg-[#F9FAFB] border-r border-gray-200 flex-shrink-0"
            style={{ 
              width: `${sidebarWidth}px`,
              transition: isResizing || snapped ? 'none' : 'width 0.22s cubic-bezier(0.4,0,0.2,1)',
              overflow: 'visible'
            }}
          >
            {/* Logo Area */}
            <div className="h-12 border-b border-gray-200 flex-shrink-0 flex items-center px-[13px] gap-2.5">
              <div 
                className="w-[18px] h-[18px] rounded bg-[#c8ccd2] flex-shrink-0"
                style={{ opacity: 0.8 }}
              ></div>
              <div 
                className="h-2.5 rounded bg-gray-200 w-[72px]"
                style={{ 
                  opacity: isExpanded ? 1 : 0,
                  transition: 'opacity 0.15s ease'
                }}
              ></div>
            </div>

            {/* Nav Items */}
            <div className="flex-1 py-2 flex flex-col">
              {navItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 h-9 cursor-pointer relative flex-shrink-0 px-[13px] hover:bg-black/[0.04] group"
                >
                  <div 
                    className="w-[18px] h-[18px] rounded bg-[#c8ccd2] flex-shrink-0"
                    style={{ opacity: 0.7 }}
                  ></div>
                  <div 
                    className="h-2.5 rounded bg-gray-200 flex-1"
                    style={{ 
                      maxWidth: item.maxWidth,
                      opacity: isExpanded ? 1 : 0,
                      transition: 'opacity 0.15s ease'
                    }}
                  ></div>
                  {!isExpanded && (
                    <div 
                      className="absolute left-[46px] bg-[#1a1a1a] text-white text-[11px] px-2 py-0.5 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 z-[100] top-1/2 -translate-y-1/2"
                      style={{ transition: 'opacity 0.15s' }}
                    >
                      {item.label}
                      <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a1a1a] border-l-0"></div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Divider */}
              <div className="h-[0.5px] bg-gray-200 mx-[13px] my-1.5"></div>
              
              {navItemsBottom.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 h-9 cursor-pointer relative flex-shrink-0 px-[13px] hover:bg-black/[0.04] group"
                >
                  <div 
                    className="w-[18px] h-[18px] rounded bg-[#c8ccd2] flex-shrink-0"
                    style={{ opacity: 0.7 }}
                  ></div>
                  <div 
                    className="h-2.5 rounded bg-gray-200 flex-1"
                    style={{ 
                      maxWidth: item.maxWidth,
                      opacity: isExpanded ? 1 : 0,
                      transition: 'opacity 0.15s ease'
                    }}
                  ></div>
                  {!isExpanded && (
                    <div 
                      className="absolute left-[46px] bg-[#1a1a1a] text-white text-[11px] px-2 py-0.5 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 z-[100] top-1/2 -translate-y-1/2"
                      style={{ transition: 'opacity 0.15s' }}
                    >
                      {item.label}
                      <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a1a1a] border-l-0"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Toggle */}
            <div className="border-t border-gray-200 py-1">
              <div 
                className="flex items-center justify-center w-11 h-9 cursor-pointer text-gray-400 hover:text-gray-500 hover:bg-black/[0.04]"
                onClick={handleToggle}
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none"
                  style={{ 
                    transition: 'transform 0.25s ease',
                    transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'
                  }}
                >
                  <path 
                    d="M9 2.5L4.5 7L9 11.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Resizer */}
          <div 
            className="w-[5px] cursor-col-resize bg-transparent flex-shrink-0 hover:bg-blue-500/30"
            style={{ 
              background: isResizing ? 'rgba(55,138,221,0.3)' : undefined,
              transition: 'background 0.15s'
            }}
            onMouseDown={handleMouseDown}
          ></div>

          {/* Workspace */}
          <div className="flex-1 bg-white flex flex-col p-5 gap-3">
            
            <div className="bg-[#e8eaed] rounded h-3 w-[45%]"></div>
            <div className="bg-[#e8eaed] rounded h-2.5 w-[60%]"></div>
            <div className="h-2"></div>
            <div className="bg-[#e8eaed] rounded h-2.5 w-[80%]"></div>
            <div className="bg-[#e8eaed] rounded h-2.5 w-[70%]"></div>
            <div className="bg-[#e8eaed] rounded h-2.5 w-[55%]"></div>
          </div>
        </div>

        {/* Hint Bar */}
        
      </div>
    </div>
  );
}