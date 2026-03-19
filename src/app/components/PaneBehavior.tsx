import { useState } from 'react';
import { DashboardFlyoutDemo } from './DashboardFlyoutDemo';
import { RightPanePushedDemo } from './RightPanePushedDemo';
import { RightPaneFlyoutDemo } from './RightPaneFlyoutDemo';
import { LeftPaneDockedDemo } from './LeftPaneDockedDemo';

export function PaneBehavior() {
  const [drilldownStep, setDrilldownStep] = useState(0);
  const [floatPaneOpen, setFloatPaneOpen] = useState(false);
  const [rightFloatOpen, setRightFloatOpen] = useState(false);
  const [rightDockedOpen, setRightDockedOpen] = useState(false);

  return (
    <section id="pane-behavior" className="mb-20 pt-16 border-t border-gray-200">
      <div className="flex items-start gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">04</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Pane
          </h2>
          
          {/* Left Pane Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 m-0 p-0">
              Left Pane
            </h3>
            
            <div className="mb-8">
              
              <p className="text-[#364153] text-sm mb-4 leading-relaxed">
                Left panes are docked to the workspace and can be collapsed or expanded. They are resizable and provide persistent access to navigation or tools.
              </p>
              <LeftPaneDockedDemo />
            </div>
          </div>
          
          {/* Right Pane Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 m-0 p-0">
              Right Pane
            </h3>
            
            <div className="mb-8">
              <h4 className="text-sm mb-3 font-['Geist_Mono'] font-[Inter] text-[#101828]">
                Pushed Mode
              </h4>
              <p className="text-[#364153] text-sm mb-4 leading-relaxed">
                Push panes expand from the right and shift the workspace layout. They allow users to view detailed information while still interacting with the main content.
              </p>
              <RightPanePushedDemo />
            </div>
            
            <div className="mb-8">
              <h4 className="text-sm mb-3 font-['Geist_Mono'] font-[Inter] text-[#101828]">
                Flyout Mode
              </h4>
              <p className="text-[#364153] text-sm mb-4 leading-relaxed">
                Flyout panes are used for temporary drilldown views. They appear as an overlay panel and do not permanently change the page layout.
              </p>
              <DashboardFlyoutDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}