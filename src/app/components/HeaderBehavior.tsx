
export function HeaderBehavior() {
  return (
    <section id="header-behavior" className="mb-20 pt-20 border-t border-gray-200">
      <div className="flex items-baseline gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">06</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Header
          </h2>

          <div className="w-[70%]">
            <p className="text-sm text-gray-700 mb-12 m-0">
              Headers provide application-level or page-level context when a header-based shell layout is used. The use of a global header depends on the selected application shell model.
            </p>
          </div>

          {/* Global Header */}
          <div id="global-header" className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 m-0 p-0 mb-4">
              Global Header
            </h3>
            
            <div className="w-[70%]">
              <p className="text-sm text-gray-700 mb-3 m-0">
                The global header appears in shell layouts that include a header region.
              </p>
              
              <p className="text-sm text-gray-700 mb-3 m-0">
                It provides application-level context and global actions.
              </p>
              
              <p className="text-sm text-gray-700 mb-3 m-0">
                Typical elements may include:
              </p>
              
              <ul className="list-none space-y-2 ml-0 mb-6">
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product or application name</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Application switching</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Global actions (user, settings, help)</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 mb-8 m-0">
                The exact behavior depends on the selected application shell model.
              </p>
            </div>
            
            {/* Global Header Illustrations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '920px' }}>

              {/* Header 1: Hamburger + App Switcher style */}
              <div style={{ border: '0.5px solid rgba(0,0,0,0.18)', borderRadius: '12px', overflow: 'hidden', background: '#ffffff', boxShadow: '0 2px 24px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '44px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 14px 0 6px', gap: '2px' }}>
                  {/* Hamburger */}
                  <div style={{ width: '32px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="1.4" rx="0.7" fill="currentColor"/><rect x="2" y="6.3" width="10" height="1.4" rx="0.7" fill="currentColor"/><rect x="2" y="9.6" width="10" height="1.4" rx="0.7" fill="currentColor"/></svg>
                  </div>
                  {/* App name + caret */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '3px 7px', borderRadius: '6px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#378ADD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>N</div>
                    <span style={{ fontSize: '12px', fontWeight: 400, color: '#1a1a1a' }}>ACME NetOps</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#999' }}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {/* Divider */}
                  <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                  {/* Search */}
                  <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/><path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  </div>
                  <div style={{ flex: 1 }}/>
                  {/* Right actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L9 6L13 7L9 8L7 12L5 8L1 7L5 6L7 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="10.2" r="0.6" fill="currentColor"/></svg>
                    </div>
                    <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', color: '#1a1a1a', fontWeight: 400 }}>Tenant XYZ</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#999' }}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
                <div style={{ height: '80px', background: '#fafafa' }}/>
              </div>

              {/* Header 2: Small icon + full-height vertical separators */}
              <div style={{ border: '0.5px solid rgba(0,0,0,0.18)', borderRadius: '12px', overflow: 'hidden', background: '#ffffff', boxShadow: '0 2px 24px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '44px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'stretch' }}>
                  {/* App icon with padding */}
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px 0 12px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#378ADD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>N</div>
                  </div>
                  {/* Full-height vertical separator */}
                  <div style={{ width: '0.5px', background: 'rgba(0,0,0,0.1)', flexShrink: 0, alignSelf: 'stretch' }}/>
                  {/* App name */}
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 400, color: '#1a1a1a' }}>ACME NetOps</span>
                  </div>
                  {/* Full-height vertical separator */}
                  <div style={{ width: '0.5px', background: 'rgba(0,0,0,0.1)', flexShrink: 0, alignSelf: 'stretch' }}/>
                  {/* Search */}
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                    <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/><path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}/>
                  {/* Right actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 14px 0 0' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L9 6L13 7L9 8L7 12L5 8L1 7L5 6L7 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="10.2" r="0.6" fill="currentColor"/></svg>
                    </div>
                    <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', color: '#1a1a1a', fontWeight: 400 }}>Tenant XYZ</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#999' }}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1.5" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>
                    </div>
                  </div>
                </div>
                <div style={{ height: '80px', background: '#fafafa' }}/>
              </div>

            </div>
          </div>

          {/* Page Header */}
          <div id="page-header" className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 m-0 p-0 mb-4">
              Page Header
            </h3>
            
            <div className="w-[70%]">
              <p className="text-sm text-gray-700 mb-3 m-0">
                The page header provides context for the current page or workspace.
              </p>
              
              <p className="text-sm text-gray-700 mb-3 m-0">
                Typical elements include:
              </p>
              
              <ul className="list-none space-y-2 ml-0 mb-6">
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breadcrumb</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Page title</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optional page actions</span>
                </li>
              </ul>
              
              
              
              
            </div>
            
            {/* Page Header Layouts */}
            <div className="space-y-6">
              {/* Layout A */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-2">
                  Layout A — breadcrumb + title + actions inline
                </div>
                <div className="border-[0.5px] border-gray-300 overflow-hidden">
                  <div className="bg-white px-5 py-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-1.5">
                      <span className="hover:text-blue-600 cursor-pointer transition-colors">Network</span>
                      <span className="text-gray-400">›</span>
                      <span className="hover:text-blue-600 cursor-pointer transition-colors">Site</span>
                      <span className="text-gray-400">›</span>
                      <span>Boston Data Center</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[17px] font-medium text-gray-900">Boston Data Center Network Map</div>
                      <div className="flex gap-1.5">
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-[52px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Page content area</span>
                  </div>
                </div>
              </div>

              {/* Layout B */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-2">
                  Layout B — breadcrumb + title + actions + tabs below
                </div>
                <div className="border-[0.5px] border-gray-300 overflow-hidden">
                  <div className="bg-white px-5 pt-3 pb-0">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-1.5">
                      <span className="hover:text-blue-600 cursor-pointer transition-colors">Network</span>
                      <span className="text-gray-400">›</span>
                      <span>Boston Data Center</span>
                    </div>
                    <div className="flex items-center justify-between mt-1 mb-3">
                      <div className="text-[17px] font-medium text-gray-900">Boston Data Center</div>
                      <div className="flex gap-1.5">
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                      </div>
                    </div>
                    <div className="flex gap-0 border-b border-gray-200">
                      <div className="text-[13px] pl-0 pr-4 h-9 flex items-center text-gray-900 font-medium border-b-2 border-gray-900 -mb-px">Network Map</div>
                      <div className="text-[13px] px-4 h-9 flex items-center text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Inventory</div>
                      <div className="text-[13px] px-4 h-9 flex items-center text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Alerts</div>
                      <div className="text-[13px] px-4 h-9 flex items-center text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Settings</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-[52px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Page content area</span>
                  </div>
                </div>
              </div>

              {/* Layout C */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-2">
                  Layout C — compact single line
                </div>
                <div className="border-[0.5px] border-gray-300 overflow-hidden">
                  <div className="bg-white px-5 py-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Network</span>
                        <span className="text-gray-400">/</span>
                        <span className="hover:text-blue-600 cursor-pointer transition-colors">Boston Data Center</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-[12px] font-medium text-gray-700">Site Map</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-[26px] w-[26px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[26px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[0.5px] bg-gray-200"></div>
                  <div className="bg-gray-50 h-[52px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Page content area</span>
                  </div>
                </div>
              </div>

              {/* Layout D */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-2">
                  Layout D — title + meta row + actions
                </div>
                <div className="border-[0.5px] border-gray-300 overflow-hidden">
                  <div className="bg-white px-5 py-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-1.5">
                      <span className="hover:text-blue-600 cursor-pointer transition-colors">Network</span>
                      <span className="text-gray-400">›</span>
                      <span className="hover:text-blue-600 cursor-pointer transition-colors">Site</span>
                      <span className="text-gray-400">›</span>
                      <span>Boston Data Center</span>
                    </div>
                    <div className="flex items-start justify-between mt-1.5">
                      <div>
                        <div className="text-[17px] font-medium text-gray-900">Boston Data Center Network Map</div>
                        <div className="flex items-center gap-2.5 mt-1.5">
                          <div className="text-[11px] text-gray-600">
                            142 devices
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-gray-600">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                              <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.1"/>
                              <path d="M5.5 3v2.5l1.5 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                            </svg>
                            Updated 3 min ago
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-gray-600">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                              <path d="M2 9l2-2 2 1 3-6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Snapshot saved
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1.5 mt-0.5">
                        <div className="h-[26px] w-[26px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[68px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-[52px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Page content area</span>
                  </div>
                </div>
              </div>

              {/* Layout E */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-2">
                  Layout E — no breadcrumb, flat navigation
                </div>
                <div className="border-[0.5px] border-gray-300 overflow-hidden">
                  <div className="bg-white px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="text-[17px] font-medium text-gray-900 flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-gray-200 border-[0.5px] border-gray-300"></div>
                        Recent
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-[26px] w-[26px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[26px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[52px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                        <div className="h-[26px] w-[68px] rounded-md bg-gray-100 border-[0.5px] border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-[52px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Page content area</span>
                  </div>
                </div>
              </div>

              {/* Full App Illustration */}
              <div style={{ marginTop: '32px' }}>
                <div className="text-xs font-medium tracking-wider uppercase text-gray-600 mb-3">App Shell Layout Example</div>
              <div style={{ border: '0.5px solid rgba(0,0,0,0.18)', borderRadius: '0', overflow: 'hidden', background: '#ffffff', boxShadow: '0 2px 24px rgba(0,0,0,0.1)', width: '100%', maxWidth: '920px', display: 'flex', flexDirection: 'column', height: '400px' }}>
                {/* Global Header */}
                <div style={{ height: '44px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 14px 0 6px', gap: '2px', flexShrink: 0, background: '#ffffff' }}>
                  <div style={{ width: '32px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="1.4" rx="0.7" fill="currentColor"/><rect x="2" y="6.3" width="10" height="1.4" rx="0.7" fill="currentColor"/><rect x="2" y="9.6" width="10" height="1.4" rx="0.7" fill="currentColor"/></svg>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '3px 7px', borderRadius: '6px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#378ADD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>N</div>
                    <span style={{ fontSize: '12px', fontWeight: 400, color: '#1a1a1a' }}>ACME NetOps</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#999' }}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                  <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/><path d="M8.8 8.8L11.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  </div>
                  <div style={{ flex: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L9 6L13 7L9 8L7 12L5 8L1 7L5 6L7 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2.5c-1.5 0-2.5 1-2.5 2.5v1.5c0 1-.5 2-1 2.5h7c-.5-.5-1-1.5-1-2.5V5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M6 11c0 .6.4 1 1 1s1-.4 1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5.2a2 2 0 0 1 3.9.7c0 1.2-1.9 1.7-1.9 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="10.2" r="0.6" fill="currentColor"/></svg>
                    </div>
                    <div style={{ width: '0.5px', height: '20px', background: 'rgba(0,0,0,0.1)', margin: '0 4px', flexShrink: 0 }}/>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px', color: '#1a1a1a', fontWeight: 400 }}>Tenant XYZ</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#999' }}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                  {/* Sidebar */}
                  <div style={{ width: '40px', background: '#ffffff', borderRight: '0.5px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px 12px' }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#d4d4d4', flexShrink: 0 }}/>)}
                      <div style={{ width: '16px', height: '0.5px', background: 'rgba(0,0,0,0.1)' }}/>
                      {[0,1,2,3].map(i => <div key={i} style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#d4d4d4', flexShrink: 0 }}/>)}
                    </div>
                    <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)', padding: '10px 12px' }}>
                      <div style={{ width: '16px', height: '16px', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M2.5 10c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      </div>
                    </div>
                  </div>
                  {/* Main area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {/* Page header */}
                    <div style={{ background: '#ffffff', borderBottom: '0.5px solid rgba(0,0,0,0.1)', padding: '0 20px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#666' }}>
                        <span style={{ color: '#666' }}>Network</span>
                        <span style={{ color: '#aaa' }}>/</span>
                        <span style={{ color: '#666' }}>Boston Data Center</span>
                        <span style={{ color: '#aaa' }}>/</span>
                        <span style={{ color: '#1a1a1a', fontWeight: 500 }}>Site Map</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <div style={{ height: '24px', width: '24px', borderRadius: '5px', background: '#f0f0f0', border: '0.5px solid rgba(0,0,0,0.1)' }}/>
                        <div style={{ height: '24px', width: '24px', borderRadius: '5px', background: '#f0f0f0', border: '0.5px solid rgba(0,0,0,0.1)' }}/>
                        <div style={{ height: '24px', width: '52px', borderRadius: '5px', background: '#f0f0f0', border: '0.5px solid rgba(0,0,0,0.1)' }}/>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1, background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '12px', color: '#aaa' }}>Page content area</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}