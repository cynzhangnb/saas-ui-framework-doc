import { useState } from 'react';

export function GlobalAIDemo() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);
  const [aiPaneOpen, setAiPaneOpen] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-start bg-white">
      <style>{`
        .global-ai-shell {
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
        
        .gai-header {
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
        
        .gai-hamburger {
          width: 32px;
          height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
          flex-shrink: 0;
        }
        .gai-hamburger:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .gai-app-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 3px 7px;
          border-radius: 6px;
          position: relative;
        }
        .gai-app-btn:hover {
          background: #f5f5f5;
        }
        
        .gai-app-dot {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          flex-shrink: 0;
          background: #378ADD;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0;
        }
        
        .gai-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
        }
        
        .gai-app-caret {
          color: #999;
        }
        
        .gai-divider {
          width: 0.5px;
          height: 20px;
          background: rgba(0,0,0,0.1);
          margin: 0 4px;
          flex-shrink: 0;
        }
        
        .gai-search-area {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }
        
        .gai-search-icon {
          width: 28px;
          height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
          flex-shrink: 0;
        }
        .gai-search-icon:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .gai-search-input {
          flex: 1;
          font-size: 13px;
          color: #1a1a1a;
          border: none;
          outline: none;
          background: transparent;
          min-width: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s;
        }
        .gai-search-input.active {
          opacity: 1;
          pointer-events: all;
        }
        .gai-search-input::placeholder {
          color: #999;
        }
        
        .gai-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .gai-action-btn {
          width: 28px;
          height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
          transition: background 0.15s, color 0.15s;
        }
        .gai-action-btn:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        .gai-action-btn.active {
          background: #378ADD;
          color: #ffffff;
        }
        .gai-action-btn.active:hover {
          background: #2a6eb8;
        }
        
        .gai-tenant-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          position: relative;
        }
        .gai-tenant-btn:hover {
          background: #f5f5f5;
        }
        
        .gai-tenant-name {
          font-size: 12px;
          color: #1a1a1a;
          font-weight: 400;
        }
        
        .gai-tenant-caret {
          color: #999;
        }
        
        .gai-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .gai-sidebar {
          width: 40px;
          background: #ffffff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: width 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .gai-sidebar.expanded {
          width: 180px;
        }
        
        .gai-sidebar-top {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 10px 12px;
          overflow: hidden;
        }
        
        .gai-sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 16px;
          cursor: pointer;
          flex-shrink: 0;
        }
        
        .gai-sidebar-icon {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          background: #d4d4d4;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .gai-sidebar-item:hover .gai-sidebar-icon {
          background: #c4c4c4;
        }
        
        .gai-sidebar-item-label {
          height: 10px;
          background: #d4d4d4;
          border-radius: 2px;
          flex: 1;
        }
        
        .gai-sidebar-divider {
          width: 16px;
          height: 0.5px;
          background: rgba(0,0,0,0.1);
          margin: 4px 0;
          flex-shrink: 0;
        }
        .gai-sidebar.expanded .gai-sidebar-divider {
          width: 100%;
        }
        
        .gai-sidebar-bottom {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          padding: 10px 12px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .gai-user-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: transparent;
          color: #666;
          font-size: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: color 0.15s;
        }
        .gai-user-icon:hover {
          color: #1a1a1a;
        }
        
        .gai-content-wrapper {
          display: flex;
          flex: 1;
          overflow: hidden;
          transition: margin-right 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .gai-content-wrapper.pane-open {
          margin-right: 280px;
        }
        
        .gai-content {
          flex: 1;
          background: #fafafa;
          overflow: auto;
          padding: 20px;
        }
        
        .content-placeholder {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .content-bar {
          height: 12px;
          background: #e5e5e5;
          border-radius: 4px;
        }
        
        .content-bar.long {
          width: 100%;
        }
        
        .content-bar.medium {
          width: 75%;
        }
        
        .app-menu {
          position: absolute;
          left: 0;
          top: 100%;
          margin-top: 2px;
          width: 190px;
          background: #fff;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          z-index: 60;
          transform: translateY(-4px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.15s ease, opacity 0.15s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          padding: 4px 0;
        }
        .app-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .app-menu-header {
          padding: 8px 12px 4px;
          font-size: 9px;
          font-weight: 500;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        
        .app-menu-item {
          display: flex;
          align-items: center;
          gap: 9px;
          height: 32px;
          padding: 0 12px;
          cursor: default;
        }
        .app-menu-item:hover {
          background: #f5f5f5;
        }
        .app-menu-item.active {
          background: #f5f5f5;
        }
        
        .app-menu-dot {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        
        .app-menu-name {
          font-size: 12px;
          color: #1a1a1a;
        }

        /* AI Pane Styles */
        .ai-pane {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 280px;
          background: #ffffff;
          border-left: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          z-index: 5;
        }
        .ai-pane.open {
          transform: translateX(0);
        }

        .ai-pane-header {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
          flex-shrink: 0;
        }

        .ai-pane-title {
          flex: 1;
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .ai-pane-close {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .ai-pane-close:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }

        .ai-pane-content {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ai-message {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ai-message-label {
          font-size: 10px;
          font-weight: 500;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ai-message-bubble {
          background: #f5f5f5;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 12px;
          line-height: 1.5;
          color: #1a1a1a;
        }

        .ai-message-bubble.user {
          background: #378ADD;
          color: #ffffff;
          align-self: flex-end;
        }

        .ai-pane-input-area {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          padding: 12px;
          flex-shrink: 0;
        }

        .ai-input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f5f5f5;
          border-radius: 6px;
          padding: 8px 10px;
        }

        .ai-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 12px;
          color: #1a1a1a;
        }
        .ai-input::placeholder {
          color: #999;
        }

        .ai-send-btn {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #378ADD;
        }
        .ai-send-btn:hover {
          color: #2a6eb8;
        }
      `}</style>
      
      <div className="global-ai-shell">
        {/* Global Header */}
        <div className="gai-header">
          <div className="gai-hamburger" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
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
          
          <div className="gai-app-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
            <div className="gai-app-dot">N</div>
            <span className="gai-app-name">ACME NetOps</span>
            <svg className="gai-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            <div className={`app-menu ${showAppMenu ? 'open' : ''}`}>
              <div className="app-menu-header">Applications</div>
              <div className="app-menu-item active">
                <div className="app-menu-dot" style={{ background: '#378ADD' }}></div>
                <span className="app-menu-name">ACME NetOps</span>
              </div>
              <div className="app-menu-item">
                <div className="app-menu-dot" style={{ background: '#7c3aed' }}></div>
                <span className="app-menu-name">Domain Manager</span>
              </div>
              <div className="app-menu-item">
                <div className="app-menu-dot" style={{ background: '#059669' }}></div>
                <span className="app-menu-name">SaaS Manager</span>
              </div>
              <div className="app-menu-item">
                <div className="app-menu-dot" style={{ background: '#dc2626' }}></div>
                <span className="app-menu-name">AI Studio</span>
              </div>
            </div>
          </div>
          
          <div className="gai-divider"></div>
          
          <div className="gai-search-area">
            <div className="gai-search-icon" onClick={() => setSearchActive(!searchActive)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <input 
              type="text" 
              className={`gai-search-input ${searchActive ? 'active' : ''}`}
              placeholder="Search"
              onBlur={() => setSearchActive(false)}
              autoFocus={searchActive}
            />
          </div>
          
          <div className="gai-actions">
            {/* AI Icon Button - NEW */}
            <div 
              className={`gai-action-btn ${aiPaneOpen ? 'active' : ''}`}
              onClick={() => setAiPaneOpen(!aiPaneOpen)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2L9 6L13 7L9 8L7 12L5 8L1 7L5 6L7 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="gai-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="gai-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="gai-divider"></div>
            
            <div className="gai-tenant-btn">
              <span className="gai-tenant-name">Tenant XYZ</span>
              <svg className="gai-tenant-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Body with Sidebar and Content */}
        <div className="gai-body">
          <div className={`gai-sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
            <div className="gai-sidebar-top">
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              
              <div className="gai-sidebar-divider"></div>
              
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
              <div className="gai-sidebar-item">
                <div className="gai-sidebar-icon"></div>
                {sidebarExpanded && <div className="gai-sidebar-item-label"></div>}
              </div>
            </div>
            
            <div className="gai-sidebar-bottom">
              <div className="gai-user-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2.5 10c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className={`gai-content-wrapper ${aiPaneOpen ? 'pane-open' : ''}`}>
            <div className="gai-content">
              <div className="content-placeholder">
                <div className="content-bar long"></div>
                <div className="content-bar medium"></div>
                <div className="content-bar long"></div>
                <div className="content-bar medium"></div>
              </div>
            </div>
          </div>

          {/* AI Pane */}
          <div className={`ai-pane ${aiPaneOpen ? 'open' : ''}`}>
            <div className="ai-pane-header">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2.5L10.5 7L15 8.5L10.5 10L8 14.5L5.5 10L1 8.5L5.5 7L8 2.5Z" stroke="#378ADD" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
              </svg>
              <span className="ai-pane-title">AI Assistant</span>
              <div className="ai-pane-close" onClick={() => setAiPaneOpen(false)}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="ai-pane-content">
              <div className="ai-message">
                <div className="ai-message-label">AI</div>
                <div className="ai-message-bubble">
                  Hello! I'm here to help. How can I assist you today?
                </div>
              </div>

              <div className="ai-message">
                <div className="ai-message-label">You</div>
                <div className="ai-message-bubble user">
                  Show me recent network alerts
                </div>
              </div>

              <div className="ai-message">
                <div className="ai-message-label">AI</div>
                <div className="ai-message-bubble">
                  I found 3 recent alerts in your network monitoring dashboard. Would you like me to show details for any specific alert?
                </div>
              </div>
            </div>

            <div className="ai-pane-input-area">
              <div className="ai-input-wrapper">
                <input 
                  type="text" 
                  className="ai-input"
                  placeholder="Ask AI anything..."
                />
                <div className="ai-send-btn">
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
