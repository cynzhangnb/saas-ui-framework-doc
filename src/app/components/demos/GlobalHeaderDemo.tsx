import { useState } from 'react';

export function GlobalHeaderDemo() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-start bg-white">
      <style>{`
        .global-header-shell {
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
        
        .gh-header {
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
        
        .gh-hamburger {
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
        .gh-hamburger:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .gh-app-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 3px 7px;
          border-radius: 6px;
          position: relative;
        }
        .gh-app-btn:hover {
          background: #f5f5f5;
        }
        
        .gh-app-dot {
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
        
        .gh-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
        }
        
        .gh-app-caret {
          color: #999;
        }
        
        .gh-divider {
          width: 0.5px;
          height: 20px;
          background: rgba(0,0,0,0.1);
          margin: 0 4px;
          flex-shrink: 0;
        }
        
        .gh-search-area {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }
        
        .gh-search-icon {
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
        .gh-search-icon:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .gh-search-input {
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
        .gh-search-input.active {
          opacity: 1;
          pointer-events: all;
        }
        .gh-search-input::placeholder {
          color: #999;
        }
        
        .gh-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .gh-action-btn {
          width: 28px;
          height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .gh-action-btn:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .gh-tenant-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          position: relative;
        }
        .gh-tenant-btn:hover {
          background: #f5f5f5;
        }
        
        .gh-tenant-name {
          font-size: 12px;
          color: #1a1a1a;
          font-weight: 400;
        }
        
        .gh-tenant-caret {
          color: #999;
        }
        
        .gh-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .gh-sidebar {
          width: 40px;
          background: #ffffff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: width 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .gh-sidebar.expanded {
          width: 180px;
        }
        
        .gh-sidebar-top {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 10px 12px;
          overflow: hidden;
        }
        
        .gh-sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 16px;
          cursor: pointer;
          flex-shrink: 0;
        }
        
        .gh-sidebar-icon {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          background: #d4d4d4;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .gh-sidebar-item:hover .gh-sidebar-icon {
          background: #c4c4c4;
        }
        
        .gh-sidebar-item-label {
          height: 10px;
          background: #d4d4d4;
          border-radius: 2px;
          flex: 1;
        }
        
        .gh-sidebar-divider {
          width: 16px;
          height: 0.5px;
          background: rgba(0,0,0,0.1);
          margin: 4px 0;
          flex-shrink: 0;
        }
        .gh-sidebar.expanded .gh-sidebar-divider {
          width: 100%;
        }
        
        .gh-sidebar-bottom {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          padding: 10px 12px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .gh-user-icon {
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
        .gh-user-icon:hover {
          color: #1a1a1a;
        }
        
        .gh-settings-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: color 0.15s;
        }
        .gh-settings-icon:hover {
          color: #1a1a1a;
        }
        
        .gh-help-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: color 0.15s;
        }
        .gh-help-icon:hover {
          color: #1a1a1a;
        }
        
        .gh-content {
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
      `}</style>
      
      <div className="global-header-shell">
        {/* Global Header */}
        <div className="gh-header">
          <div className="gh-hamburger" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
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
          
          <div className="gh-app-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
            <div className="gh-app-dot">N</div>
            <span className="gh-app-name">ACME NetOps</span>
            <svg className="gh-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
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
          
          <div className="gh-divider"></div>
          
          <div className="gh-search-area">
            <div className="gh-search-icon" onClick={() => setSearchActive(!searchActive)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <input 
              type="text" 
              className={`gh-search-input ${searchActive ? 'active' : ''}`}
              placeholder="Search"
              onBlur={() => setSearchActive(false)}
              autoFocus={searchActive}
            />
          </div>
          
          <div className="gh-actions">
            <div className="gh-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="gh-action-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="gh-divider"></div>
            
            <div className="gh-tenant-btn">
              <span className="gh-tenant-name">Tenant XYZ</span>
              <svg className="gh-tenant-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Body with Sidebar and Content */}
        <div className="gh-body">
          <div className={`gh-sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
            <div className="gh-sidebar-top">
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              
              <div className="gh-sidebar-divider"></div>
              
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
              <div className="gh-sidebar-item">
                <div className="gh-sidebar-icon"></div>
                {sidebarExpanded && <div className="gh-sidebar-item-label"></div>}
              </div>
            </div>
            
            <div className="gh-sidebar-bottom">
              <div className="gh-user-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2.5 10c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              
              
            </div>
          </div>
          
          <div className="gh-content">
            <div className="content-placeholder">
              <div className="content-bar long"></div>
              <div className="content-bar medium"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}