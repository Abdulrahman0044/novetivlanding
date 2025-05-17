export default function Dashboard() {
  return (
    <section className="py-16 section-darker">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0c1a30] rounded-lg border border-[#1e3055] overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Unified Inbox</h3>
                <button className="text-blue-highlight text-sm">View All</button>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Manage all your social media messages, comments, and feedback in one place
              </p>
              
              {/* Dashboard mockup */}
              <div className="bg-[#071020] rounded-lg p-4 border border-[#1e3055]">
                <div className="flex flex-col space-y-3">
                  {/* Message item 1 */}
                  <div className="flex items-center p-2 border-b border-[#1e3055]">
                    <div className="w-8 h-8 rounded-full bg-[#1e3055] mr-3"></div>
                    <div>
                      <p className="text-sm text-white">Sarah Johnson</p>
                      <p className="text-xs text-gray-400">Great service, thank you!</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs text-gray-400">2m ago</span>
                    </div>
                  </div>
                  
                  {/* Message item 2 */}
                  <div className="flex items-center p-2 border-b border-[#1e3055]">
                    <div className="w-8 h-8 rounded-full bg-[#1e3055] mr-3"></div>
                    <div>
                      <p className="text-sm text-white">Michael Brown</p>
                      <p className="text-xs text-gray-400">When will the new feature be available?</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs text-gray-400">1h ago</span>
                    </div>
                  </div>
                  
                  {/* Message item 3 */}
                  <div className="flex items-center p-2">
                    <div className="w-8 h-8 rounded-full bg-[#1e3055] mr-3"></div>
                    <div>
                      <p className="text-sm text-white">Lisa Taylor</p>
                      <p className="text-xs text-gray-400">Thanks for the quick response!</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs text-gray-400">3h ago</span>
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
