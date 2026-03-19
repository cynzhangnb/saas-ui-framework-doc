import { useState, useEffect } from 'react';

interface Device {
  host: string;
  type: string;
  status: 'ok' | 'warn' | 'err';
  ip: string;
  vendor: string;
  model: string;
  os: string;
  uptime: string;
  cpu: string;
  mem: string;
  ifaces: number;
}

const devices: Device[] = [
  { host: 'core-sw-01', type: 'Switch', status: 'ok', ip: '10.0.1.1', vendor: 'Cisco', model: 'Catalyst 9300', os: 'IOS-XE 17.6', uptime: '42d 3h', cpu: '12%', mem: '38%', ifaces: 48 },
  { host: 'core-sw-02', type: 'Switch', status: 'ok', ip: '10.0.1.2', vendor: 'Cisco', model: 'Catalyst 9300', os: 'IOS-XE 17.6', uptime: '42d 2h', cpu: '9%', mem: '34%', ifaces: 48 },
  { host: 'edge-rtr-01', type: 'Router', status: 'warn', ip: '10.0.2.1', vendor: 'Cisco', model: 'ASR 1001-X', os: 'IOS-XE 17.3', uptime: '18d 6h', cpu: '74%', mem: '61%', ifaces: 8 },
  { host: 'fw-01', type: 'Firewall', status: 'ok', ip: '10.0.3.1', vendor: 'Palo Alto', model: 'PA-3220', os: 'PAN-OS 10.2', uptime: '90d 1h', cpu: '22%', mem: '45%', ifaces: 12 },
  { host: 'dist-sw-01', type: 'Switch', status: 'ok', ip: '10.0.4.1', vendor: 'Juniper', model: 'EX4300', os: 'Junos 21.4', uptime: '31d 9h', cpu: '8%', mem: '29%', ifaces: 24 },
  { host: 'dist-sw-02', type: 'Switch', status: 'err', ip: '10.0.4.2', vendor: 'Juniper', model: 'EX4300', os: 'Junos 21.4', uptime: '0d 0h', cpu: '—', mem: '—', ifaces: 24 },
  { host: 'access-sw-03', type: 'Switch', status: 'ok', ip: '10.0.5.3', vendor: 'Cisco', model: 'Catalyst 2960', os: 'IOS 15.2', uptime: '65d 11h', cpu: '5%', mem: '22%', ifaces: 24 },
  { host: 'vpn-gw-01', type: 'VPN GW', status: 'warn', ip: '10.0.6.1', vendor: 'Cisco', model: 'FTD 2110', os: 'FTD 7.2', uptime: '7d 4h', cpu: '58%', mem: '70%', ifaces: 6 },
];

export function RightPaneFlyoutDemo() {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [paneVisible, setPaneVisible] = useState(false);

  const statusClass = (s: Device['status']) => {
    if (s === 'ok') return 'bg-[#639922]';
    if (s === 'warn') return 'bg-[#EF9F27]';
    return 'bg-[#E24B4A]';
  };

  const statusLabel = (s: Device['status']) => {
    if (s === 'ok') return 'Online';
    if (s === 'warn') return 'Degraded';
    return 'Offline';
  };

  const valClass = (s: Device['status']) => {
    if (s === 'ok') return 'text-[#3B6D11]';
    if (s === 'warn') return 'text-[#854F0B]';
    return 'text-[#A32D2D]';
  };

  const selectRow = (idx: number) => {
    setSelectedIdx(idx);
    setPaneVisible(true);
  };

  const closePane = () => {
    setSelectedIdx(-1);
    setPaneVisible(false);
  };

  const navigate = (dir: number) => {
    let next = selectedIdx + dir;
    if (next < 0) next = devices.length - 1;
    if (next >= devices.length) next = 0;
    selectRow(next);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === -1) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigate(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigate(-1);
      }
      if (e.key === 'Escape') {
        closePane();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const selectedDevice = selectedIdx >= 0 ? devices[selectedIdx] : null;

  return (
    <div className="w-full">
      <div className="flex h-[500px] border border-gray-300 rounded-lg overflow-hidden bg-white relative">
        {/* Nav Pane */}
        <div className="w-[52px] min-w-[52px] bg-gray-50 border-r border-gray-200 flex flex-col items-center py-3 gap-1 z-10 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-blue-600" />
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-200" />
          </div>
          <div className="w-7 h-px bg-gray-200 my-1" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-200" />
          </div>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded bg-gray-200" />
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <span className="text-[13px] font-medium text-gray-900">Device Inventory</span>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-y-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                    Hostname
                  </th>
                  <th className="px-3 py-2 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                    Type
                  </th>
                  <th className="px-3 py-2 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                    IP Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device, idx) => (
                  <tr
                    key={idx}
                    onClick={() => selectRow(idx)}
                    className={`border-b border-gray-200 cursor-pointer transition-colors ${
                      idx === selectedIdx ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-3 py-2 text-xs text-gray-900">{device.host}</td>
                    <td className="px-3 py-2 text-xs text-gray-500">{device.type}</td>
                    <td className="px-3 py-2 text-xs text-gray-500">{device.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Backdrop */}
          {paneVisible && (
            <div
              className="absolute inset-0 bg-black/5 z-[15] transition-opacity"
              onClick={closePane}
            />
          )}

          {/* Navigation Keys Hint */}
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 items-center text-[11px] text-gray-500 pointer-events-none transition-opacity ${
              paneVisible ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="w-[18px] h-[18px] rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-600">
              ↑
            </div>
            <div className="w-[18px] h-[18px] rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-600">
              ↓
            </div>
            <span>navigate rows</span>
          </div>
        </div>

        {/* Right Pane */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[300px] bg-white border-l border-gray-300 flex flex-col z-20 shadow-[-4px_0_20px_rgba(0,0,0,0.1)] transition-all duration-200 ${
            paneVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          {/* Header */}
          <div className="px-3.5 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <span className="text-xs font-medium text-gray-900">
              {selectedDevice?.host || '—'}
            </span>
            <div className="flex gap-1.5 items-center">
              <button
                onClick={() => navigate(-1)}
                className="w-[22px] h-[22px] rounded border border-gray-300 bg-white text-[11px] text-gray-600 hover:bg-gray-50 flex items-center justify-center"
              >
                ↑
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-[22px] h-[22px] rounded border border-gray-300 bg-white text-[11px] text-gray-600 hover:bg-gray-50 flex items-center justify-center"
              >
                ↓
              </button>
              <button
                onClick={closePane}
                className="w-5 h-5 rounded bg-transparent text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 px-3.5 flex-shrink-0">
            <div className="py-2 mr-4 text-[11px] text-blue-600 border-b-2 border-blue-600 cursor-pointer">
              Overview
            </div>
            <div className="py-2 mr-4 text-[11px] text-gray-500 border-b-2 border-transparent cursor-pointer">
              Interfaces
            </div>
            <div className="py-2 text-[11px] text-gray-500 border-b-2 border-transparent cursor-pointer">
              Alerts
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3">
            {selectedDevice && (
              <>
                <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-2">
                  Identity
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Hostname</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.host}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">IP Address</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.ip}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Type</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.type}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Vendor</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.vendor}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Model</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.model}</span>
                </div>

                <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-2 mt-3.5">
                  System
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">OS Version</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.os}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Uptime</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.uptime}</span>
                </div>

                <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-2 mt-3.5">
                  Health
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Status</span>
                  <span className={`text-[11px] font-medium ${valClass(selectedDevice.status)}`}>
                    {statusLabel(selectedDevice.status)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">CPU</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.cpu}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-[11px] text-gray-500">Memory</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.mem}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[11px] text-gray-500">Interfaces</span>
                  <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.ifaces}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      
    </div>
  );
}