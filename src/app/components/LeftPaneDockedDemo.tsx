import { useState, useRef, useEffect } from 'react';

export function LeftPaneDockedDemo() {
  const [expanded, setExpanded] = useState(true);
  const [paneWidth, setPaneWidth] = useState(220);
  const [isDragging, setIsDragging] = useState(false);
  const [showWidthIndicator, setShowWidthIndicator] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<number[]>([0, 1]);
  
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!expanded) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startWidthRef.current = paneWidth;
    setShowHint(false);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientX - startXRef.current;
      const newWidth = Math.min(360, Math.max(140, startWidthRef.current + delta));
      setPaneWidth(newWidth);
      setShowWidthIndicator(true);
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      setTimeout(() => setShowWidthIndicator(false), 800);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const collapsePane = () => {
    setExpanded(false);
    setShowHint(false);
  };

  const expandPane = () => {
    setExpanded(true);
    setShowHint(true);
  };

  const toggleFolder = (index: number) => {
    setExpandedFolders(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-300" style={{ height: '380px' }}>
      <div className="h-full flex bg-white select-none">
        {/* Nav Pane */}
        <div className="w-[52px] min-w-[52px] bg-gray-50 border-r border-gray-200 flex flex-col items-center py-3 gap-1 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300"></div>
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-400"></div>
          </div>
          <div className="w-7 h-[0.5px] bg-gray-300 my-1"></div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300"></div>
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300"></div>
          </div>
        </div>

        {/* Page Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Page Header - spans both pane and workspace */}
          <div className="px-3.5 py-2.5 border-b border-gray-300 flex items-center flex-shrink-0 h-[33px] bg-white">
            <span className="text-xs font-medium text-gray-900">Page Header</span>
          </div>

          {/* Content Area - contains pane and workspace */}
          <div className="flex-1 flex min-w-0">
            {/* Left Toolbar - Only visible when pane collapsed */}
            {!expanded && (
              <div className="w-8 min-w-8 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-2.5 gap-1.5 flex-shrink-0">
                <div 
                  className="w-[22px] h-[22px] rounded flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={expandPane}
                >
                  <div className="w-[9px] h-[9px] rounded-sm bg-gray-400"></div>
                </div>
                <div className="w-[22px] h-[22px] rounded flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <div className="w-[9px] h-[9px] rounded-sm bg-gray-400"></div>
                </div>
                <div className="w-[22px] h-[22px] rounded flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <div className="w-[9px] h-[9px] rounded-sm bg-gray-400"></div>
                </div>
              </div>
            )}

            {/* Left Pane */}
            <div 
              className="bg-white flex flex-col flex-shrink-0 overflow-hidden transition-all duration-200 ease-out border-r border-gray-300"
              style={{ 
                width: expanded ? `${paneWidth}px` : '0px',
                minWidth: expanded ? '140px' : '0px',
                maxWidth: '360px'
              }}
            >
              {/* Pane Header */}
              <div className="px-2.5 py-1.5 border-b border-gray-300 flex items-center justify-between flex-shrink-0 h-[28px]">
                <div className="h-2 w-16 rounded bg-gray-300"></div>
                <button
                  className="w-[18px] h-[18px] rounded flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-xs"
                  onClick={collapsePane}
                >
                  ‹
                </button>
              </div>

              {/* Pane Body - File Tree */}
              <div className="flex-1 flex flex-col px-2 py-2 overflow-y-auto">
                {/* Folder 1 */}
                <div>
                  <div 
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFolder(0)}
                  >
                    <span className="text-gray-500 text-[10px] w-3 flex-shrink-0">
                      {expandedFolders.includes(0) ? '▾' : '▸'}
                    </span>
                    <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[96px]"></div>
                  </div>
                  {expandedFolders.includes(0) && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[88px]"></div>
                      </div>
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[80px]"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Folder 2 */}
                <div className="mt-0.5">
                  <div 
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFolder(1)}
                  >
                    <span className="text-gray-500 text-[10px] w-3 flex-shrink-0">
                      {expandedFolders.includes(1) ? '▾' : '▸'}
                    </span>
                    <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[92px]"></div>
                  </div>
                  {expandedFolders.includes(1) && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[84px]"></div>
                      </div>
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[90px]"></div>
                      </div>
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[76px]"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Folder 3 */}
                <div className="mt-0.5">
                  <div 
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFolder(2)}
                  >
                    <span className="text-gray-500 text-[10px] w-3 flex-shrink-0">
                      {expandedFolders.includes(2) ? '▾' : '▸'}
                    </span>
                    <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[88px]"></div>
                  </div>
                  {expandedFolders.includes(2) && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="w-3 flex-shrink-0"></span>
                        <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[92px]"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Single File */}
                <div className="mt-0.5">
                  <div className="flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="w-3 flex-shrink-0"></span>
                    <div className="w-3 h-3 bg-gray-300 rounded-sm flex-shrink-0"></div>
                    <div className="h-1.5 rounded bg-gray-300 flex-1 max-w-[86px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resize Handle */}
            {expanded && (
              <div 
                className={`w-1 flex-shrink-0 cursor-col-resize transition-all duration-100 ${ 
                  isDragging ? 'bg-gray-400 opacity-60 border-r border-gray-400' : 'bg-transparent hover:bg-gray-400 hover:opacity-40'
                }`}
                onMouseDown={handleMouseDown}
                style={{ zIndex: 10 }}
              ></div>
            )}

            {/* Workspace */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Workspace Body */}
              <div className="flex-1 flex items-center justify-center relative bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-1.5 rounded bg-gray-200" style={{ width: '160px' }}></div>
                  <div className="h-1.5 rounded bg-gray-200 opacity-60" style={{ width: '120px' }}></div>
                  <div className="h-1.5 rounded bg-gray-200 opacity-40" style={{ width: '140px' }}></div>
                </div>

                {/* Width Indicator */}
                {showWidthIndicator && (
                  <div className="absolute top-2 right-2.5 text-[10px] text-gray-500 font-mono transition-opacity">
                    {Math.round(paneWidth)}px
                  </div>
                )}

                {/* Resize Hint */}
                {expanded && (
                  null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}