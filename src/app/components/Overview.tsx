export function Overview() {
  return (
    <section id="overview" className="border-t border-gray-200 px-[0px] pt-[40px] pb-[0px] mx-[0px] mt-[0px] mb-[64px]">
      <div className="flex items-baseline gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">00</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Overview
          </h2>

          <div className="w-[70%]">
            <p className="text-sm text-gray-700 mb-6 m-0">
              The purpose of this UI framework is to establish a shared design foundation for the NetBrain SaaS experience.
            </p>
            
            <p className="text-sm text-gray-700 mb-3 m-0">
              It focuses on the structural foundation of the product UI, including:
            </p>
            
            <ul className="list-none space-y-2 ml-0">
              <li className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Product Information Architecture (IA)</span>
              </li>
              <li className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Navigation system</span>
              </li>
              <li className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Pane behaviors and patterns</span>
              </li>
              <li className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Global and page-level header layout</span>
              </li>
              <li className="text-sm text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Common page patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}