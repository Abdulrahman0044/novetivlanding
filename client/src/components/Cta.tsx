export default function Cta() {
  return (
    <section className="py-10 md:py-16 section-dark mobile-p-reduced">
      <div className="container-custom px-5 md:px-4">
        <div className="max-w-4xl mx-auto rounded-lg bg-[#1e3055] p-5 md:p-8">
          <div className="flex flex-col gap-4">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Boost Your Social Presence — Faster and Smarter with Novetiv AI
            </span>
            <div className="flex justify-end">
              <a 
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 sm:px-8 py-2.5 rounded-md font-medium text-sm whitespace-nowrap transition-colors"
              >
                Try Novetiv for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
