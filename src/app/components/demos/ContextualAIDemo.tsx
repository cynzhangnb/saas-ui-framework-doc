import { useState } from 'react';

export function ContextualAIDemo() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);
  const [aiPaneOpen, setAiPaneOpen] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-start bg-white">
      <style>{`
        .cai-shell {
          display: flex;
          flex-direction: column;
          height: 480px;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #ffffff;
          width: 100%;
          max-width: 920px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.1);
        }

        .cai-header {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 14px 0 6px;
          gap: 2px;
          flex-shrink: 0;
          background: #ffffff;
          z-index: 10;
        }

        .cai-hamburger {
          width: 32px; height: 28px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #999; flex-shrink: 0;
        }
        .cai-hamburger:hover { background: #f5f5f5; color: #1a1a1a; }

        .cai-app-btn {
          display: flex; align-items: center; gap: 6px;
          cursor: pointer; padding: 3px 7px; border-radius: 6px; position: relative;
        }
        .cai-app-btn:hover { background: #f5f5f5; }

        .cai-app-dot {
          width: 18px; height: 18px; border-radius: 4px; flex-shrink: 0;
          background: #378ADD; display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: #fff;
        }

        .cai-app-name { font-size: 12px; font-weight: 400; color: #1a1a1a; }
        .cai-app-caret { color: #999; }

        .cai-divider {
          width: 0.5px; height: 20px;
          background: rgba(0,0,0,0.1); margin: 0 4px; flex-shrink: 0;
        }

        .cai-search-icon {
          width: 28px; height: 28px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #999; flex-shrink: 0;
        }
        .cai-search-icon:hover { background: #f5f5f5; color: #1a1a1a; }

        .cai-actions { margin-left: auto; display: flex; align-items: center; gap: 4px; }

        .cai-action-btn {
          width: 28px; height: 28px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #999;
        }
        .cai-action-btn:hover { background: #f5f5f5; color: #1a1a1a; }

        .cai-tenant-btn {
          display: flex; align-items: center; gap: 5px;
          cursor: pointer; padding: 4px 8px; border-radius: 6px;
        }
        .cai-tenant-btn:hover { background: #f5f5f5; }
        .cai-tenant-name { font-size: 12px; color: #1a1a1a; font-weight: 400; }
        .cai-tenant-caret { color: #999; }

        .cai-body { display: flex; flex: 1; overflow: hidden; }

        .cai-sidebar {
          width: 40px; background: #ffffff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex; flex-direction: column; flex-shrink: 0;
          transition: width 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .cai-sidebar.expanded { width: 180px; }

        .cai-sidebar-top {
          flex: 1; display: flex; flex-direction: column;
          gap: 12px; padding: 10px 12px; overflow: hidden;
        }

        .cai-sidebar-item {
          display: flex; align-items: center; gap: 10px;
          height: 16px; cursor: pointer; flex-shrink: 0;
        }

        .cai-sidebar-icon {
          width: 16px; height: 16px; border-radius: 3px;
          background: #d4d4d4; flex-shrink: 0;
        }

        .cai-sidebar-divider {
          width: 16px; height: 0.5px;
          background: rgba(0,0,0,0.1); margin: 4px 0; flex-shrink: 0;
        }

        .cai-sidebar-bottom {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          padding: 10px 12px; flex-shrink: 0;
        }

        .cai-content-wrapper {
          display: flex; flex: 1; overflow: hidden; position: relative;
          transition: margin-right 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .cai-content-wrapper.pane-open { margin-right: 280px; }

        .cai-content {
          flex: 1; background: #fafafa;
          overflow-y: auto; position: relative;
        }

        .cai-table-container {
          background: #ffffff;
          margin: 16px;
          border: 0.5px solid rgba(0,0,0,0.12);
          border-radius: 6px;
          overflow: hidden;
        }

        .cai-table-title {
          font-size: 12px; font-weight: 500; color: #1a1a1a;
          padding: 10px 14px 8px;
          border-bottom: 0.5px solid rgba(0,0,0,0.08);
        }

        .cai-table { width: 100%; border-collapse: collapse; }

        .cai-table th {
          text-align: left; padding: 7px 14px;
          font-size: 10px; font-weight: 500; color: #888;
          background: #fafafa;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
        }

        .cai-table td {
          padding: 7px 14px; color: #1a1a1a;
          font-size: 11px;
          border-bottom: 0.5px solid rgba(0,0,0,0.06);
        }

        .cai-table tr:nth-child(even) td { background: #f7f8f9; }
        .cai-table tr:last-child td { border-bottom: none; }

        .cai-float-btn {
          position: absolute; bottom: 16px; right: 16px;
          width: 36px; height: 36px;
          background: #ffffff;
          border: 0.5px solid rgba(0,0,0,0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          color: #378ADD;
          transition: box-shadow 0.15s, transform 0.15s;
          z-index: 4;
        }
        .cai-float-btn:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          transform: scale(1.06);
        }
        .cai-float-btn.active {
          background: #378ADD;
          color: #ffffff;
          border-color: #378ADD;
        }

        .cai-ai-pane {
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 280px; background: #ffffff;
          border-left: 0.5px solid rgba(0,0,0,0.1);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          z-index: 5;
        }
        .cai-ai-pane.open { transform: translateX(0); }

        .cai-pane-header {
          height: 44px; border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex; align-items: center;
          padding: 0 12px; gap: 8px; flex-shrink: 0;
        }

        .cai-pane-title { flex: 1; font-size: 13px; font-weight: 500; color: #1a1a1a; }

        .cai-pane-close {
          width: 24px; height: 24px; border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #999;
        }
        .cai-pane-close:hover { background: #f5f5f5; color: #1a1a1a; }

        .cai-pane-content {
          flex: 1; padding: 16px; overflow-y: auto;
          display: flex; flex-direction: column; gap: 12px;
        }

        .cai-message { display: flex; flex-direction: column; gap: 6px; }
        .cai-message-label {
          font-size: 10px; font-weight: 500; color: #999;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .cai-message-bubble {
          background: #f5f5f5; border-radius: 8px;
          padding: 10px 12px; font-size: 12px; line-height: 1.5; color: #1a1a1a;
        }
        .cai-message-bubble.user {
          background: #378ADD; color: #ffffff; align-self: flex-end;
        }

        .cai-pane-input-area {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          padding: 12px; flex-shrink: 0;
        }

        .cai-input-wrapper {
          display: flex; align-items: center; gap: 8px;
          background: #f5f5f5; border-radius: 6px; padding: 8px 10px;
        }

        .cai-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 12px; color: #1a1a1a;
        }
        .cai-input::placeholder { color: #999; }

        .cai-send-btn {
          width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #378ADD;
        }
        .cai-send-btn:hover { color: #2a6eb8; }
      `}</style>

      <div className="cai-shell">
        {/* Header */}
        <div className="cai-header">
          <div className="cai-hamburger" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            {sidebarExpanded ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="3" width="10" height="1.4" rx="0.7" fill="currentColor"/>
                <rect x="2" y="6.3" width="10" height="1.4" rx="0.7" fill="currentColor"/>
                <rect x="2" y="9.6" width="10" height="1.4" rx="0.7" fill="currentColor"/>
              </svg>
            )}
          </div>

          <div className="cai-app-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
            <div className="cai-app-dot">N</div>
            <span className="cai-app-name">ACME NetOps</span>
            <svg className="cai-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="cai-divider"/>

          <div className="cai-search-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="cai-actions">
            <div className="cai-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="cai-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
              </svg>
            </div>
            <div className="cai-divider"/>
            <div className="cai-tenant-btn">
              <span className="cai-tenant-name">Tenant XYZ</span>
              <svg className="cai-tenant-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="cai-body">
          {/* Sidebar */}
          <div className={`cai-sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
            <div className="cai-sidebar-top">
              {[0, 1, 2].map(i => (
                <div key={i} className="cai-sidebar-item">
                  <div className="cai-sidebar-icon"/>
                </div>
              ))}
              <div className="cai-sidebar-divider"/>
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="cai-sidebar-item">
                  <div className="cai-sidebar-icon"/>
                </div>
              ))}
            </div>
            <div className="cai-sidebar-bottom">
              <div className="cai-sidebar-item">
                <div style={{ width: '16px', height: '16px', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2.5 10c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className={`cai-content-wrapper ${aiPaneOpen ? 'pane-open' : ''}`}>
            <div className="cai-content">
              {/* Device Inventory Table */}
              <div className="cai-table-container">
                <div className="cai-table-title">Device Inventory</div>
                <table className="cai-table">
                  <thead>
                    <tr>
                      <th>Hostname</th>
                      <th>Type</th>
                      <th>IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { host: 'core-sw-01', type: 'Switch', ip: '10.0.1.1' },
                      { host: 'core-sw-02', type: 'Switch', ip: '10.0.1.2' },
                      { host: 'edge-rtr-01', type: 'Router', ip: '10.0.2.1' },
                      { host: 'fw-01', type: 'Firewall', ip: '10.0.3.1' },
                      { host: 'dist-sw-01', type: 'Switch', ip: '10.0.4.1' },
                      { host: 'dist-sw-02', type: 'Switch', ip: '10.0.4.2' },
                      { host: 'access-sw-03', type: 'Switch', ip: '10.0.5.3' },
                      { host: 'vpn-gw-01', type: 'VPN GW', ip: '10.0.6.1' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td>{row.host}</td>
                        <td>{row.type}</td>
                        <td>{row.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Floating AI button */}
              <div
                className={`cai-float-btn ${aiPaneOpen ? 'active' : ''}`}
                onClick={() => setAiPaneOpen(!aiPaneOpen)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10.2 6.5L15 8L10.2 9.5L8 14L5.8 9.5L1 8L5.8 6.5L8 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* AI Pane */}
          <div className={`cai-ai-pane ${aiPaneOpen ? 'open' : ''}`}>
            <div className="cai-pane-header">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L10.2 6.5L15 8L10.2 9.5L8 14L5.8 9.5L1 8L5.8 6.5L8 2Z" stroke="#378ADD" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
              <span className="cai-pane-title">AI Assistant</span>
              <div className="cai-pane-close" onClick={() => setAiPaneOpen(false)}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="cai-pane-content">
              <div className="cai-message">
                <div className="cai-message-label">AI</div>
                <div className="cai-message-bubble">
                  I can see you're viewing the Device Inventory. How can I help you with these devices?
                </div>
              </div>
              <div className="cai-message">
                <div className="cai-message-label">You</div>
                <div className="cai-message-bubble user">
                  Show devices with high CPU usage
                </div>
              </div>
              <div className="cai-message">
                <div className="cai-message-label">AI</div>
                <div className="cai-message-bubble">
                  2 devices have elevated CPU: edge-rtr-01 (74%) and vpn-gw-01 (58%). Would you like details?
                </div>
              </div>
            </div>
            <div className="cai-pane-input-area">
              <div className="cai-input-wrapper">
                <input type="text" className="cai-input" placeholder="Ask AI about this page..."/>
                <div className="cai-send-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 2L7 9M14 2L9.5 14L7 9M14 2L2 6.5L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
