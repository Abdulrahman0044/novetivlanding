import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-16 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-blue-500 p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Boost Your Social Presence — Faster and Smarter with Novetiv</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of brands already leveraging AI to grow their online engagement</p>
          <Button className="bg-white hover:bg-gray-100 text-primary px-8 py-6 h-auto rounded-full font-medium transition-colors shadow-md">
            Try Novetiv For Free
          </Button>
        </div>
      </div>
    </section>
  );
}
