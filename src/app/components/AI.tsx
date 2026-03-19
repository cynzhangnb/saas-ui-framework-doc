import { GlobalAIDemo } from './demos/GlobalAIDemo';
import { ContextualAIDemo } from './demos/ContextualAIDemo';
import aiWorkspaceDemoHtml from '../../../public/demos/ai_workspace_demo.html?raw';

export function AI() {
  return (
    <section id="ai" className="mb-20 pt-16 border-t border-gray-200">
      {/* Section header */}
      <div className="flex items-start gap-4 mb-6">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">05</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            AI Interaction Model
          </h2>

          <div className="w-[82%]">
            <p className="text-sm text-gray-700 mb-3">This section defines:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-8 space-y-1 ml-4">
              <li>How users enter AI (entry points)</li>
              <li>How AI is surfaced in the UI across different scenarios</li>
            </ul>

            {/* FigJam reference */}
            <div className="flex items-center gap-2 mb-0">
              <span className="text-sm text-gray-700">Research of existing AI-first products</span>
              <span className="text-xs text-gray-400 border border-dashed border-gray-300 rounded px-2 py-0.5">FigJam link to be inserted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="flex gap-4">
        <span className="text-3xl leading-none flex-shrink-0 opacity-0">05</span>
        <div className="space-y-12 w-full">

          {/* AI Modes + Global AI grouped to control spacing */}
          <div className="w-full flex flex-col" style={{ gap: '36px' }}>

          {/* AI Modes subtitle */}
          <div className="w-[82%]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Modes</h3>
            <p className="text-sm text-gray-700">
              AI is accessed through two interaction modes: <strong>Global</strong>, and <strong>Contextual</strong>. Both modes use the same AI and shared conversation session, but differ in how they are triggered and presented in UI.
            </p>
          </div>

          {/* 1. Global AI */}
          <div className="mb-[24px]">
            <div className="w-[82%] mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                1. Global AI <span className="font-normal text-gray-500">— AI First</span>
              </h3>
              <p className="text-sm text-gray-700 mb-5">
                Used when user wants to ask questions about network, global search, or start a troubleshooting task. It is not tied to a specific page or function.
              </p>

              <p className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-2">UI / Behavior</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Opens AI Canvas (full-page workspace)</li>
                <li>AI is the primary interaction surface</li>
                <li>User asks questions and AI can generate outputs (e.g. map, report, analysis)</li>
                <li>User can add outputs onto the AI canvas and save it</li>
              </ul>
            </div>
            <iframe
              srcDoc={aiWorkspaceDemoHtml}
              className="w-full rounded-xl border border-gray-200"
              style={{ height: '660px', boxShadow: '0 2px 24px rgba(0,0,0,0.1)' }}
              title="Global AI Workspace Demo"
            />
          </div>

          </div>{/* end AI Modes + Global AI group */}

          {/* 2. Contextual AI */}
          <div className="mt-[0px] mb-[24px]">
            <div className="w-[82%]">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                2. Contextual AI <span className="font-normal text-gray-500">— AI Copilot</span>
              </h3>
              <p className="text-sm text-gray-700 mb-5">
                Used when user is already within a specific page or workflow. It's used for explaining current data, summarizing findings, next-step guidance.
              </p>

              <p className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-2">UI / Behavior</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 mb-6">
                <li>Opens AI Assistant pane where available (right side)</li>
                <li>AI automatically understands current page context</li>
              </ul>
            </div>

            {/* Both demos */}
            <div className="w-full flex flex-col gap-8">
              <GlobalAIDemo />
              <ContextualAIDemo />
            </div>
          </div>

          {/* AI Session Behavior */}
          <div className="w-[82%] !mt-20">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              AI Session Behavior
              <span className="ml-2 text-sm font-normal text-gray-400">(TBD)</span>
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 mt-3">
              <li>Global and contextual entry points use the same active session</li>
              <li>Contextual triggers add task-specific context to the current session</li>
              <li>Users can explicitly start a new conversation when beginning a new task</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
