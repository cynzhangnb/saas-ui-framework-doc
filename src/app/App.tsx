import { ApplicationShell } from './components/ApplicationShell';
import { NavigationModel } from './components/NavigationModel';
import { PaneBehavior } from './components/PaneBehavior';
import { HeaderBehavior } from './components/HeaderBehavior';
import { PagePatterns } from './components/PagePatterns';
import { Sidebar } from './components/Sidebar';
import { Overview } from './components/Overview';
import { ProductIA } from './components/ProductIA';
import { NavigationSystem } from './components/NavigationSystem';
import { AI } from './components/AI';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-[Inter]">
      <div className="flex max-w-[1440px] mx-auto">
        {/* Sticky Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-[240px] px-10 py-12">
          {/* Page Header */}
          <div className="mx-[0px] mt-[0px] mb-[48px]">
            <div className="text-blue-600 text-xs font-['Geist_Mono'] tracking-wider mb-4">
              Visibility + Automation Cloud · v0.1 Draft
            </div>
            <h1 className="text-5xl font-semibold mb-4 text-gray-900">
              SaaS UI Framework Summary
            </h1>
            <p className="text-[#364153] text-lg leading-relaxed max-w-3xl">
              Application shell, navigation, pane & header behavior, and page patterns.
            </p>
          </div>

          {/* Sections */}
          <Overview />
          <ApplicationShell />
          <ProductIA />
          <NavigationSystem />
          <PaneBehavior />
          <AI />
          <HeaderBehavior />
          <PagePatterns />
        </main>
      </div>
    </div>
  );
}