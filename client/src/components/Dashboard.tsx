export default function Dashboard() {
  return (
    <section className="py-12 section-darker">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0c1a30] rounded-lg border border-[#1e3055] overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Make a Post</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Create and schedule your social media posts with our intuitive interface
              </p>
              
              {/* Image container */}
              <div className="bg-[#071020] rounded-lg p-4 border border-[#1e3055] overflow-hidden">
                <img 
                  src="/images/Make a post.png"
                  alt="Make a post interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
