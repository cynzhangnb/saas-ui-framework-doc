import { WorkspaceCentricShell } from './shells/WorkspaceCentricShell';
import { GlobalHeaderShell } from './shells/GlobalHeaderShell';

export function ApplicationShell() {
  return (
    <section id="application-shell" className="mb-20 pt-16 border-t border-gray-200">
      <div className="flex items-baseline gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">01</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Application Shell
          </h2>
          
          <p className="text-[#364153] text-sm leading-relaxed w-4/5 mb-8">
            The application shell defines the overall layout structure of the product UI, including the persistent regions that frame the user workspace. Two shell patterns are explored for different product contexts.
          </p>

          {/* Shell 1: Workspace-Centric */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Sidebar-only Shell
              </h3>
              <p className="text-[#364153] text-sm mb-2">
                No global header. Maximizes vertical workspace. Navigation and global actions are integrated into the left sidebar.
              </p>
              
            </div>
            <WorkspaceCentricShell />
          </div>

          {/* Shell 2: Global Header */}
          <div className="mb-12">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Global Header + Sidebar Shell
              </h3>
              <p className="text-[#364153] text-sm mb-2">
                Global header provides universal navigation and actions. Left sidebar manages contextual navigation. Details pane on the right.
              </p>
              
            </div>
            <GlobalHeaderShell />
          </div>

          {/* Component Matrix */}
          
        </div>
      </div>
    </section>
  );
}