import { useState } from 'react';

type NavMode = 'docked' | 'overlay' | 'hidden';

export function HeaderSidebarNavDemo() {
  const [mode, setMode] = useState<NavMode>('docked');
  const [preferOverlay, setPreferOverlay] = useState(false);
  const [openDomains, setOpenDomains] = useState({
    nv: true,
    auto: true,
    disc: true,
    ai: true,
  });
  const [activePage, setActivePage] = useState('Home');
  const [breadcrumb, setBreadcrumb] = useState('');
  const [showIntentFlyout, setShowIntentFlyout] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);

  const toggleDomain = (domain: string) => {
    setOpenDomains(prev => ({ ...prev, [domain]: !prev[domain] }));
  };

  const handleNavigation = (page: string, parent?: string) => {
    setActivePage(page);
    setBreadcrumb(parent ? `${parent} › ${page}` : '');
    setShowIntentFlyout(false);
    if (mode === 'overlay') {
      setTimeout(() => setMode('hidden'), 220);
    }
  };

  const handleHamburger = () => {
    if (mode === 'hidden') {
      setMode(preferOverlay ? 'overlay' : 'docked');
    } else if (mode === 'overlay') {
      setMode('hidden');
    }
  };

  const handlePinClick = () => {
    if (mode === 'overlay') {
      setMode('docked');
      setPreferOverlay(false);
    } else if (mode === 'docked') {
      setMode('hidden');
      setPreferOverlay(true);
    }
  };

  const modeLabels = {
    docked: 'Docked',
    overlay: 'Overlay',
    hidden: 'Hidden',
  };

  return (
    <div className="w-full h-full flex items-center justify-start bg-white">
      <style>{`
        .header-nav-shell {
          display: flex;
          height: 580px;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #ffffff;
          width: 100%;
          max-width: 920px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.1);
        }
        
        .hn-sidebar {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 240px;
          z-index: 50;
          background: #ffffff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          transform: translateX(-241px);
          transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .hn-sidebar.open {
          transform: translateX(0);
          box-shadow: 4px 0 20px rgba(0,0,0,0.08);
        }
        .hn-sidebar.docked {
          position: relative;
          transform: translateX(0);
          box-shadow: none;
          flex-shrink: 0;
        }
        
        .sb-hdr {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
          flex-shrink: 0;
        }
        
        .sb-close-first {
          margin-right: 4px;
          order: -1;
        }
        
        .sb-app-dot {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #378ADD;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0;
        }
        
        .sb-app-name-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          cursor: pointer;
          overflow: hidden;
          padding: 3px 4px;
          border-radius: 5px;
          min-width: 0;
        }
        .sb-app-name-btn:hover {
          background: #f5f5f5;
        }
        
        .sb-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .sb-app-caret {
          color: #999;
          flex-shrink: 0;
        }
        
        .sb-ctrls {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
          margin-left: auto;
        }
        
        .sb-ctrl {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .sb-ctrl:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        .sb-ctrl.pinned {
          color: #1a6bc4;
        }
        
        .sb-quick {
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          padding: 4px 0;
          flex-shrink: 0;
        }
        
        .sb-nav {
          flex: 1;
          overflow-y: auto;
          padding: 6px 0;
          scrollbar-width: none;
        }
        .sb-nav::-webkit-scrollbar {
          display: none;
        }
        
        .sb-item {
          display: flex;
          align-items: center;
          height: 36px;
          padding: 0 13px;
          gap: 10px;
          cursor: pointer;
        }
        .sb-item:hover {
          background: #f5f5f5;
        }
        .sb-item.active {
          background: #f5f5f5;
        }
        
        .sb-item-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #9ca3af;
          opacity: 0.5;
          flex-shrink: 0;
        }
        
        .sb-item-lbl {
          font-size: 13px;
          color: #555;
        }
        
        .sb-domain-hdr {
          display: flex;
          align-items: center;
          height: 36px;
          padding: 0 13px;
          gap: 10px;
          cursor: pointer;
        }
        .sb-domain-hdr:hover {
          background: #f5f5f5;
        }
        
        .sb-domain-icon {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          flex-shrink: 0;
        }
        
        .sb-domain-lbl {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #999;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
        }
        
        .sb-domain-chev {
          font-size: 10px;
          color: #999;
          transition: transform 0.18s;
          opacity: 0.6;
        }
        .sb-domain-chev.open {
          transform: rotate(90deg);
        }
        
        .sb-domain-ch {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.2s ease;
        }
        .sb-domain-ch.open {
          max-height: 300px;
        }
        
        .sb-child {
          display: flex;
          align-items: center;
          height: 34px;
          padding: 0 13px 0 41px;
          cursor: pointer;
        }
        .sb-child:hover {
          background: #f5f5f5;
        }
        .sb-child.active {
          background: #f5f5f5;
        }
        
        .sb-child-lbl {
          font-size: 13px;
          color: #555;
          flex: 1;
        }
        
        .sb-footer {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 6px 10px;
          gap: 2px;
          flex-shrink: 0;
        }
        
        .util-btn {
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
        .util-btn:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .intent-flyout {
          position: absolute;
          left: 240px;
          top: 0;
          bottom: 0;
          width: 200px;
          background: #ffffff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          z-index: 45;
          transform: translateX(-200px);
          opacity: 0;
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1), opacity 0.18s ease;
          pointer-events: none;
          box-shadow: 4px 0 12px rgba(0,0,0,0.07);
        }
        .intent-flyout.open {
          transform: translateX(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .if-hdr {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          flex-shrink: 0;
        }
        
        .if-hdr-name {
          font-size: 12px;
          font-weight: 500;
          color: #1a1a1a;
          flex: 1;
        }
        
        .if-close {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .if-close:hover {
          background: #f5f5f5;
        }
        
        .if-body {
          flex: 1;
          padding: 6px 0;
        }
        
        .if-item {
          display: flex;
          align-items: center;
          height: 32px;
          padding: 0 14px;
          cursor: pointer;
          font-size: 13px;
          color: #555;
        }
        .if-item:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        
        .backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          z-index: 40;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.22s ease;
        }
        .backdrop.on {
          opacity: 1;
          pointer-events: all;
        }
        
        .hn-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-width: 0;
        }
        
        .hn-hdr {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          flex-shrink: 0;
          background: #ffffff;
        }
        
        .hdr-hamburger {
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
        .hdr-hamburger:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        .hdr-hamburger.docked-hidden {
          display: none;
        }
        
        .hdr-app-section {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-left: -8px;
        }
        
        .hdr-app-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          padding: 3px 7px;
          border-radius: 6px;
        }
        .hdr-app-btn:hover {
          background: #f5f5f5;
        }
        
        .hdr-app-dot {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #378ADD;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        
        .hdr-app-name {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
        }
        
        .hdr-app-caret {
          color: #999;
        }
        
        .hdr-sep {
          width: 0.5px;
          height: 20px;
          background: rgba(0,0,0,0.1);
          margin: 0 4px;
          flex-shrink: 0;
        }
        
        .hdr-page {
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .hdr-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .hdr-btn {
          width: 26px;
          height: 26px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .hdr-btn:hover {
          background: #f5f5f5;
        }
        
        .hdr-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #e8f1fb;
          color: #1a6bc4;
          font-size: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hdr-tenant-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          position: relative;
        }
        .hdr-tenant-btn:hover {
          background: #f5f5f5;
        }
        
        .hdr-tenant-name {
          font-size: 12px;
          color: #1a1a1a;
          font-weight: 400;
        }
        
        .hdr-tenant-caret {
          color: #999;
        }
        
        .hn-workspace {
          flex: 1;
          background: #ffffff;
          overflow: auto;
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .ws-pagetitle {
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
        }
        
        .sil {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        
        .state-chip {
          display: inline-block;
          font-size: 11px;
          padding: 2px 10px;
          border-radius: 10px;
          background: #f5f5f5;
          color: #555;
          border: 0.5px solid rgba(0,0,0,0.1);
        }
        
        .app-menu {
          position: absolute;
          left: 12px;
          top: 44px;
          width: 210px;
          background: #fff;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          z-index: 60;
          transform: translateY(-6px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.15s ease, opacity 0.15s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .app-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .app-menu-header {
          padding: 10px 14px 6px;
          font-size: 10px;
          font-weight: 500;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        
        .app-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 38px;
          padding: 0 14px;
          cursor: default;
        }
        .app-menu-item:hover {
          background: #f5f5f5;
        }
        .app-menu-item.active {
          background: #f5f5f5;
        }
        
        .app-menu-dot {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          flex-shrink: 0;
        }
        
        .app-menu-name {
          font-size: 13px;
          color: #1a1a1a;
        }
      `}</style>
      
      <div className="header-nav-shell">
        <div className={`hn-sidebar ${mode === 'docked' ? 'docked' : ''} ${mode === 'overlay' ? 'open' : ''}`}>
          <div className="sb-hdr">
            {mode === 'overlay' ? (
              <>
                {/* Overlay mode: X icon first, then logo, then pin icon on the right */}
                <div className="sb-ctrl" onClick={() => setMode('hidden')} title="Close">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="sb-app-dot">N</div>
                <div className="sb-app-name-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
                  <span className="sb-app-name" style={{ fontSize: '12px', fontWeight: 400 }}>ACME NetOps</span>
                  <svg className="sb-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="sb-ctrls">
                  <div 
                    className="sb-ctrl" 
                    onClick={handlePinClick} 
                    title="Pin sidebar"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <line x1="4" y1="1.5" x2="4" y2="10.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Docked mode: logo first, then pin and X icons on the right */}
                <div className="sb-app-dot">N</div>
                <div className="sb-app-name-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
                  <span className="sb-app-name">ACME NetOps</span>
                  <svg className="sb-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="sb-ctrls">
                  <div 
                    className={`sb-ctrl ${mode === 'docked' ? 'pinned' : ''}`} 
                    onClick={handlePinClick} 
                    title={mode === 'docked' ? 'Unpin sidebar' : 'Close sidebar'}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <line x1="4" y1="1.5" x2="4" y2="10.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div className="sb-ctrl" onClick={() => setMode('hidden')} title="Close">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="sb-quick">
            <div className={`sb-item ${activePage === 'Home' ? 'active' : ''}`} onClick={() => handleNavigation('Home')}>
              <div className="sb-item-icon"></div>
              <span className="sb-item-lbl">Home</span>
            </div>
            <div className={`sb-item ${activePage === 'Recent' ? 'active' : ''}`} onClick={() => handleNavigation('Recent')}>
              <div className="sb-item-icon"></div>
              <span className="sb-item-lbl">Recent</span>
            </div>
            <div className={`sb-item ${activePage === 'Starred' ? 'active' : ''}`} onClick={() => handleNavigation('Starred')}>
              <div className="sb-item-icon"></div>
              <span className="sb-item-lbl">Starred</span>
            </div>
          </div>
          
          <div className="sb-nav">
            <div>
              <div className="sb-domain-hdr" onClick={() => toggleDomain('nv')}>
                <div className="sb-domain-icon" style={{ background: '#6b7280', opacity: 0.45 }}></div>
                <span className="sb-domain-lbl">Network Visibility</span>
                <span className={`sb-domain-chev ${openDomains.nv ? 'open' : ''}`}>›</span>
              </div>
              <div className={`sb-domain-ch ${openDomains.nv ? 'open' : ''}`}>
                <div className={`sb-child ${activePage === 'Network' ? 'active' : ''}`} onClick={() => handleNavigation('Network', 'Network Visibility')}>
                  <span className="sb-child-lbl">Network</span>
                </div>
                <div className={`sb-child ${activePage === 'Path' ? 'active' : ''}`} onClick={() => handleNavigation('Path', 'Network Visibility')}>
                  <span className="sb-child-lbl">Path</span>
                </div>
                <div className={`sb-child ${activePage === 'Inventory' ? 'active' : ''}`} onClick={() => handleNavigation('Inventory', 'Network Visibility')}>
                  <span className="sb-child-lbl">Inventory</span>
                </div>
                
              </div>
            </div>
            
            <div>
              <div className="sb-domain-hdr" onClick={() => toggleDomain('auto')}>
                <div className="sb-domain-icon" style={{ background: '#6b7280', opacity: 0.45 }}></div>
                <span className="sb-domain-lbl">Automation</span>
                <span className={`sb-domain-chev ${openDomains.auto ? 'open' : ''}`}>›</span>
              </div>
              <div className={`sb-domain-ch ${openDomains.auto ? 'open' : ''}`}>
                <div className={`sb-child ${activePage === 'Intent' ? 'active' : ''}`} onClick={() => setShowIntentFlyout(!showIntentFlyout)}>
                  <span className="sb-child-lbl">Intent</span>
                </div>
                <div className={`sb-child ${activePage === 'Runbook' ? 'active' : ''}`} onClick={() => handleNavigation('Runbook', 'Automation')}>
                  <span className="sb-child-lbl">Runbook</span>
                </div>
                <div className={`sb-child ${activePage === 'ADT' ? 'active' : ''}`} onClick={() => handleNavigation('ADT', 'Automation')}>
                  <span className="sb-child-lbl">ADT</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="sb-domain-hdr" onClick={() => toggleDomain('disc')}>
                <div className="sb-domain-icon" style={{ background: '#6b7280', opacity: 0.45 }}></div>
                <span className="sb-domain-lbl">Data & Discovery</span>
                <span className={`sb-domain-chev ${openDomains.disc ? 'open' : ''}`}>›</span>
              </div>
              <div className={`sb-domain-ch ${openDomains.disc ? 'open' : ''}`}>
                <div className={`sb-child ${activePage === 'Discovery' ? 'active' : ''}`} onClick={() => handleNavigation('Discovery')}>
                  <span className="sb-child-lbl">Discovery</span>
                </div>
                <div className={`sb-child ${activePage === 'Benchmark' ? 'active' : ''}`} onClick={() => handleNavigation('Benchmark')}>
                  <span className="sb-child-lbl">Benchmark</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="sb-domain-hdr" onClick={() => toggleDomain('ai')}>
                <div className="sb-domain-icon" style={{ background: '#6b7280', opacity: 0.45 }}></div>
                <span className="sb-domain-lbl">AI</span>
                <span className={`sb-domain-chev ${openDomains.ai ? 'open' : ''}`}>›</span>
              </div>
              <div className={`sb-domain-ch ${openDomains.ai ? 'open' : ''}`}>
                <div className={`sb-child ${activePage === 'Deep Diagnosis' ? 'active' : ''}`} onClick={() => handleNavigation('Deep Diagnosis')}>
                  <span className="sb-child-lbl">Deep Diagnosis</span>
                </div>
                <div className={`sb-child ${activePage === 'AI Bot' ? 'active' : ''}`} onClick={() => handleNavigation('AI Bot')}>
                  <span className="sb-child-lbl">AI Bot</span>
                </div>
                <div className={`sb-child ${activePage === 'AI Insight' ? 'active' : ''}`} onClick={() => handleNavigation('AI Insight')}>
                  <span className="sb-child-lbl">AI Insight</span>
                </div>
                <div className={`sb-child ${activePage === 'AI Document' ? 'active' : ''}`} onClick={() => handleNavigation('AI Document')}>
                  <span className="sb-child-lbl">AI Document</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className={`sb-domain-hdr ${activePage === 'Assessment' ? 'active' : ''}`} onClick={() => handleNavigation('Assessment')}>
                <div className="sb-domain-icon" style={{ background: '#6b7280', opacity: 0.45 }}></div>
                <span className="sb-domain-lbl">Assessment</span>
              </div>
            </div>
          </div>
          
          
        </div>
        
        <div className={`intent-flyout ${showIntentFlyout ? 'open' : ''}`}>
          <div className="if-hdr">
            <span className="if-hdr-name">Intent</span>
            <div className="if-close" onClick={() => setShowIntentFlyout(false)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="if-body">
            <div className="if-item" onClick={() => handleNavigation('Intent Manager')}>Intent Manager</div>
            <div className="if-item" onClick={() => handleNavigation('Intent Scheduler')}>Intent Scheduler</div>
            <div className="if-item" onClick={() => handleNavigation('Golden Intent')}>Golden Intent</div>
          </div>
        </div>
        
        <div className={`backdrop ${mode === 'overlay' ? 'on' : ''}`} onClick={() => setMode('hidden')}></div>
        
        <div className={`app-menu ${showAppMenu ? 'open' : ''}`}>
          <div className="app-menu-header">Applications</div>
          <div className="app-menu-item active">
            <div className="app-menu-dot" style={{ background: '#378ADD' }}></div>
            <span className="app-menu-name">Network Operations</span>
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
        
        <div className="hn-main">
          <div className="hn-hdr">
            <div className={`hdr-hamburger ${mode === 'docked' ? 'docked-hidden' : ''}`} onClick={handleHamburger}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="3" width="10" height="1.4" rx="0.7" fill="currentColor"/>
                <rect x="2" y="6.3" width="10" height="1.4" rx="0.7" fill="currentColor"/>
                <rect x="2" y="9.6" width="10" height="1.4" rx="0.7" fill="currentColor"/>
              </svg>
            </div>
            {mode === 'hidden' && (
              <>
                <div className="hdr-app-section">
                  <div className="hdr-app-btn" onClick={() => setShowAppMenu(!showAppMenu)}>
                    <div className="hdr-app-dot">N</div>
                    <span className="hdr-app-name">ACME NetOps</span>
                    <svg className="hdr-app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="hdr-sep"></div>
                </div>
              </>
            )}
            <div className="hdr-actions">
              <div className="hdr-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              
              <div className="hdr-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="hdr-sep"></div>
              
              <div className="hdr-tenant-btn">
                <span className="hdr-tenant-name">Tenant XYZ</span>
                <svg className="hdr-tenant-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="hdr-avatar">U</div>
            </div>
          </div>
          <div className="hn-workspace">
            {(breadcrumb || activePage !== 'Home') && (
              <div className="ws-pagetitle">{breadcrumb || activePage}</div>
            )}
            <div className="sil" style={{ height: '10px', width: '48%' }}></div>
            <div className="sil" style={{ height: '10px', width: '64%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}