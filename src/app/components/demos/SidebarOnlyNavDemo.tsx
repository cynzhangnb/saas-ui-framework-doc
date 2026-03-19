import { useState } from 'react';

type DomainId = 'nv' | 'auto' | 'dd' | 'ai';

interface DomainItem {
  label: string;
  hasMore?: boolean;
}

interface Domain {
  name: string;
  color: string;
  items: DomainItem[];
}

const intentChildren = ['Intent Manager', 'Intent Scheduler', 'Golden Intent'];

const domainData: Record<DomainId, Domain> = {
  nv: { name: 'Network Visibility', color: '#378ADD', items: [{ label: 'Network' }, { label: 'Path' }, { label: 'Inventory' }] },
  auto: { name: 'Automation', color: '#1D9E75', items: [{ label: 'Intent', hasMore: true }, { label: 'Runbook' }, { label: 'ADT' }] },
  dd: { name: 'Data & Discovery', color: '#D85A30', items: [{ label: 'Discovery' }, { label: 'Benchmark' }] },
  ai: { name: 'AI', color: '#7F77DD', items: [{ label: 'Deep Diagnosis' }, { label: 'AI Bot' }, { label: 'AI Insight' }, { label: 'AI Document' }] }
};

export function SidebarOnlyNavDemo() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openDomains, setOpenDomains] = useState<Record<DomainId, boolean>>({
    nv: true,
    auto: true,
    dd: true,
    ai: true
  });
  const [activePage, setActivePage] = useState('Home');
  const [activeDomain, setActiveDomain] = useState('');
  const [breadcrumb, setBreadcrumb] = useState('');
  const [hint, setHint] = useState('Click domain sections to navigate — click ‹ icon to collapse');
  
  // Flyout state
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [flyoutDomain, setFlyoutDomain] = useState<DomainId | null>(null);
  const [flyoutLevel2Open, setFlyoutLevel2Open] = useState(false);
  const [flyoutLevel2Parent, setFlyoutLevel2Parent] = useState('');
  
  // Intent flyout (expanded mode)
  const [intentFlyoutOpen, setIntentFlyoutOpen] = useState(false);
  
  // App switcher
  const [appFlyoutOpen, setAppFlyoutOpen] = useState(false);
  
  // Tooltip state
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const expandSidebar = () => {
    setIsExpanded(true);
    setFlyoutOpen(false);
    setIntentFlyoutOpen(false);
    setAppFlyoutOpen(false);
    // Open all domains
    setOpenDomains({ nv: true, auto: true, dd: true, ai: true });
    setHint('Click domain sections to navigate — click ‹ icon to collapse');
  };

  const collapseSidebar = () => {
    setIsExpanded(false);
    setFlyoutOpen(false);
    setIntentFlyoutOpen(false);
    setAppFlyoutOpen(false);
    // Close all domains
    setOpenDomains({ nv: false, auto: false, dd: false, ai: false });
    setHint('Click the blue logo to expand — or click a domain icon to open flyout');
  };

  const handleLogoClick = () => {
    if (!isExpanded) {
      expandSidebar();
    }
  };

  const handleDomainClick = (id: DomainId) => {
    setAppFlyoutOpen(false);
    setIntentFlyoutOpen(false);
    
    if (isExpanded) {
      // Toggle domain expansion
      setOpenDomains(prev => ({ ...prev, [id]: !prev[id] }));
    } else {
      // Show flyout
      setActiveDomain(id);
      setFlyoutDomain(id);
      setFlyoutOpen(true);
      setFlyoutLevel2Open(false);
    }
  };

  const handleIntentClick = () => {
    if (!isExpanded) return;
    setIntentFlyoutOpen(!intentFlyoutOpen);
  };

  const navigate = (page: string, domain?: string, noBC?: boolean) => {
    setActivePage(page);
    setActiveDomain(domain || '');
    setBreadcrumb(!noBC && domain ? `${domain}  ›  ${page}` : '');
    setHint(`Viewing: ${page}`);
  };

  const directNav = (page: string, domain?: string, noBC?: boolean) => {
    setFlyoutOpen(false);
    setIntentFlyoutOpen(false);
    setAppFlyoutOpen(false);
    navigate(page, domain, noBC);
  };

  const showLevel2 = (parentLabel: string) => {
    setFlyoutLevel2Parent(parentLabel);
    setFlyoutLevel2Open(true);
  };

  const flyoutGoBack = () => {
    setFlyoutLevel2Open(false);
  };
  
  const handleIconHover = (e: React.MouseEvent, label: string) => {
    if (!isExpanded) {
      const iconRect = e.currentTarget.getBoundingClientRect();
      const wrapRect = (e.currentTarget.closest('.sidebar-demo-wrap') as HTMLElement)?.getBoundingClientRect();
      if (wrapRect) {
        setTooltipText(label);
        setTooltipPos({ 
          x: iconRect.right - wrapRect.left + 8, 
          y: iconRect.top - wrapRect.top + iconRect.height / 2 - 12 
        });
      }
    }
  };
  
  const handleIconLeave = () => {
    setTooltipText('');
  };

  return (
    <div className="w-full h-full flex items-center justify-start bg-white sidebar-demo-container">
      <style>{`
        .sidebar-demo-wrap {
          display: flex;
          height: 560px;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 12px;
          overflow: hidden;
          user-select: none;
          position: relative;
          width: 100%;
          max-width: 920px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.1);
          background: #fff;
        }
        
        .sidebar-demo {
          display: flex;
          flex-direction: column;
          background: #F9FAFB;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          flex-shrink: 0;
          width: 44px;
          overflow: hidden;
          transition: width 0.22s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          z-index: 20;
        }
        .sidebar-demo.expanded {
          width: 220px;
        }
        
        .sidebar-top {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 13px;
          gap: 9px;
          flex-shrink: 0;
        }
        
        .app-logo {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #378ADD;
          flex-shrink: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }
        
        .app-name-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          flex: 1;
          opacity: 0;
          transition: opacity 0.12s;
          white-space: nowrap;
          overflow: hidden;
          min-width: 0;
        }
        .sidebar-demo.expanded .app-name-btn {
          opacity: 1;
        }
        
        .app-name-text {
          font-size: 12px;
          font-weight: 400;
          color: #1a1a1a;
          white-space: nowrap;
        }
        
        .app-caret {
          color: #999;
          flex-shrink: 0;
        }
        
        .collapse-btn {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.12s;
          margin-left: auto;
        }
        .sidebar-demo.expanded .collapse-btn {
          opacity: 1;
        }
        .collapse-btn:hover {
          background: rgba(0,0,0,0.06);
          color: #1a1a1a;
        }
        
        .sidebar-quick {
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          padding: 4px 0;
          flex-shrink: 0;
        }
        
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px 0;
          scrollbar-width: auto;
        }
        .sidebar-nav::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-nav::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.18);
          border-radius: 4px;
        }
        .sidebar-nav:hover::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.28);
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          height: 34px;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          padding: 0 13px;
          gap: 10px;
        }
        .nav-item:hover {
          background: rgba(0,0,0,0.04);
        }
        .nav-item.active {
          background: rgba(0,0,0,0.06);
        }
        
        .nav-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          flex-shrink: 0;
          background: #9ca3af;
          opacity: 0.6;
        }
        
        .nav-label {
          font-size: 13px;
          color: #555;
          opacity: 0;
          transition: opacity 0.12s;
          white-space: nowrap;
          overflow: hidden;
        }
        .sidebar-demo.expanded .nav-label {
          opacity: 1;
        }
        
        .domain-row {
          display: flex;
          align-items: center;
          height: 34px;
          padding: 0 13px;
          gap: 10px;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }
        .domain-row:hover {
          background: rgba(0,0,0,0.04);
        }
        .domain-row.active {
          background: rgba(0,0,0,0.06);
        }
        
        .domain-icon {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          flex-shrink: 0;
          opacity: 0.45;
          background: #6b7280;
        }
        
        .domain-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #999;
          opacity: 0;
          transition: opacity 0.12s;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
        }
        .sidebar-demo.expanded .domain-label {
          opacity: 1;
        }
        
        .domain-chev {
          flex-shrink: 0;
          color: #999;
          opacity: 0;
          transition: opacity 0.12s, transform 0.2s;
          margin-left: auto;
        }
        .sidebar-demo.expanded .domain-chev {
          opacity: 1;
        }
        .domain-chev.open {
          transform: rotate(90deg);
        }
        
        .domain-children {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.22s ease;
        }
        .domain-children.open {
          max-height: 300px;
        }
        
        .child-item {
          display: flex;
          align-items: center;
          height: 30px;
          padding: 0 13px 0 40px;
          cursor: pointer;
          flex-shrink: 0;
        }
        .child-item:hover {
          background: rgba(0,0,0,0.04);
        }
        .child-item.active {
          background: rgba(0,0,0,0.06);
        }
        
        .child-label {
          font-size: 13px;
          color: #555;
          opacity: 0;
          transition: opacity 0.12s;
          white-space: nowrap;
          flex: 1;
        }
        .sidebar-demo.expanded .child-label {
          opacity: 1;
        }
        
        .child-has-more-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6b7280;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.12s;
          margin-left: auto;
        }
        .sidebar-demo.expanded .child-has-more-dot {
          opacity: 0.55;
        }
        
        .sidebar-bottom {
          border-top: 0.5px solid rgba(0,0,0,0.1);
          flex-shrink: 0;
          padding: 6px 0;
        }
        
        .util-collapsed {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .sidebar-demo.expanded .util-collapsed {
          display: none;
        }
        
        .util-expanded {
          display: none;
          align-items: center;
          padding: 0 13px;
          gap: 4px;
        }
        .sidebar-demo.expanded .util-expanded {
          display: flex;
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
          background: rgba(0,0,0,0.06);
          color: #1a1a1a;
        }
        
        .flyout {
          position: absolute;
          left: 44px;
          top: 0;
          bottom: 0;
          width: 210px;
          background: #fff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          z-index: 15;
          transform: translateX(-210px);
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .flyout.open {
          transform: translateX(0);
        }
        
        .flyout-header {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
          flex-shrink: 0;
        }
        
        .flyout-back-btn {
          display: none;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: #555;
          padding: 4px 6px 4px 2px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .flyout-back-btn:hover {
          background: #f5f5f5;
        }
        .flyout-back-btn.visible {
          display: flex;
        }
        
        .flyout-icon {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          flex-shrink: 0;
          margin-right: 8px;
        }
        
        .flyout-name {
          font-size: 12px;
          font-weight: 500;
          color: #1a1a1a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }
        
        .flyout-close {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
          flex-shrink: 0;
          margin-left: auto;
        }
        .flyout-close:hover {
          background: #f5f5f5;
        }
        
        .flyout-panels {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        
        .flyout-panel {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto;
          padding: 6px 0;
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease;
        }
        .flyout-panel.active {
          transform: translateX(0);
          opacity: 1;
        }
        .flyout-panel.left {
          transform: translateX(-100%);
          opacity: 0;
          pointer-events: none;
        }
        .flyout-panel.right {
          transform: translateX(100%);
          opacity: 0;
          pointer-events: none;
        }
        
        .f-item {
          display: flex;
          align-items: center;
          height: 32px;
          padding: 0 14px;
          cursor: pointer;
          font-size: 13px;
          color: #555;
        }
        .f-item:hover {
          background: #f5f5f5;
          color: #1a1a1a;
        }
        .f-item.has-more {
          justify-content: space-between;
        }
        
        .f-more-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.5;
        }
        
        .intent-flyout {
          position: absolute;
          left: 220px;
          top: 0;
          bottom: 0;
          width: 200px;
          background: #fff;
          border-right: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          z-index: 14;
          transform: translateX(-200px);
          opacity: 0;
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1), opacity 0.18s ease;
          pointer-events: none;
          box-shadow: 4px 0 8px rgba(0,0,0,0.06);
          margin-left: -1px;
        }
        .intent-flyout.open {
          transform: translateX(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .intent-flyout-header {
          height: 44px;
          border-bottom: 0.5px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 14px;
          flex-shrink: 0;
        }
        
        .intent-flyout-name {
          font-size: 12px;
          font-weight: 500;
          color: #1a1a1a;
          flex: 1;
        }
        
        .intent-flyout-close {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #999;
        }
        .intent-flyout-close:hover {
          background: #f5f5f5;
        }
        
        .intent-flyout-body {
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
        
        .app-flyout {
          position: absolute;
          left: 13px;
          top: 44px;
          width: 210px;
          background: #fff;
          border: 0.5px solid rgba(0,0,0,0.18);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          z-index: 40;
          transform: translateY(-6px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.15s ease, opacity 0.15s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .app-flyout.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .app-flyout-header {
          padding: 10px 14px 6px;
          font-size: 10px;
          font-weight: 500;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        
        .app-flyout-item {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 38px;
          padding: 0 14px;
          cursor: default;
        }
        .app-flyout-item:hover {
          background: #f5f5f5;
        }
        .app-flyout-item.active {
          background: #f5f5f5;
        }
        
        .app-dot {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          flex-shrink: 0;
        }
        
        .app-name {
          font-size: 13px;
          color: #1a1a1a;
        }
        
        .workspace {
          flex: 1;
          background: #fff;
          display: flex;
          flex-direction: column;
          padding: 16px 24px 24px;
          gap: 10px;
          overflow: hidden;
        }
        
        .ws-breadcrumb {
          font-size: 11px;
          color: #999;
          min-height: 16px;
        }
        
        .ws-title {
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          min-height: 22px;
        }
        
        .ws-block {
          background: #e8eaed;
          border-radius: 4px;
          flex-shrink: 0;
        }
        
        .ws-hint {
          font-size: 11px;
          color: #999;
          margin-top: auto;
          padding-top: 8px;
          border-top: 0.5px solid rgba(0,0,0,0.1);
        }
        
        .tooltip {
          position: absolute;
          background: #333;
          color: #fff;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          pointer-events: none;
          z-index: 50;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .tooltip.visible {
          opacity: 1;
        }
      `}</style>
      
      <div className="sidebar-demo-wrap">
        <div className={`sidebar-demo ${isExpanded ? 'expanded' : ''}`}>
          <div className="sidebar-top">
            <div className="app-logo" onClick={handleLogoClick}>N</div>
            <div className="app-name-btn" onClick={() => setAppFlyoutOpen(!appFlyoutOpen)}>
              <span className="app-name-text">ACME NetOps</span>
              <svg className="app-caret" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="collapse-btn" onClick={collapseSidebar} title="Collapse sidebar">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8.5 4.5L6 7L8.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="sidebar-quick">
            <div className={`nav-item ${activePage === 'Home' ? 'active' : ''}`} onClick={() => directNav('Home', '', true)}>
              <div className="nav-icon"></div>
              <span className="nav-label">Home</span>
            </div>
            <div className={`nav-item ${activePage === 'Recent' ? 'active' : ''}`} onClick={() => directNav('Recent', '', true)}>
              <div className="nav-icon"></div>
              <span className="nav-label">Recent</span>
            </div>
            <div className={`nav-item ${activePage === 'Notification' ? 'active' : ''}`} onClick={() => directNav('Notification', '', true)}>
              <div className="nav-icon"></div>
              <span className="nav-label">Notification</span>
            </div>
          </div>
          
          <div className="sidebar-nav">
            {/* Network Visibility */}
            <div>
              <div 
                className={`domain-row ${!isExpanded && activeDomain === 'nv' ? 'active' : ''}`} 
                onClick={() => handleDomainClick('nv')}
                onMouseEnter={(e) => handleIconHover(e, 'Network Visibility')}
                onMouseLeave={handleIconLeave}
              >
                <div className="domain-icon"></div>
                <span className="domain-label">Network Visibility</span>
                <svg className={`domain-chev ${openDomains.nv ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`domain-children ${openDomains.nv ? 'open' : ''}`}>
                <div className={`child-item ${activePage === 'Network' ? 'active' : ''}`} onClick={() => directNav('Network', 'Network Visibility')}>
                  <span className="child-label">Network</span>
                </div>
                <div className={`child-item ${activePage === 'Path' ? 'active' : ''}`} onClick={() => directNav('Path', 'Network Visibility')}>
                  <span className="child-label">Path</span>
                </div>
                <div className={`child-item ${activePage === 'Inventory' ? 'active' : ''}`} onClick={() => directNav('Inventory', 'Network Visibility')}>
                  <span className="child-label">Inventory</span>
                </div>
              </div>
            </div>
            
            {/* Automation */}
            <div>
              <div 
                className={`domain-row ${!isExpanded && activeDomain === 'auto' ? 'active' : ''}`} 
                onClick={() => handleDomainClick('auto')}
                onMouseEnter={(e) => handleIconHover(e, 'Automation')}
                onMouseLeave={handleIconLeave}
              >
                <div className="domain-icon"></div>
                <span className="domain-label">Automation</span>
                <svg className={`domain-chev ${openDomains.auto ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`domain-children ${openDomains.auto ? 'open' : ''}`}>
                <div className={`child-item ${activePage === 'Intent' || intentChildren.includes(activePage) ? 'active' : ''}`} onClick={handleIntentClick}>
                  <span className="child-label">Intent</span>
                  <div className="child-has-more-dot"></div>
                </div>
                <div className={`child-item ${activePage === 'Runbook' ? 'active' : ''}`} onClick={() => directNav('Runbook', 'Automation')}>
                  <span className="child-label">Runbook</span>
                </div>
                <div className={`child-item ${activePage === 'ADT' ? 'active' : ''}`} onClick={() => directNav('ADT', 'Automation')}>
                  <span className="child-label">ADT</span>
                </div>
              </div>
            </div>
            
            {/* Data & Discovery */}
            <div>
              <div 
                className={`domain-row ${!isExpanded && activeDomain === 'dd' ? 'active' : ''}`} 
                onClick={() => handleDomainClick('dd')}
                onMouseEnter={(e) => handleIconHover(e, 'Data & Discovery')}
                onMouseLeave={handleIconLeave}
              >
                <div className="domain-icon"></div>
                <span className="domain-label">Data & Discovery</span>
                <svg className={`domain-chev ${openDomains.dd ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`domain-children ${openDomains.dd ? 'open' : ''}`}>
                <div className={`child-item ${activePage === 'Discovery' ? 'active' : ''}`} onClick={() => directNav('Discovery', 'Data & Discovery')}>
                  <span className="child-label">Discovery</span>
                </div>
                <div className={`child-item ${activePage === 'Benchmark' ? 'active' : ''}`} onClick={() => directNav('Benchmark', 'Data & Discovery')}>
                  <span className="child-label">Benchmark</span>
                </div>
              </div>
            </div>
            
            {/* AI */}
            <div>
              <div 
                className={`domain-row ${!isExpanded && activeDomain === 'ai' ? 'active' : ''}`} 
                onClick={() => handleDomainClick('ai')}
                onMouseEnter={(e) => handleIconHover(e, 'AI')}
                onMouseLeave={handleIconLeave}
              >
                <div className="domain-icon"></div>
                <span className="domain-label">AI</span>
                <svg className={`domain-chev ${openDomains.ai ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`domain-children ${openDomains.ai ? 'open' : ''}`}>
                <div className={`child-item ${activePage === 'Deep Diagnosis' ? 'active' : ''}`} onClick={() => directNav('Deep Diagnosis', 'AI')}>
                  <span className="child-label">Deep Diagnosis</span>
                </div>
                <div className={`child-item ${activePage === 'AI Bot' ? 'active' : ''}`} onClick={() => directNav('AI Bot', 'AI')}>
                  <span className="child-label">AI Bot</span>
                </div>
                <div className={`child-item ${activePage === 'AI Insight' ? 'active' : ''}`} onClick={() => directNav('AI Insight', 'AI')}>
                  <span className="child-label">AI Insight</span>
                </div>
                <div className={`child-item ${activePage === 'AI Document' ? 'active' : ''}`} onClick={() => directNav('AI Document', 'AI')}>
                  <span className="child-label">AI Document</span>
                </div>
              </div>
            </div>
            
            {/* Assessment */}
            <div>
              <div 
                className={`domain-row ${activePage === 'Assessment' ? 'active' : ''}`} 
                onClick={() => directNav('Assessment', '')}
                onMouseEnter={(e) => handleIconHover(e, 'Assessment')}
                onMouseLeave={handleIconLeave}
              >
                <div className="domain-icon"></div>
                <span className="domain-label">Assessment</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar-bottom">
            {/* Collapsed: vertical icons */}
            <div className="util-collapsed">
              <div 
                className="util-btn"
                onMouseEnter={(e) => handleIconHover(e, 'Profile')}
                onMouseLeave={handleIconLeave}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 12c0-2.8 2.5-4.5 5.5-4.5s5.5 1.7 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div 
                className="util-btn"
                onMouseEnter={(e) => handleIconHover(e, 'Settings')}
                onMouseLeave={handleIconLeave}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 1.5V3M7 11v1.5M1.5 7H3M11 7h1.5M3.3 3.3l1 1M9.7 9.7l1 1M3.3 10.7l1-1M9.7 4.3l1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div 
                className="util-btn"
                onMouseEnter={(e) => handleIconHover(e, 'Help')}
                onMouseLeave={handleIconLeave}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            {/* Expanded: horizontal row */}
            <div className="util-expanded">
              <div className="util-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 12c0-2.8 2.5-4.5 5.5-4.5s5.5 1.7 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="util-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 1.5V3M7 11v1.5M1.5 7H3M11 7h1.5M3.3 3.3l1 1M9.7 9.7l1 1M3.3 10.7l1-1M9.7 4.3l1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="util-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="7" cy="10.2" r="0.6" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Collapsed flyout */}
        <div className={`flyout ${flyoutOpen ? 'open' : ''}`}>
          <div className="flyout-header">
            <div className={`flyout-back-btn ${flyoutLevel2Open ? 'visible' : ''}`} onClick={flyoutGoBack}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M7 2L3 5L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{flyoutLevel2Parent}</span>
            </div>
            {!flyoutLevel2Open && flyoutDomain && (
              <>
                <div className="flyout-icon" style={{ background: domainData[flyoutDomain].color }}></div>
                <span className="flyout-name">{domainData[flyoutDomain].name}</span>
              </>
            )}
            <div className="flyout-close" onClick={() => setFlyoutOpen(false)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="flyout-panels">
            {/* Level 1 Panel */}
            <div className={`flyout-panel ${!flyoutLevel2Open ? 'active' : 'left'}`}>
              {flyoutDomain && domainData[flyoutDomain].items.map((item, idx) => (
                item.hasMore ? (
                  <div key={idx} className="f-item has-more" onClick={() => showLevel2(item.label)}>
                    <span>{item.label}</span>
                    <div className="f-more-dot" style={{ background: domainData[flyoutDomain].color }}></div>
                  </div>
                ) : (
                  <div key={idx} className="f-item" onClick={() => { directNav(item.label, flyoutDomain && domainData[flyoutDomain].name); setFlyoutOpen(false); }}>
                    {item.label}
                  </div>
                )
              ))}
            </div>
            
            {/* Level 2 Panel */}
            <div className={`flyout-panel ${flyoutLevel2Open ? 'active' : 'right'}`}>
              {intentChildren.map((child, idx) => (
                <div key={idx} className="f-item" onClick={() => { directNav(child, flyoutLevel2Parent); setFlyoutOpen(false); }}>
                  {child}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Intent flyout (expanded mode) */}
        <div className={`intent-flyout ${intentFlyoutOpen ? 'open' : ''}`}>
          <div className="intent-flyout-header">
            <span className="intent-flyout-name">Intent</span>
            <div className="intent-flyout-close" onClick={() => setIntentFlyoutOpen(false)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="intent-flyout-body">
            {intentChildren.map((child, idx) => (
              <div key={idx} className="if-item" onClick={() => directNav(child, 'Intent')}>
                {child}
              </div>
            ))}
          </div>
        </div>
        
        {/* App switcher */}
        <div className={`app-flyout ${appFlyoutOpen ? 'open' : ''}`}>
          <div className="app-flyout-header">Applications</div>
          <div className="app-flyout-item active">
            <div className="app-dot" style={{ background: '#378ADD' }}></div>
            <span className="app-name">ACME NetOps</span>
          </div>
          <div className="app-flyout-item">
            <div className="app-dot" style={{ background: '#7c3aed' }}></div>
            <span className="app-name">Domain Manager</span>
          </div>
          <div className="app-flyout-item">
            <div className="app-dot" style={{ background: '#059669' }}></div>
            <span className="app-name">SaaS Manager</span>
          </div>
          <div className="app-flyout-item">
            <div className="app-dot" style={{ background: '#dc2626' }}></div>
            <span className="app-name">AI Studio</span>
          </div>
        </div>
        
        {/* Workspace */}
        <div className="workspace">
          <div className="ws-breadcrumb">{breadcrumb}</div>
          <div className="ws-title">{activePage || 'Select a page'}</div>
          <div className="ws-block" style={{ height: '10px', width: '42%' }}></div>
          <div className="ws-block" style={{ height: '10px', width: '58%' }}></div>
          <div className="ws-block" style={{ height: '10px', width: '76%' }}></div>
          <div className="ws-block" style={{ height: '10px', width: '63%' }}></div>
          <div className="ws-block" style={{ height: '10px', width: '50%' }}></div>
          
        </div>
        
        {/* Tooltip */}
        <div className={`tooltip ${tooltipText ? 'visible' : ''}`} style={{ left: tooltipPos.x, top: tooltipPos.y }}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
}