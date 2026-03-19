import { useState } from 'react';

interface BarData {
  height: number;
  color: string;
}

interface TableRow {
  w1: number;
  w2: number;
  w3: number;
  badge: string;
}

export function DashboardFlyoutDemo() {
  const [floatPaneOpen, setFloatPaneOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [paneTitle, setPaneTitle] = useState('Detail');
  const [hintVisible, setHintVisible] = useState(true);

  const barHeights: BarData[] = [
    { height: 40, color: '#B5D4F4' },
    { height: 55, color: '#B5D4F4' },
    { height: 35, color: '#C0DD97' },
    { height: 70, color: '#F7C1C1' },
    { height: 50, color: '#B5D4F4' },
    { height: 80, color: '#F7C1C1' },
    { height: 62, color: '#C0DD97' },
  ];

  const tblRows: TableRow[] = [
    { w1: 80, w2: 50, w3: 36, badge: '#C0DD97' },
    { w1: 65, w2: 42, w3: 36, badge: '#F7C1C1' },
    { w1: 72, w2: 58, w3: 36, badge: '#C0DD97' },
    { w1: 55, w2: 35, w3: 36, badge: '#FAC775' },
  ];

  const miniBars = [
    { height: 20, color: '#B5D4F4' },
    { height: 32, color: '#B5D4F4' },
    { height: 18, color: '#C0DD97' },
    { height: 40, color: '#F7C1C1' },
    { height: 28, color: '#B5D4F4' },
    { height: 44, color: '#F7C1C1' },
    { height: 36, color: '#C0DD97' },
  ];

  const detailRows = [
    [70, 40],
    [55, 50],
    [80, 35],
    [60, 45],
    [50, 55],
  ];

  const openPane = (label: string, elementId: string) => {
    setActiveElement(elementId);
    setPaneTitle(label);
    setFloatPaneOpen(true);
    setHintVisible(false);
  };

  const closePane = () => {
    setActiveElement(null);
    setFloatPaneOpen(false);
    setHintVisible(true);
  };

  return (
    <div className="w-full">
      <div className="flex h-[500px] border border-gray-300 rounded-lg overflow-hidden bg-white relative">
        {/* Nav Pane */}
        <div className="w-[52px] min-w-[52px] border-r border-gray-200 bg-gray-50 flex flex-col items-center py-3 gap-1 z-30 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-400" />
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300" />
          </div>
          <div className="w-7 h-px bg-gray-200 my-1" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300" />
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-300" />
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
          {/* Header */}
          <div className="px-3.5 py-2.5 bg-white border-b border-gray-200 flex items-center justify-between shrink-0">
            <span className="text-xs font-medium text-gray-900">Dashboard</span>
            
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2.5 content-start bg-gray-50">
            {/* Distribution Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="text-[11px] font-medium text-gray-500 mb-3.5">Distribution</div>
              <div className="flex items-center gap-4">
                <svg width="80" height="80" viewBox="0 0 80 80" className="shrink-0">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke="#B5D4F4"
                    strokeWidth="18"
                    strokeDasharray="94 95"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke="#C0DD97"
                    strokeWidth="18"
                    strokeDasharray="52 95"
                    strokeDashoffset="-94"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke="#F7C1C1"
                    strokeWidth="18"
                    strokeDasharray="38 95"
                    strokeDashoffset="-146"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="18"
                    strokeDasharray="6 95"
                    strokeDashoffset="-184"
                  />
                </svg>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#B5D4F4' }} />
                    <div className="h-[5px] rounded bg-gray-200" style={{ width: '52px' }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#C0DD97' }} />
                    <div className="h-[5px] rounded bg-gray-200" style={{ width: '38px' }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#F7C1C1' }} />
                    <div className="h-[5px] rounded bg-gray-200" style={{ width: '44px' }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full shrink-0 bg-gray-200" />
                    <div className="h-[5px] rounded bg-gray-200" style={{ width: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Trend Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="text-[11px] font-medium text-gray-500 mb-3.5">Trend · last 7 periods</div>
              <div className="flex items-end gap-1.5 h-[90px]">
                {barHeights.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t cursor-pointer transition-opacity hover:opacity-75 ${
                      activeElement === `bar-${i}` ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                    }`}
                    style={{ height: `${bar.height}px`, background: bar.color }}
                    onClick={() => openPane(`Period ${i + 1}`, `bar-${i}`)}
                  />
                ))}
              </div>
            </div>

            {/* Summary Table */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 col-span-2">
              <div className="text-[11px] font-medium text-gray-500 mb-3.5">Summary by group</div>
              <div className="flex flex-col">
                {/* Table Header */}
                <div className="flex gap-2 px-0 py-1.5 border-b border-gray-200 mb-0.5">
                  <div className="h-[5px] rounded bg-gray-200 opacity-60" style={{ width: '90px' }} />
                  <div className="h-[5px] rounded bg-gray-200 opacity-60" style={{ width: '55px' }} />
                  <div className="h-[5px] rounded bg-gray-200 opacity-60" style={{ width: '40px' }} />
                  <div className="h-[5px] rounded bg-gray-200 opacity-60 ml-auto" style={{ width: '28px' }} />
                </div>
                {/* Table Body */}
                {tblRows.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-0 py-1.5 border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors rounded hover:bg-gray-50 ${
                      activeElement === `row-${i}` ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => openPane(`Group ${i + 1}`, `row-${i}`)}
                  >
                    <div
                      className="h-[5px] rounded bg-gray-200"
                      style={{ width: `${row.w1}px` }}
                    />
                    <div
                      className="h-[5px] rounded bg-gray-200 opacity-60"
                      style={{ width: `${row.w2}px` }}
                    />
                    <div
                      className="h-[5px] rounded bg-gray-200 opacity-40"
                      style={{ width: `${row.w3}px` }}
                    />
                    <div
                      className="ml-auto shrink-0 w-[22px] h-[14px] rounded"
                      style={{ background: row.badge }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backdrop */}
          {floatPaneOpen && (
            <div
              className="absolute inset-0 bg-black/[0.03] z-40 transition-opacity duration-200"
              onClick={closePane}
            />
          )}

          {/* Float Pane */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-[400px] bg-white border-l border-gray-300 flex flex-col z-50 transition-all duration-200 ease-out ${
              floatPaneOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
            }`}
            style={{ boxShadow: '-6px 0 20px rgba(0,0,0,0.09)' }}
          >
            {/* Float Pane Header */}
            <div className="px-3.5 py-2.5 border-b border-gray-200 flex items-center justify-between shrink-0">
              <span className="text-xs font-medium text-gray-900">{paneTitle}</span>
              <button
                onClick={closePane}
                className="w-5 h-5 rounded border-none bg-transparent cursor-pointer text-xs text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Float Pane Body */}
            <div className="flex-1 overflow-y-auto p-3.5 flex flex-col gap-3.5">
              {/* Mini Bars Section */}
              <div>
                <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-2">
                  Summary
                </div>
                <div className="flex items-end gap-0.5 h-11">
                  {miniBars.map((bar, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${bar.height}px`, background: bar.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Breakdown Section */}
              <div>
                <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-2">
                  Breakdown
                </div>
                <div>
                  {detailRows.map((row, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0"
                    >
                      <div
                        className="h-[5px] rounded bg-gray-200"
                        style={{ width: `${row[0]}px` }}
                      />
                      <div
                        className="h-[5px] rounded bg-gray-300"
                        style={{ width: `${row[1]}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      
    </div>
  );
}