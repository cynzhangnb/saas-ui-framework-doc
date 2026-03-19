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
}

const devices: Device[] = [
  { host: 'core-sw-01', type: 'Switch', status: 'ok', ip: '10.0.1.1', vendor: 'Cisco', model: 'Catalyst 9300', os: 'IOS-XE 17.6', uptime: '42d 3h', cpu: '12%', mem: '38%' },
  { host: 'core-sw-02', type: 'Switch', status: 'ok', ip: '10.0.1.2', vendor: 'Cisco', model: 'Catalyst 9300', os: 'IOS-XE 17.6', uptime: '42d 2h', cpu: '9%', mem: '34%' },
  { host: 'edge-rtr-01', type: 'Router', status: 'warn', ip: '10.0.2.1', vendor: 'Cisco', model: 'ASR 1001-X', os: 'IOS-XE 17.3', uptime: '18d 6h', cpu: '74%', mem: '61%' },
  { host: 'fw-01', type: 'Firewall', status: 'ok', ip: '10.0.3.1', vendor: 'Palo Alto', model: 'PA-3220', os: 'PAN-OS 10.2', uptime: '90d 1h', cpu: '22%', mem: '45%' },
  { host: 'dist-sw-01', type: 'Switch', status: 'ok', ip: '10.0.4.1', vendor: 'Juniper', model: 'EX4300', os: 'Junos 21.4', uptime: '31d 9h', cpu: '8%', mem: '29%' },
  { host: 'dist-sw-02', type: 'Switch', status: 'err', ip: '10.0.4.2', vendor: 'Juniper', model: 'EX4300', os: 'Junos 21.4', uptime: '0d 0h', cpu: '—', mem: '—' },
  { host: 'access-sw-03', type: 'Switch', status: 'ok', ip: '10.0.5.3', vendor: 'Cisco', model: 'Catalyst 2960', os: 'IOS 15.2', uptime: '65d 11h', cpu: '5%', mem: '22%' },
  { host: 'vpn-gw-01', type: 'VPN GW', status: 'warn', ip: '10.0.6.1', vendor: 'Cisco', model: 'FTD 2110', os: 'FTD 7.2', uptime: '7d 4h', cpu: '58%', mem: '70%' },
];

type TabType = 'overview' | 'interfaces' | 'alerts';

export function RightPanePushedDemo() {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [paneVisible, setPaneVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const valClass = (s: Device['status']) => {
    if (s === 'ok') return 'text-[#3B6D11]';
    if (s === 'warn') return 'text-[#854F0B]';
    return 'text-[#A32D2D]';
  };

  const selectRow = (idx: number) => {
    setSelectedIdx(idx);
    setPaneVisible(true);
    setActiveTab('overview');
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

  const renderTabContent = () => {
    if (!selectedDevice) return null;

    if (activeTab === 'overview') {
      return (
        <>
          <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-1.5">
            Identity
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">Hostname</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.host}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">IP Address</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.ip}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">Type</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.type}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">Vendor</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.vendor}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">Model</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.model}</span>
          </div>

          <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-1.5 mt-3">
            System
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">OS Version</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.os}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">Uptime</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.uptime}</span>
          </div>

          <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-1.5 mt-3">
            Health
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-[11px] text-gray-500">CPU</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.cpu}</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-[11px] text-gray-500">Memory</span>
            <span className="text-[11px] text-gray-900 font-medium">{selectedDevice.mem}</span>
          </div>
        </>
      );
    }

    if (activeTab === 'interfaces') {
      const ifaces =
        selectedDevice.type === 'Firewall'
          ? ['Gi0/0 — WAN', 'Gi0/1 — LAN', 'Gi0/2 — DMZ']
          : selectedDevice.type === 'Router'
          ? ['Gi0/0', 'Gi0/1', 'Gi0/2 (uplink)']
          : ['Gi0/1', 'Gi0/2', 'Gi0/3', 'Gi0/24 (uplink)'];

      return (
        <>
          <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-1.5">
            Interfaces
          </div>
          {ifaces.map((iface, idx) => (
            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
              <span className="text-[11px] text-gray-500">{iface}</span>
              <span className={`text-[11px] font-medium ${selectedDevice.status === 'err' ? valClass('err') : valClass('ok')}`}>
                {selectedDevice.status === 'err' ? 'Down' : 'Up'}
              </span>
            </div>
          ))}
        </>
      );
    }

    if (activeTab === 'alerts') {
      const alerts =
        selectedDevice.status === 'err'
          ? ['Device unreachable', 'Uptime reset detected']
          : selectedDevice.status === 'warn'
          ? ['High CPU utilization', 'Interface error rate elevated']
          : [];

      return (
        <>
          <div className="text-[10px] font-medium tracking-wider text-gray-500 uppercase mb-1.5">
            Active alerts ({alerts.length})
          </div>
          {alerts.length === 0 ? (
            <div className="text-[11px] text-gray-500 py-2">No active alerts</div>
          ) : (
            alerts.map((alert, idx) => (
              <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
                <span className="text-[11px] text-gray-500">{alert}</span>
                <span className={`text-[11px] font-medium ${valClass(selectedDevice.status)}`}>Active</span>
              </div>
            ))
          )}
        </>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="flex h-[500px] border border-gray-300 rounded-lg overflow-hidden bg-white">
        {/* Nav Pane */}
        <div className="w-[52px] min-w-[52px] bg-gray-50 border-r border-gray-200 flex flex-col items-center py-3 gap-1 flex-shrink-0">
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
        <div className="flex-1 flex min-w-0">
          {/* List Area */}
          <div className="flex-1 flex flex-col min-w-0 relative">
            {/* Header */}
            <div className="px-3.5 py-2.5 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
              <span className="text-xs font-medium text-gray-900">Device Inventory</span>
              
            </div>

            {/* Table */}
            <div className={`flex-1 overflow-y-auto ${paneVisible ? 'pb-[34px]' : ''}`}>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-3 py-1.5 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                      Hostname
                    </th>
                    {!paneVisible && (
                      <>
                        <th className="px-3 py-1.5 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                          Type
                        </th>
                        <th className="px-3 py-1.5 text-[11px] font-medium text-gray-500 text-left border-b border-gray-200 bg-gray-50 sticky top-0">
                          IP Address
                        </th>
                      </>
                    )}
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
                      {!paneVisible && (
                        <>
                          <td className="px-3 py-2 text-xs text-gray-500">{device.type}</td>
                          <td className="px-3 py-2 text-xs text-gray-500">{device.ip}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Navigation Keys Bar */}
            {paneVisible && (
              <div className="absolute bottom-0 left-0 right-0 px-3.5 py-1.5 border-t border-gray-200 bg-white flex items-center gap-1 text-[10px] text-gray-500">
                <div className="w-[18px] h-[18px] rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-600">
                  ↑
                </div>
                <div className="w-[18px] h-[18px] rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-600">
                  ↓
                </div>
                <span>navigate rows · Esc to close</span>
              </div>
            )}
          </div>

          {/* Right Pane */}
          <div
            className={`bg-gray-50 border-l border-gray-200 flex flex-col flex-shrink-0 transition-all duration-200 overflow-hidden ${
              paneVisible ? 'w-[300px] min-w-[300px]' : 'w-0 min-w-0 border-l-0'
            }`}
          >
            <div className="w-[300px] min-w-[300px] flex flex-col h-full">
              {/* Header */}
              <div className="px-3.5 py-2.5 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                <span className="text-xs font-medium text-gray-900">
                  {selectedDevice?.host || '—'}
                </span>
                <button
                  onClick={closePane}
                  className="w-5 h-5 rounded bg-transparent text-xs text-gray-500 hover:bg-gray-200 hover:text-gray-900 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 px-3.5 flex-shrink-0">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-1.5 mr-3.5 text-[11px] border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'overview'
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-500 border-transparent'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('interfaces')}
                  className={`py-1.5 mr-3.5 text-[11px] border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'interfaces'
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-500 border-transparent'
                  }`}
                >
                  Interfaces
                </button>
                <button
                  onClick={() => setActiveTab('alerts')}
                  className={`py-1.5 text-[11px] border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'alerts'
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-500 border-transparent'
                  }`}
                >
                  Alerts
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-3.5 py-3">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      
    </div>
  );
}