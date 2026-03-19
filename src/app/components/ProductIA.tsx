export function ProductIA() {
  return (
    <section id="product-ia" className="mb-20 pt-16 border-t border-gray-200">
      <div className="flex items-baseline gap-4">
        <span className="text-blue-600 font-['Geist_Mono'] text-3xl leading-none flex-shrink-0">02</span>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 m-0 p-0 leading-none mb-6">
            Product Information Architecture
          </h2>

          <div className="w-[80%] space-y-6">
            <p className="text-sm text-gray-700 m-0">
              The product information architecture (IA) defines how our product capabilities are organized and presented to users. It ensures that users can navigate the product based on what they want to accomplish, instead of needing to understand the underlying system architecture.
            </p>

            <div>
              <h3 className="font-semibold text-gray-900 text-[14px] mx-[0px] mt-[16px] mb-[12px]">
                Key principles
              </h3>
              <ul className="list-none space-y-2 ml-0">
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>IA reflects product capabilities, not backend services</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>IA aligns with user goals and workflows</span>
                </li>
                <li className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>IA should remain stable as the platform expands</span>
                </li>
              </ul>
            </div>

            <div className="p-[0px]">
              <p className="text-sm text-[#364153] mb-3">
                The complete capability mapping and IA analysis can be found in the FigJam board
              </p>
              <div className="text-sm">
                <a 
                  href="https://www.figma.com/board/jshmvKmMAPp47R0lqJs8YV/SaaS-Main-UI-Framework?node-id=0-1" 
                  className="inline-flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                    <path d="M3.5 14C4.88071 14 6 12.8807 6 11.5V9H3.5C2.11929 9 1 10.1193 1 11.5C1 12.8807 2.11929 14 3.5 14Z" fill="#0ACF83"/>
                    <path d="M1 7C1 5.61929 2.11929 4.5 3.5 4.5H6V9.5H3.5C2.11929 9.5 1 8.38071 1 7Z" fill="#A259FF"/>
                    <path d="M1 2.5C1 1.11929 2.11929 0 3.5 0H6V5H3.5C2.11929 5 1 3.88071 1 2.5Z" fill="#F24E1E"/>
                    <path d="M6 0H8.5C9.88071 0 11 1.11929 11 2.5C11 3.88071 9.88071 5 8.5 5H6V0Z" fill="#FF7262"/>
                    <path d="M11 7C11 8.38071 9.88071 9.5 8.5 9.5C7.11929 9.5 6 8.38071 6 7C6 5.61929 7.11929 4.5 8.5 4.5C9.88071 4.5 11 5.61929 11 7Z" fill="#1ABCFE"/>
                  </svg>
                  <span className="text-gray-900 group-hover:text-blue-600">FigJam – Product IA & Navigation Analysis</span>
                </a>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="font-semibold text-gray-900 text-[20px]">
                IA Hierarchy and Navigation Mapping
              </h3>

              <div>
                
                <div className="text-sm text-gray-700 font-['Geist_Mono'] space-y-1">
                  <div>Platform</div>
                  <div className="pl-4">└ Application</div>
                  <div className="pl-8">└ Domain</div>
                  <div className="pl-12">└ Module</div>
                  <div className="pl-16">└ Feature (Page)</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Mapping</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 bg-gray-50">
                        IA Layer
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 bg-gray-50">
                        Navigation Representation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-700">Platform</td>
                      <td className="py-3 px-4 text-sm text-gray-700">NetBrain SaaS platform</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-700">Application</td>
                      <td className="py-3 px-4 text-sm text-gray-700">App switcher</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-700">Domain</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Primary sidebar category</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-700">Module</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Optional navigation grouping</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-700">Feature</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Navigation item / page</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}